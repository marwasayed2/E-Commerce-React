import { useEffect, useState } from "react";
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { Link } from "react-router-dom";


export default function BestSelling() {
    const [products, setProducts] = useState([]);
    const [activeColors, setActiveColors] = useState({});


    useEffect(() => {
        // Fetch products data from API
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const randomProducts = data.products
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 8);
                setProducts(randomProducts);
            }) // Assuming products is the key holding the product array
            .catch(error => console.error('Error fetching products:', error));
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    function changeBackground(productId, color) {
        setActiveColors(prevColors => ({
            ...prevColors,
            [productId]: color,
        }));

    }
    const colors = [
        { name: "Gold", hex: "#505006eb" },
        { name: "Grey", hex: "#09093bc2" },
        { name: "Pink", hex: "#0937099e" },
        { name: "Red", hex: "#291212b5" },
        { name: "More", hex: "#E0E0E0" },
    ];
    return (
        <section className="BestSelling">
            <div className="Section-title pb-4">
                <h2 className="h2">Best Selling</h2>
            </div>
            <div className="row">
                {products.map((product, index) => (
                    <div className=" col-lg-3 col-md-4 col-sm-6 col-12 p-3" key={index}>
                        <div className="collection-product p-2">
                            <div className="image-container">
                                <div className='collection-product-img position-relative' style={{
                                    backgroundColor: activeColors[product.id] || "#dee2e640",
                                }}>
                                    <Link to={'/Product/' + product.id}>
                                        <img src={product.thumbnail} alt={product.name} />
                                    </Link>
                                    <div className="icons">
                                        <i className="icon-eye" data-aos="fade-down">
                                            <FaEye />
                                        </i>
                                        <i className="icon-cart" data-aos="fade-down">
                                            <FaShoppingCart />
                                        </i>
                                        <i className="icon-heart" data-aos="fade-down">
                                            <FaRegHeart />
                                        </i>
                                        <i className="icon-compare" data-aos="fade-down">
                                            <MdOutlineCompareArrows />
                                        </i>
                                    </div>
                                </div>
                                <div className="text-align-center justify-content-center align-items-center d-flex flex-column p-3 lh-lg">
                                    <a href={`Product-Page.html?id=${product.id}`}>{product.title.split(' ').slice(0, 2).join(' ')}</a>
                                    <a>L.E {product.price} </a>

                                    <div className="color-selector">
                                        {colors.map((color, index) => (
                                            <div
                                                onClick={() => changeBackground(product.id, color.hex)}
                                                key={index}
                                                className="color-dot"
                                                style={{ backgroundColor: color.hex }}
                                            >
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="text-center py-3 ">
                <Link className="btn btn-primary fs-5 fw-medium px-4" to={'/Collections'}>View All</Link>
            </div>
        </section>
    )
}
