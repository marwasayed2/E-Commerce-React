
import { Link } from 'react-router-dom';
import './style.css'
const Footer = () => {
    // If you need to manage any state or events, you can use hooks here.
    return (
        <footer className="bg-light pt-5 foot">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 textdec mb-4">
                        <a className="mb-2 text-dark titles fw-bold p-4 ps-3 fs-4">About Us.</a>
                        <p className="text-dark py-3 px-3 pb-0 w-75 fs-6">
                            Minimal E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.
                        </p>
                        <div className="d-flex pt-1 pb-3 px-4">
                            <a href="https://www.facebook.com/"><i className="bi bi-facebook pe-4 text-dark"></i></a>
                            <a href="https://x.com/"><i className="bi bi-twitter pe-4 text-dark"></i></a>
                            <a href="https://www.youtube.com/"><i className="bi bi-youtube pe-4 text-dark"></i></a>
                            <a href="https://www.instagram.com/"><i className="bi bi-instagram pe-4 text-dark"></i></a>
                            <a href="https://www.tiktok.com/"><i className="bi bi-tiktok pe-4 text-dark"></i></a>
                        </div>
                        <p className="fw-medium px-3 fs-6">Guaranteed safe checkout</p>
                        <div className="d-flex px-3">
                            <img
                                src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg"
                                className="pe-2" alt="Amazon" />
                            <img
                                src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg"
                                className="pe-2" alt="Apple Pay" />
                            <img
                                src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/bitcoin-e41278677541fc32b8d2e7fa41e61aaab2935151a6048a1d8d341162f5b93a0a.svg"
                                className="pe-2" alt="Bitcoin" />
                            <img
                                src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
                                className="pe-2" alt="Google Pay" />
                            <img
                                src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
                                className="pe-2" alt="PayPal" />
                            <img
                                src="https://minimalin-demo.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                                className="pe-2" alt="Visa" />
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-lg-2 col-6 mb-4">
                        <p className="text-dark titles fs-5 fw-bold">Quick Link</p>
                        <a href="index.html" className="text-dark d-block mb-3">
                            <p>My Account</p>
                        </a>
                        <a href="index.html" className="text-dark d-block mb-3">
                            <p>My Cart</p>
                        </a>
                        <a href="#" className="text-dark d-block mb-3">
                            <p>Wishlist</p>
                        </a>
                        <a href="#" className="text-dark d-block mb-3">
                            <p>Gift Card</p>
                        </a>
                        <a href="/FrequentlyAskedQuestions" className="text-dark d-block mb-3">
                            <p>Need Help?</p>
                        </a>
                    </div>

                    {/* Information Section */}
                    <div className="col-lg-2 col-6 mb-4">
                        <p className="text-dark titles fw-bold fs-5">Information</p>
                        <Link to={'/AboutUs'} className="text-dark d-block mb-3 textnav">
                            <p>About us</p>
                        </Link>
                        <Link to={'/FrequentlyAskedQuestions'} className="text-dark d-block mb-3 textnav">
                            <p>Contact</p>
                        </Link>
                        <Link to={'/BlogDetails'} className="text-dark d-block mb-3">
                            <p>Blogs</p>
                        </Link>
                        <Link to={''} className="text-dark d-block mb-3">
                            <p>Size Chart</p>
                        </Link>
                        <Link to={'/FrequentlyAskedQuestions'} className="text-dark d-block mb-3">
                            <p>FAQ</p>
                        </Link>
                    </div>

                    {/* Policies Section */}
                    <div className="col-lg-2 col-6 mb-4">
                        <p className="text-dark titles fw-bold fs-5">Policies</p>
                        <a href="#" className="text-dark d-block mb-3 textnav">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="#" className="text-dark d-block mb-3 textnav">
                            <p>Refund Policy</p>
                        </a>
                        <a href="/FrequentlyAskedQuestions" className="text-dark d-block mb-3">
                            <p>Terms of Service</p>
                        </a>
                        <a href="#" className="text-dark d-block mb-3">
                            <p>Shipping Policy</p>
                        </a>
                        <a href="about-us.html" className="text-dark d-block mb-3">
                            <p>Contact Information</p>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            {/* Copyright Section */}
            <div className="align-items-center flex-column d-flex justify-content-center mt-3 copyrightsec">
                <p className="text-dark d-block">
                    © Copyright <strong>Minimalin</strong> . All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
