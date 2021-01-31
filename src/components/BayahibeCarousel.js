import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function BayahibeCarousel() {
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
                    <img src='https://i.ibb.co/p2X9cB0/Bayahibe-Dominican-Republic-panoramio.jpg' alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src='https://i.ibb.co/qdTg7dw/st-george-shipwreck-0.jpg' alt="Scuba Diving Punta Cana Catalina"/>
                </div>
                <div className='less-opacity'>
                    <img src='https://i.ibb.co/GHpDRCX/st-george-shipwreck-1.jpg' alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
                <div>
                    <img src='https://i.ibb.co/jkNDG0x/photo5.jpg' alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
            </Carousel>
        </div>   
        </>
    )
}

export default BayahibeCarousel