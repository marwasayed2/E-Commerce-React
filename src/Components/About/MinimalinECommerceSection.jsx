import './style.css'



function MinimalinECommerceSection() {
    return (
        <section className="Minimalin-E-Commerce">
            <div className="container">
                <div className="row img-par flex-row-reverse">
                    <div className="col-lg-6 align-self-center pb-3 order-2">
                        <h2 className="fw-bold paragraph1-header">
                            Minimal<span className="in-color">in </span>
                            E-Commerce
                        </h2>
                        <div>
                            <p className="paragraph1-section">
                                Minimalin E-Commerce is a dynamic and innovative online retail
                                platform that offers a wide range of products to customers
                                worldwide. Established in 1191, our company has rapidly grown
                                to become a prominent player in the eCommerce industry. Our
                                mission is to provide customers with a seamless and convenient
                                shopping experience while offering a diverse selection of
                                high-quality products.
                            </p>
                            <p className="paragraph1-section">
                                Minimalin E-Commerce is dedicated to setting new standards in
                                the eCommerce landscape, providing convenience, choice, and
                                quality to our valued customers.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 paragraph1-img align-self-center order-1">
                        <img
                            src="https://minimalin-demo.myshopify.com/cdn/shop/files/owner-getting-ready-reopening_770x.jpg?v=1691770343"
                            alt="image of place is not found" className="img-fluid img-paragraph1-prop" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MinimalinECommerceSection;
