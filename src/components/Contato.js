import React from 'react';
import '../css/Contato.css';

const Contato = () => {
  return (
      <div className="container mt-5">
        <div className="three">
          <h1><strong>Onde nos encontrar</strong></h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
                <div className="contact_form-container">

                  <h5><strong>Loja</strong></h5>
                  <p>
                    Av. Isaac Póvoas, 169, Popular - Cuiabá/MT<br />
                    6598105-0177<br />
                    vendas@sofisticatomoveis.com.br
                  </p>

                  <h5><strong>Estacionamento</strong></h5>
                  <p>
                    Rua Senador Vilas Boas, 284, Praça Popular<br />
                    [acesso pela rua dos fundos]
                  </p>

                  <h5><strong>Escritório</strong></h5>
                  <p>
                    Av. Isaac Póvoas, 1331, Sala 75 - Ed. Milão, Cuiabá/MT<br />
                    65 3023-8871<br />
                    sofisticato@sofisticatomoveis.com.br
                  </p>
                </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.9875956035858!2d-56.106716399999996!3d-15.5923116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db185882b830b%3A0x81cdce4776fc28d6!2sAv.%20Isaac%20P%C3%B3voas%2C%20169%20-%20Popular%2C%20Cuiab%C3%A1%20-%20MT%2C%2078020-510!5e0!3m2!1spt-BR!2sbr!4v1727966240110!5m2!1spt-BR!2sbr" 
                    width="600" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contato;
