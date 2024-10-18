import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://sofisticatomoveis.com.br/api/categorias/${slug}/`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [slug]);

  return (
    <section className="brand_section">
      <div className="container">
        <div className="heading_container">
          <h2>{slug}</h2>
        </div>
        <div className="brand_container layout_padding2">
          <div className="row">
            {products.map(product => (
              <div key={product.slug} className="col-md-4">
                <div className="box b-1">
                  <div className="img-box">
                    <img src={product.imagem} alt={product.nome} />
                  </div>
                  <div className="detail-box">
                    <h6>{product.nome}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
