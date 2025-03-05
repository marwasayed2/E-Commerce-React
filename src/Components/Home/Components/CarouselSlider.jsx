import MenSlider from '/src/assets/men_slider.png'
import BabySlider from '/src/assets/baby_slider.png'
import WomenSlider from '/src/assets/women_slider.png'
import { Link } from 'react-router-dom'

export default function CarouselSlider() {
    return (
        <div>
            <div className=" p-0 pb-3">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex">
                                <div className="carousel-caption w-50 position-relative text-black d-none">
                                    <h1>Man Collection</h1>
                                    <p>Enchanting Styles For Dreamy Souls</p>
                                    <Link to={'/Checkout'} className="btn btn-primary">Shop Now</Link>
                                </div>
                                <img src={MenSlider} className="d-block w-50" alt="wonderful man collection " />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className="carousel-caption w-50 position-relative text-black d-none d-flex">
                                    <h1>Women collection</h1>
                                    <p>Enchanting Styles For Dreamy Souls</p>
                                    <Link to={'/Checkout'} className="btn btn-primary">Shop Now</Link>
                                </div>
                                <img src={BabySlider} className="d-block w-50" alt="wonderful women collection " />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex">
                                <div className="carousel-caption w-50 position-relative text-black d-none d-md-block">
                                    <h1>Baby collection</h1>
                                    <p>Enchanting Styles For Dreamy Souls</p>
                                    <Link to={'/Checkout'} className="btn btn-primary">Shop Now</Link>
                                </div>
                                <img src={WomenSlider} className="d-block w-50" alt="wonderful Baby collection" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
