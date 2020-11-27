import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo1 from '../images/ds1.jpg'
import photo2 from '../images/ds2.jpg'
import photo3 from '../images/ds3.jpg'
import photo4 from '../images/ds4.jpg'
import photo5 from '../images/ds5.jpg'

function DiscoverCarousel() {
    return (
        <>
         <div class="carousel-wrapper-home">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay
                infiniteLoop
                stopOnHover={false}
                transitionTime={700}
                showStatus={false}
            >
                <div>
                    <img src={photo1} alt="Discover Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src={photo2} alt="Introduction to Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src={photo3} alt="Punta Cana Scuba Diving"/>
                </div>
                <div>
                    <img src={photo4} alt="Open Water Diver Punta Cana"/>
                </div>
                <div>
                    <img src={photo5} alt="PADI Punta Cana"/>
                </div>
            </Carousel>
        </div>   
        </>
    )
}

export default DiscoverCarousel
