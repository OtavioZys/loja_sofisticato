import React from 'react';
import '../css/NoBlock.css'; 
import Footer from '../components/Footer';  
import NavBar from '../components/NavBar';
import block1 from '../images/pngwing.com(1).png';
import block2 from '../images/pngwing.com.png';

const NoBlock = () => {
    return (
      <div>
        <NavBar />

        <section className="py-3 py-md-5">
            <div className="container">
                <div className="content">
                <div className="flex-container">
                    <div className="img-container">
                        <img src={block1} alt="block" />
                    </div>

                    <div className="text">
                        <p>Bloquinho em construção..</p>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <Footer />
      </div>
    );
};

export default NoBlock;
