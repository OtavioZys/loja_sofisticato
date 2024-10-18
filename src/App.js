import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Team from './pages/team'
import Contact from './pages/Contact';
import NoBlock from './pages/NoBlock';
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/categorias/:slug" element={<CategoryPage />} />
        <Route path="/:categorySlug/:productSlug" element={<ProductPage />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/nossa-equipe" element={<Team />} />
        <Route path="/teste" element={<NoBlock />} />
      </Routes>
    </Router>
  );
}

export default App;
