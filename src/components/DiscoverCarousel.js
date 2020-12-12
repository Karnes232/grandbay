import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
                    <img src="https://i.ibb.co/0cdrrdf/ds1.jpg" alt="Discover Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/nQDyXk6/image12.jpg" alt="Introduction to Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/QnWtcKy/image25.jpg" alt="Punta Cana Scuba Diving"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/28v1GR4/image10.jpg" alt="Open Water Diver Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/z7Bz5Mm/ds5.jpg" alt="PADI Punta Cana"/>
                </div>
            </Carousel>
        </div>   
        </>
    )
}

export default DiscoverCarousel
