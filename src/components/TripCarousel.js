import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo1 from '../images/cat1.jpg'
import photo2 from '../images/cat2.jpg'
import photo3 from '../images/cat3.jpg'
import photo4 from '../images/saona1.jpg'
import photo5 from '../images/photo4.jpg'

function TripCarousel() {
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
                    <img src={photo1} alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src={photo2} alt="Scuba Diving Punta Cana Catalina"/>
                </div>
                <div>
                    <img src={photo3} alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
                <div>
                    <img src={photo4} alt="Scuba Diving Punta Cana Saona"/>
                </div>
                <div>
                    <img src={photo5} alt="Scuba Diving Bavaro"/>
                </div>
            </Carousel>
        </div>   
        </>
    )
}

export default TripCarousel