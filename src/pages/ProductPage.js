import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../css/ProductPage.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function ProductPage() {
    const { categorySlug, productSlug } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingRelated, setLoadingRelated] = useState(true);

    useEffect(() => {
        // Fetching product details
        fetch(`http://localhost:8000/api/${categorySlug}/${productSlug}/`)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched product data:', data);
                setProduct(data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
                setProduct(null);
            })
            .finally(() => setLoading(false));
    }, [categorySlug, productSlug]);

    useEffect(() => {
        // Fetching related products
        if (product) {
            fetch(`http://localhost:8000/api/produtos-relacionados/${categorySlug}/${productSlug}/`)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched related products:', data);
                    setRelatedProducts(data);
                })
                .catch(error => {
                    console.error('Error fetching related products:', error);
                    setRelatedProducts([]);
                })
                .finally(() => setLoadingRelated(false));
        }
    }, [product, categorySlug, productSlug]);

    if (loading) return <p>Carregando...</p>;
    if (!product) return <p>Produto não encontrado</p>;

    // Gerar link de compartilhamento para o Pinterest
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(`http://localhost:8000${product.imagens[0].arquivo}`)}&description=${encodeURIComponent(product.descricao)}`;

    // Gerar link de compartilhamento para o WhatsApp
    const whatsappMessage = `Confira este produto incrível: ${product.nome} na Sofisticato. Veja mais: ${window.location.href}.`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div>
            <NavBar />

            {/* Seção do produto */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            {/* Carrossel de imagens usando react-bootstrap */}
                            <Carousel>
                                {product.imagens.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block img-fluid"
                                            src={`http://localhost:8000${image.arquivo}`}
                                            alt={product.nome}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <div className="col-md-6">
                            <div className="small mb-1">
                                <h6>{categorySlug.toUpperCase()}</h6>
                            </div>
                            <div className="three">
                                <h1><strong>{product.nome.toUpperCase()}</strong></h1>
                            </div>
                            <p className="lead">{product.descricao}</p>
                            {product.designer && (
                                <div>
                                    <div className="three">
                                        <h6>Designer</h6>
                                    </div>
                                    <p className="lead">{product.designer.nome}</p>
                                </div>
                            )}
                            <div className="three">
                                <h6>Medidas</h6>
                            </div>
                            {Array.isArray(product.medidas) && product.medidas.length > 0 ? (
                                <ul>
                                    {product.medidas.map((item, index) => (
                                        <li key={index} className="lead">{item.medida}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="lead">Modelo personalizado, consultar equipe de vendas.</p>
                            )}

                            {/* Botões de redes sociais */}
                            <div className="btn-group btn-block" role="group">
                                <button className="btn f-social f-pinterest" onClick={() => window.open(pinterestUrl, '_blank')}>
                                    <i className="bi bi-pinterest"> Pinterest </i>
                                </button>
                                <button className="btn f-social f-whatsapp" onClick={() => window.open(whatsappUrl, '_blank')}>
                                    <i className="bi bi-whatsapp"> WhatsApp</i>
                                </button>
                                <button className="btn f-social f-instagram" onClick={() => window.open(product.link_sketchup, '_blank')}>
                                    <p>
                                        <img width="25" height="25" src="https://img.icons8.com/carbon-copy/100/google-sketchup.png" alt="google-sketchup"/> Blocos 3D
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de produtos relacionados */}
            {!loadingRelated && relatedProducts.length > 0 && (
                <section className="py-5 bg-sofisticato-produtos">
                    <div className="container px-4 px-lg-5 mt-5">
                        <h2 className="fw-bolder mb-4">Produtos relacionados</h2>
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {relatedProducts.map((relatedProduct, index) => (
                                <div className="col mb-5" key={index}>
                                    <div className="card h-100">
                                        {/* Badge de destaque */}
                                        {relatedProduct.destaque && (
                                            <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Destaque</div>
                                        )}
                                        {/* Imagem do produto */}
                                        <img className="card-img-top" src={`http://localhost:8000${relatedProduct.imagens[0].arquivo}`} alt={relatedProduct.nome} />
                                        {/* Detalhes do produto */}
                                        <div className="card-product p-4">
                                            <div className="text-center">
                                                {/* Nome do produto */}
                                                <h5 className="fw-bolder">{relatedProduct.nome}</h5>
                                                {/* Avaliações */}
                                                {relatedProduct.avaliacoes && (
                                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                                        {[...Array(relatedProduct.avaliacoes)].map((_, starIndex) => (
                                                            <div key={starIndex} className="bi-star-fill"></div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* Ações */}
                                        <div className="card-product p-4 pt-0 border-top-0">
                                            <div className="text-center">
                                                <a className="btn btn-outline-dark mt-auto" href={`/produtos/${relatedProduct.slug}`}>Ver mais</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
}

export default ProductPage;
