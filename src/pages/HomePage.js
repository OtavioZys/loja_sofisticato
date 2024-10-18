 import Footer from '../components/Footer';  
import NavBar from '../components/NavBar';
import Carousel2 from '../components/Carousel';
import '../css/HomePage.css';


function HomePage() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <NavBar />

      <section className="py-0">
      <div className="container-fluid p-0">
          <Carousel2 />
      </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;

