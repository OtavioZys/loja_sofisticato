import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/NavBar.css';
import logo from '../assets/logo_branco.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        id="menuToggleBtn"
        className="btn btn-default"
        onClick={toggleMenu}
      >
        <i id="menuIcon" className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
      </button>

      <nav className="navbar navbar-inverse" style={{ backgroundColor: '#343434' }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className={`navbar-collapse ${menuOpen ? 'in' : ''}`} id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/sobre-nos">Identidade</Link></li>
              <li><Link className="nav-link" to="/categorias">Curadoria</Link></li>
              <li><Link className="nav-link" to="/contato">Contato</Link></li>
              <li><a href="https://www.pinterest.com.br"><i className="bi bi-pinterest"></i></a></li>
              <li><a href="https://www.instagram.com.br"><i className="bi bi-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
