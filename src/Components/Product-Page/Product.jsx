import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import './style.css'

import NewArrivals from "../Home/Components/NewArrivals";
import FeaturedCollection from "../Home/Components/FeaturedCollection";


export default function Product() {
    const [product, setProduct] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            (prevIndex + 1) % product?.images.length
        );
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            (prevIndex - 1 + product?.images.length) % product?.images.length
        );
    };

    let { id } = useParams()
    function displayDetails() {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setProduct(data);

            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }
    useEffect(() => {
        displayDetails()
    }, [id]);
    return (
        <div className="Product-Page">
            <section className="first-sec-main p-3">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Product</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto">
                            <span><a href="..." className="home-text text-decoration-none"> Home </a> /
                            </span>
                        </div>
                        <div className="col-auto m-0 p-0">
                            <p className="about-us-text">Product Details</p>
                        </div>
                    </div>
                </div>
            </section>
            <main className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div id="productImageCarousel" className="carousel slide product-image-carousel">
                            <div className="carousel-inner">
                                {product?.images.map((image, index) => (
                                    <div
                                        className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                                        key={index}

                                    >
                                        <img src={image} alt={`Product Image ${index + 1}`} loading="lazy" />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" onClick={handlePrev}>
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" onClick={handleNext}>
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h2 className="fs-3">{product?.title}</h2>
                        <p className="price">
                            <span className="fs-4 fw-bold">${product?.price}</span>
                            <span className="badge bg-secondary-subtle text-secondary">Discount : ${product?.discountPercentage} </span>
                        </p>
                        <hr />
                        <p>{product?.description}</p>
                        <hr />
                        <p>
                            <i className="far fa-eye" /> 14 people are viewing this right now.
                        </p>
                        <hr />
                        <p><strong>Availability:</strong> {product?.stock} left in stock</p>
                        <p><strong>SKU:</strong> {product?.sku}</p>
                        <hr />
                        <div className="form-group size-color-options">
                            <div className="d-flex align-items-center">
                                <label htmlFor="color" className="me-4 pe-2">Color:</label><br />
                                <button className="btn rounded-1 p-3 btn-warning" />
                                <button className="btn rounded-1 p-3 btn-secondary" />
                                <button className="btn rounded-1 p-3 btn-danger" />
                                <button className="btn rounded-1 p-3 btn-dark" />
                                <button className="btn rounded-1 p-3 btn-primary" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center  mt-3 gap-1">
                            <div className=" w-50 d-flex justify-content-between align-items-center quantity-input">
                                <div className="input-group-prepend">
                                    <button className="btn me-2 btn-outline-secondary" type="button" id="minusButton">
                                        -
                                    </button>
                                </div>
                                <input type="number" className="form-control" defaultValue={1} />
                                <div className="input-group-append">
                                    <button className="btn ms-2 btn-outline-secondary" type="button" id="plusButton">
                                        +
                                    </button>
                                </div>
                            </div>
                            <Link to={'/Checkout'} className="btn btn-secondary btn-lg buy-now">Buy it now</Link>
                        </div>
                        <div className="return-policy mt-3">
                            <h4>Return rules summary</h4>
                            <ul>
                                <li>Returns accepted for 30 days</li>
                                <li>Free return shipping</li>
                                <li>No restocking fee</li>
                                <li>No final sale items</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="checkout mt-3">
                            <p className="fw-medium px-3 fs-6">Guaranteed safe checkout</p>
                            <div className="d-flex px-3">
                                <a href="Checkout.html"><img src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg" className="pe-2" /></a>
                                <a href="Checkout.html"><img src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" className="pe-2" /></a>
                                <a href="Checkout.html"><img src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/bitcoin-e41278677541fc32b8d2e7fa41e61aaab2935151a6048a1d8d341162f5b93a0a.svg" className="pe-2" /></a>
                                <a href="Checkout.html"><img src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg" className="pe-2" /></a>
                                <a href="Checkout.html"><img src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" className="pe-2" /></a>
                                <a href="Checkout.html"><img src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" className="pe-2" /></a>
                            </div>
                            <hr />
                        </div>
                        <div className="social-sharing mt-5 d-flex gap-4 align-items-center">
                            <h3>Share:</h3>
                            <a href="#" className="facebook text-black"><i className="fab fa-facebook-f" /> Facebook</a>
                            <a href="#" className="twitter text-black"><i className="fab fa-twitter" /> Twitter</a>
                            <a href="#" className="pinterest text-black"><i className="fab fa-pinterest" /> Pinterest</a>
                        </div>
                    </div>
                </div>
                <div className="mt-5 Texts">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active border-0 border-bottom" data-bs-toggle="tab" href="#description" role="tab">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link border-0" data-bs-toggle="tab" href="#video" role="tab">Video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link border-0" data-bs-toggle="tab" href="#productType" role="tab">Product Type</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link border-0" data-bs-toggle="tab" href="#delivery" role="tab">Delivery System</a>
                        </li>
                    </ul>
                    <div className="tab-content border-0">
                        <div className="tab-pane fade show active border-0" id="description" role="tabpanel">
                            <p>
                                like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and
                                a search  It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters.
                            </p>
                        </div>
                        <div className="tab-pane fade" id="video" role="tabpanel">
                            <p>uncover many web sites still in
                                their infancy. Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose injected humour and
                                the like.</p>
                        </div>
                        <div className="tab-pane fade" id="productType" role="tabpanel">
                            <p> now use Lorem Ipsum as their default model text, and
                                a search  It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters.</p>
                        </div>
                        <div className="tab-pane fade" id="delivery" role="tabpanel">
                            <p>now use Lorem Ipsum as their default model text, and
                                a search  It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters.</p>
                        </div>
                    </div>
                </div>
                <NewArrivals></NewArrivals>
                <FeaturedCollection></FeaturedCollection>

                <section className="faq mt-5">
                    <section>
                        <div>
                            <div className="page-title text-center fs-3 fw-normal mt-5 mb-3">
                                <p>FAQs</p>
                            </div>
                            <div className="accordion px-5 pb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How to buy a product ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first  accordion body.</strong> It
                                            is shown by default, until the collapse plugin adds the
                                            appropriate classes that we use to style each element. These
                                            classes control the overall appearance, as well as the
                                            showing and hiding via CSS transitions. You can modify any
                                            of this with custom CSS or overriding our default variables.
                                            also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the
                                            transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How can I make refund from your website ?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second  accordion body.</strong>
                                            It is hidden by default, until the collapse plugin adds the
                                            appropriate classes that we use to style each element. These
                                            classes control the overall appearance, as well as the
                                            showing and hiding via CSS transitions. You can modify any
                                            of this with custom CSS or overriding our default variables.
                                            also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the
                                            transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            I am a new answer .Have should I start?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third  accordion body.</strong> It
                                            is hidden by default, until the collapse plugin adds the
                                            appropriate classes that we use to style each element. These
                                            classes control the overall appearance, as well as the
                                            showing and hiding via CSS transitions. You can modify any
                                            of this with custom CSS or overriding our default variables.
                                            also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the
                                            transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            I am a new answer .Have should I start?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third  accordion body.</strong> It
                                            is hidden by default, until the collapse plugin adds the
                                            appropriate classes that we use to style each element. These
                                            classes control the overall appearance, as well as the
                                            showing and hiding via CSS transitions. You can modify any
                                            of this with custom CSS or overriding our default variables.
                                            also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the
                                            transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mb-5">
                        <div>
                            <div className="for-contact text-center d-flex flex-column align-items-center">
                                <h3 className="fw-semibold">
                                    For father more help, contact with our support team.
                                </h3>
                                <a href="About-us.html" className="btn btn-primary rounded-1 py-1 px-3 my-4">
                                    Contact Us
                                </a>
                                <p className="fw-medium fs-5">
                                    <span className="fa fa-phone"> </span> +0123-456-789
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
            </main> </div>

    )
}
