import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Carousel.css';

const Carousel2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/produtos-carrossel/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching carousel data:', error));
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">
        {products.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div key={product.slug} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {product.imagens && (
              <img src={`http://localhost:8000${product.imagens}`} className="d-block w-100" alt={product.descricao || product.nome} />
            )}
            <div className="carousel-caption d-none d-md-block">
              <h5>{product.nome}</h5>
              <p>{product.descricao}</p>
              <Link to={`/produto/${product.slug}`} className="btn-vermais btn-primary">Ver mais</Link>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próxima</span>
      </button>
    </div>
  );
};

export default Carousel2;
