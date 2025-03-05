import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '/src/assets/blog-1_1200x.png'
import img2 from '/src/assets/blog-2_1200x.png'
import img3 from '/src/assets/blog-3_1200x.png'
import { FaHeadset, FaLock, FaMoneyBillAlt, FaShippingFast } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function LatestBlog() {
    const blogs = [
        {
            id: 1,
            date: "August 01, 2023",
            title: "The Art of Layering: Creating Stylish and Functional Outfits",
            image: img1,
        },
        {
            id: 2,
            date: "August 01, 2023",
            title: "A Glimpse into Men's Fashion Trends: What's Hot and What's Not",
            image: img2,
        },
        {
            id: 3,
            date: "August 01, 2023",
            title: "Fashion Dos and Don'ts Every Woman Should Know Thats",
            image: img3,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="LatestBlog">
            <div >
                <h2 className="section-heading" style={{ textAlign: "center" }}>
                    Latest Blog
                </h2>
                <Slider {...settings} className="blog-slider">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-card">
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                            <div className="blog-content">
                                <p className="blog-date">
                                    <i className="fa fa-calendar" aria-hidden="true"></i> {blog.date}
                                </p>
                                <h3 className="blog-title px-3 ">{blog.title}</h3>
                                <Link to={'/BlogDetails'} className="blog-read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div style={{ marginTop: "50px" }}>
                <div className="service-features">
                    <div className="feature">
                        <FaShippingFast size={40} />
                        <div className="feature-text">
                            <h3>Free Shipping</h3>
                            <p>
                                On orders over <strong>$99</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="feature">
                        <FaMoneyBillAlt size={40} />
                        <div className="feature-text">
                            <h3>Money Back</h3>
                            <p>Money back in 15 days.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <FaLock size={40} />
                        <div className="feature-text">
                            <h3>Secure Checkout</h3>
                            <p>100% Payment Secure.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <FaHeadset size={40} />
                        <div className="feature-text">
                            <h3>Online Support</h3>
                            <p>Ensure the product quality.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
