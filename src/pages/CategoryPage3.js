import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';  
import NavBar from '../components/NavBar';
import '../css/CategoryPage.css';

function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/categorias/${slug}/`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setCategoryName(data.nome || slug); 
        setProducts(data.produtos || []);   
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        {/* <div className="text-center custom-heading-margin">
          <h2 className="large-heading">{categoryName}</h2>
        </div> */}
        <div class="ten">
            <h1>{categoryName}</h1>
        </div>
        <div className="row">
          <ul>
            {products.length > 0 ? (
              products.map(product => (
                <div className="col-md-4 mb-4" key={product.slug}>
                  <a href={`/${slug}/${product.slug}`} className="card text-decoration-none border-0 hover-lift-light">
                    <div className="card-body text-center custom-rounded">
                      <h5 className="card-title">{product.nome}</h5>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <li>Nenhum produto disponível</li>
            )}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CategoryPage;
