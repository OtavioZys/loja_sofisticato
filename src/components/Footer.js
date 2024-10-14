import React from 'react';
import '../css/Footer.css'; // Your CSS file
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import logo from '../assets/logo_footer.png';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Redes Sociais */}
                    <div style={{ marginTop: '30px' }}>
                        <h2>Nossas redes sociais</h2>
                        {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a> */}
                        <a href="https://www;pinterest.com.br" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-pinterest"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>

                    {/* Logo */}
                    <div className="logo">
                        <img width="300" height="300" src={logo} alt="Sofisticato" />
                    </div>

                    {/* Endereço e Contato */}
                    <div style={{ marginTop: '60px' }}>
                        <h3>Contato</h3>
                        <p>Av. Isaac Póvoas, 169, Popular</p>
                        <p>Cuiabá, MT - 78020-510</p>
                        <p>sofisticato@sofisticatomoveis.com.br</p>
                        <p>Telefone: (65) 98105-0177</p>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{ marginTop: '20px' }}>
                    <p>&copy; 2024 Sofisticato. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
