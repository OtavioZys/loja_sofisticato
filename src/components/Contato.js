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
                  <iframe src="https://www.google.com/maps/embed?..." width="600" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contato;
