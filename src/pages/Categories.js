import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Categories.css';
import $ from 'jquery';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://sofisticatomoveis.com.br/api/categorias/')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    // jQuery effect
    $('.card').delay(1800).queue(function(next) {
      $(this).removeClass('hover');
      $('a.hover').removeClass('hover');
      next();
    });
  }, [categories]);

  return (
    <div>
      <NavBar />

      <div className="container mt-5">
        <div className="ten">
          <h1>Categorias</h1>
        </div>
        <div className="row">
          {categories.map(category => (
            <div className="col-md-4 mb-4" key={category.slug}>
              <div className="card hover">
                <div
                  className="card-img"
                  style={{
                    backgroundImage: `url(https://sofisticatomoveis.com.br${category.imagem})`,
                  }}
                >
                  <div className="overlay">
                    <div className="overlay-content">
                      <a href={`/categorias/${category.slug}`}>Ver categoria</a>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                    <h2><strong>{category.nome}</strong></h2>
                    <p>{category.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
