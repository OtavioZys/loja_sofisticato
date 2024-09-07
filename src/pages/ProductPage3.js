import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductPage.css';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ProductPage = () => {
    const { categoria_slug, slug } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/${categoria_slug}/${slug}/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProduct(data);
                setMainImage(data.images[0]);
            } catch (error) {
                console.error('Error fetching the product:', error);
                setError(error.message);
            }
        };

        fetchProduct();
    }, [categoria_slug, slug]);

    const changeImage = (event) => {
        setMainImage(event.target.src);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />

            <div className="container mt-5 mb-5">
                <h1>{categoria_slug}</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img id="main-image" src={mainImage} width="250" alt="Main" />
                                        </div>
                                        <div className="thumbnail text-center">
                                            {product.images.map((image, index) => (
                                                <img 
                                                    key={index} 
                                                    src={image} 
                                                    width="70" 
                                                    alt={`Thumbnail ${index + 1}`} 
                                                    onClick={changeImage} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <i className="fa fa-long-arrow-left"></i>
                                                <span className="ml-1">Back</span>
                                            </div>
                                            <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-4 mb-3">
                                            <h5 className="text-uppercase">{product.name}</h5>
                                        </div>
                                        <p className="about">
                                            {product.description}
                                        </p>
                                        <div className="cart mt-4 align-items-center">
                                            <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                                            <i className="fa fa-heart text-muted"></i>
                                            <i className="fa fa-share-alt text-muted"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductPage;
