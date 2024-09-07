import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/produto/${product.slug}`}>
        <img src={product.imagem} alt={product.nome} />
        <h2>{product.nome}</h2>
      </Link>
    </div>
  );
}

export default ProductCard;
