import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carousel2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/produtos-carrossel/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching carousel data:', error));
  }, []);

  return (
    <Carousel interval={3500} indicators={true} controls={true}>
      {products.map((product, index) => (
        <Carousel.Item key={product.slug}>
          {product.imagens && (
            <img
              className="d-block w-100"
              src={`http://localhost:8000${product.imagens}`}
              alt={product.descricao || product.nome}
              style={{objectFit: 'cover' }}  
            />
          )}
          <Carousel.Caption>
            {/* <h5>{product.nome}</h5>
            <p>{product.descricao}</p> */}
            {/* <Link to={`/produto/${product.slug}`} className="btn-vermais btn-primary">Ver mais</Link> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousel2;
