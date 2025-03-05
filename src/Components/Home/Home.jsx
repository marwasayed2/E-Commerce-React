
import BestOffer from './Components/BestOffer'
import BestSelling from './Components/BestSelling'
import CarouselSlider from './Components/CarouselSlider'
import FeaturedCollection from './Components/FeaturedCollection'
import InstagramSlider from './Components/InstagramSlider'
import LatestBlog from './Components/LatestBlog'
import LatestFashion from './Components/LatestFashion'
import NewArrivals from './Components/NewArrivals'
import StatusBar from './Components/StatusBar'
import './style.css'

export default function Home() {
    return (
        <div>
            <div className='py-4 container'>
                <CarouselSlider></CarouselSlider>
                <LatestFashion ></LatestFashion>
                <BestSelling></BestSelling>
            </div>
            <BestOffer></BestOffer>
            <div className='py-4 container'>
                <FeaturedCollection></FeaturedCollection>
                <NewArrivals></NewArrivals>
            </div>
            <StatusBar></StatusBar>
            <div className='py-4 container'>
                <LatestBlog></LatestBlog>
            </div>
            <InstagramSlider></InstagramSlider>
        </div>
    )
}
