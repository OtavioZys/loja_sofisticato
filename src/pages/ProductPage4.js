import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        setProduct(null);  // Set product to null if there's an error
      })
      .finally(() => setLoading(false));
  }, [categorySlug, productSlug]);

  if (loading) return <p>Carregando...</p>;
  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.imagem_url} alt={product.nome} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>{product.nome}</h1>
            <p><strong>Descrição:</strong> {product.descricao}</p>
            <button className="btn btn-primary">Adicionar ao carrinho</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
