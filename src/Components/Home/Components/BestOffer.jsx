import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function BestOffer() {
    const [time, setTime] = useState(24 * 60 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 24 * 60 * 60));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60))
        .toString()
        .padStart(2, "0");
    const minutes = Math.floor((time % (60 * 60)) / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return (
        <div className="BestOffer">
            <div className="timer">
                <div className="texts">
                    <h2>
                        Best Offer - Up to <span style={{ color: "#0a85d1" }}>50%</span>
                    </h2>
                    <p>
                        Explore our latest New Arrivals & unlock discounts of up to 50% off!
                    </p>
                    <div className="counter">
                        <div className="counter">
                            <div className="cardStyle">
                                <div className="timeStyle">{hours}</div>
                                <div className="labelStyle">Hrs</div>
                            </div>
                            <div className="cardStyle">
                                <div className="timeStyle">{minutes}</div>
                                <div className="labelStyle">Mins</div>
                            </div>
                            <div className="cardStyle">
                                <div className="timeStyle">{seconds}</div>
                                <div className="labelStyle">Secs</div>
                            </div>
                        </div>
                    </div>
                    <Link to={'/Checkout'} className="btn btn-primary fs-5 fw-medium px-4">Shop Now</Link>
                </div>

                <div className="glasses">
                    <img
                        src="https://minimalin-demo.myshopify.com/cdn/shop/files/Countdown_banner_4_570x.png?v=1694617479"
                        alt="Product"
                    />
                </div>
            </div>
        </div>
    )
}
