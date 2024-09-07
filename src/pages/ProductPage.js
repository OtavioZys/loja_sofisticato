import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductPage.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function ProductPage() {
    const { categorySlug, productSlug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

    if (loading) return <p>Carregando...</p>;
    if (!product) return <p>Produto não encontrado</p>;

    return (
        <div>
            <NavBar />

            {/* Product section */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            {/* Display all images associated with the product */}
                            {product.imagens.map((image, index) => (
                                <img
                                    key={index}
                                    className="card-img-top mb-5 mb-md-0"
                                    src={`http://localhost:8000${image.arquivo}`}
                                    alt={product.nome}
                                />
                            ))}
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1"><h6>{categorySlug.toUpperCase()}</h6></div>
                            <div className="three">
                                <h1><strong>{product.nome}</strong></h1>
                            </div>
                            <p className="lead">{product.descricao}</p>
                            <div className="three">
                                <h2><strong>Medidas</strong></h2>
                            </div>
                            <p className="lead">Largura: {product.largura}cm</p>
                            <p className="lead">Profundidade: {product.profundidade}cm</p>
                            <p className="lead">Altura: {product.altura}cm</p>

                            {/* Botões de redes sociais */}
                            <div className="btn-group btn-block" role="group">
                                <button className="btn f-social f-pinterest" onClick={() => window.open('https://www.pinterest.com', '_blank')}>
                                    <i className="bi bi-pinterest"> Pinterest </i>
                                </button>
                                <button className="btn f-social f-whatsapp" onClick={() => window.open('https://web.whatsapp.com/', '_blank')}>
                                    <i className="bi bi-whatsapp"> WhatsApp</i>
                                </button>
                                <button className="btn f-social f-instagram" onClick={() => window.open('https://3dwarehouse.sketchup.com/', '_blank')}>
                                    <p>
                                        <img width="25" height="25" src="https://img.icons8.com/carbon-copy/100/google-sketchup.png" alt="google-sketchup"/> 3DWarehouse
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ProductPage;
