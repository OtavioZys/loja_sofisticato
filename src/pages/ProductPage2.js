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
                            <img className="card-img-top mb-5 mb-md-0" src={product.imagem} alt={product.nome} />
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1"><h6>{categorySlug.toUpperCase()}</h6></div>
                            <h1 className="display-5 fw-bolder">{product.nome}</h1>
                            <p className="lead">{product.descricao}</p>
                            <h4><strong>Medidas</strong></h4>
                            <p className="lead">Largura: {product.largura}cm</p>
                            <p className="lead">Profundidade: {product.profundidade}cm</p>
                            <p className="lead">Altura: {product.altura}cm</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related items section */}
            <section className="py-5 bg-sofisticato-produtos">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Produtos relacionados</h2>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {['x', 'y', 'w', 'z'].map((item, index) => (
                            <div className="col mb-5" key={index}>
                                <div className="card h-100">
                                    {/* Conditional Sale badge */}
                                    {item === 'y' || item === 'w' ? (
                                        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Destaque</div>
                                    ) : null}
                                    {/* Product image */}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    {/* Product details */}
                                    <div className="card-product p-4">
                                        <div className="text-center">
                                            {/* Product name */}
                                            <h5 className="fw-bolder">Cadeira {item}</h5>
                                            {/* Product reviews */}
                                            {(item === 'y' || item === 'z') && (
                                                <div className="d-flex justify-content-center small text-warning mb-2">
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                    <div className="bi-star-fill"></div>
                                                </div>
                                            )}
                                        </div>
                                        {/* <div className="text-center">
                                            <a className="btn btn-outline-dark mt-auto" href="#">Ver mais</a>
                                        </div> */}
                                    </div>
                                    {/* Product actions */}
                                    <div className="card-product p-4 pt-0 border-top-0">
                                        <div className="text-center">
                                            <a className="btn btn-outline-dark mt-auto" href="#">Ver mais</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ProductPage;
