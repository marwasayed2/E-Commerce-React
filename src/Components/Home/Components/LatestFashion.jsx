import Suit from '/src/assets/suit.png'
import Dress from '/src/assets/dress.png'
import { Link } from 'react-router-dom'


export default function LatestFashion() {
    return (
        <div className='py-5'>
            <div className="new-collections">
                <div className="heading row ">
                    <div className="col-md-12 col-lg-6 sub-head position-relative p-3 ">
                        <div className=" ms-3 title position-absolute">
                            <h2 className="model-1 mb-3 lh-1">Suits &amp; Formalwear</h2>
                            <Link to={"/Checkout"} className="btn btn-outline-primary text-black">
                                Shop Now
                            </Link>
                        </div>
                        <img className="w-100 rounded-3" src={Suit} alt='Latest new blazer designs' />
                    </div>
                    <div className="col-md-12 col-lg-6 sub-head position-relative p-3">
                        <div className=" ms-3 title position-absolute">
                            <h2 className="model-2 mb-3 lh-1">Top &amp; Gowns</h2>
                            <Link to={"/Checkout"} className="btn btn-outline-primary text-black">
                                Shop Now
                            </Link>
                        </div>
                        <img className="w-100 rounded-3" src={Dress} alt="The latest collections of new evening dresses" />
                    </div>
                </div>
            </div>

        </div>
    )
}
