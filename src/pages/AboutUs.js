import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';  
import NavBar from '../components/NavBar';
import loja from '../images/SM0110-115.jpg';
import '../css/AboutUs.css';
import logo_cima from '../assets/logo_cima.png';
import logo_solo from '../assets/logo_solo.png';
import logo_lateral from '../assets/logo_lateral.png';
import cima from '../assets/cima.png';

const AboutUs = () => {
  return (
    <div>
        <NavBar />

        <section className="py-3 py-md-5">
        <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
                <img 
                className="img-fluid rounded" 
                loading="lazy" 
                src={loja} 
                alt="About 1" 
                />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
                <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                    <h2 className="mb-3">Quem Somos</h2>
                    <p className="lead fs-4 text-secondary mb-3">
                        A Sofisticato Móveis é uma loja de alto padrão especializada em oferecer peças exclusivas e elegantes para transformar ambientes. 
                        Com um design sofisticado e atenção aos mínimos detalhes, nossos móveis combinam luxo e conforto, proporcionando experiências únicas para seus espaços. 
                        Trabalhamos com materiais nobres e acabamentos impecáveis, garantindo qualidade e durabilidade. 
                        Acreditamos que o mobiliário deve refletir estilo e personalidade, criando ambientes que inspiram e acolhem.
                    </p>
                </div>
                </div>
                {/* <div className="text-center mb-5">
                    <Link to="/nossa-equipe" className="button-equipe">
                        Conheça nossa Equipe
                    </Link>
                </div>
                <div className="text-center mb-5">
                    <Link to="/teste" className="button-equipe">
                        teste
                    </Link>
                </div> */}
            </div>
            </div>
        </div>
        </section>

        


        <Footer />
    </div>
  );
};

export default AboutUs;
