import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderSection() {
    return (
        <section className="container mt-5 slider">
            <div id="textCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <i className="fas fa-quote-right"></i>
                            <p className="text-center lh-lg slider-texts">
                                Discovering Minimalin has been a revelation for me. As a busy
                                professional, I often find myself juggling multiple tasks and
                                struggling to find the right words.
                            </p>
                            <h2 className="slider-headers">Alex Rodriguez</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <i className="fas fa-quote-right"></i>
                            <p className="text-center lh-lg slider-texts">
                                EMinimalin is pure genius! Im a student, and writing
                                assignments used to be a daunting task. But with ChatGPT, its
                                like having a personal tutor and writing coach by my side
                                24/7.
                            </p>
                            <h2 className="slider-headers">Jessica Patel</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <i className="fas fa-quote-right"></i>
                            <p className="text-center lh-lg slider-texts">
                                Writing has never been my strong suit, but ChatGPT has changed
                                the game for me. Whether its crafting compelling emails,
                                creative stories, or engaging social media posts.
                            </p>
                            <h2 className="slider-headers">Michael Chen</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#textCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#textCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default SliderSection;
