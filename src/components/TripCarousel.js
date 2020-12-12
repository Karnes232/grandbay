import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
                    <img src="https://i.ibb.co/FsXpGCp/cat1.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/VM0y4KP/cat2.jpg" alt="Scuba Diving Punta Cana Catalina"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/N6MX9q6/cat3.jpg" alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/HpdmSGf/saona1.jpg" alt="Scuba Diving Punta Cana Saona"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/mtgX390/photo4.jpg" alt="Scuba Diving Bavaro"/>
                </div>
            </Carousel>
        </div>   
        </>
    )
}

export default TripCarousel