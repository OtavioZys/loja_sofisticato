import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/CategoryPage.css';
import $ from 'jquery';

function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/categorias/${slug}/`)
      .then(response => response.json())
      .then(data => {
        setCategoryName(data.nome || slug); 
        setProducts(data.produtos || []);   
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    // jQuery effect
    $('.card').delay(1800).queue(function(next) {
      $(this).removeClass('hover');
      $('a.hover').removeClass('hover');
      next();
    });
  }, [products]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        <div className="ten">
          <h1>{categoryName}</h1>
        </div>
        <section style={{ backgroundColor: '#FFF' }}>
          <div className="container py-5">
            <div className="row">
              {products.length > 0 ? (
                products.map(product => (
                  <div className="col-lg-4 col-md-6 mb-4" key={product.slug}>
                    <div className="card hover">
                      <div className="card-img">
                        {product.imagens.map((image, index) => (
                          <img
                            key={index}
                            className="card-img-top mb-5 mb-md-0"
                            src={`http://localhost:8000${image.arquivo}`}
                            alt={product.nome}
                          />
                        ))}
                        <div className="overlay">
                          <div className="overlay-content">
                            <a className="hover" href={`/${slug}/${product.slug}`}>Ver produto</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                          <h1><strong>{product.nome}</strong></h1>
                          <p>{product.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p className="text-center">Nenhum produto disponível</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default CategoryPage;
