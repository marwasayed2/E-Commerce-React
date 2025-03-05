import { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
const Collections = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products data from API
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products.slice(0, 24))) // Assuming products is the key holding the product array
            .catch(error => console.error('Error fetching products:', error));
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <div>
            <section className="first-sec-main p-3">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Collections</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <span>
                                <Link to={'/'} className="home-text text-decoration-none"> Home </Link> /
                            </span>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <p className="about-us-text">Collections</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="m-5">
                <div className="container-sm">
                    <div className="row">
                        {products.length === 0 ? (
                            <p>Loading products...</p>
                        ) : (
                            products.map((product, index) => (
                                <div className=" col-lg-3 col-md-4 col-sm-6 col-12 p-3" key={index}>
                                    <div className="collection-product p-2">
                                        <div className="image-container">
                                            <div className='collection-product-img'>
                                                <Link to={'/Product/' + product.id} >
                                                    <img src={product.thumbnail} alt={product.name} />
                                                </Link></div>
                                            <div className="text-align-center justify-content-center align-items-center d-flex flex-column p-3 lh-lg">
                                                <a href={`Product-Page.html?id=${product.id}`}>{product.title.split(' ').slice(0, 2).join(' ')}</a>
                                                <p>({product.stock} items)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collections;
