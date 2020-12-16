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
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bayahibe%2C_Dominican_Republic_-_panoramio_%287%29.jpg/1280px-Bayahibe%2C_Dominican_Republic_-_panoramio_%287%29.jpg' alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src='https://www.godominicanrepublic.com/wp-content/uploads/2018/03/st.-george-shipwreck-0.jpg?x42304' alt="Scuba Diving Punta Cana Catalina"/>
                </div>
                <div className='less-opacity'>
                    <img src='https://www.godominicanrepublic.com/wp-content/uploads/2018/03/st-george-shipwreck-1.jpg?x42304' alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
                <div>
                    <img src='https://i.ibb.co/Qbcr9y9/photo5.jpg' alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
            </Carousel>
        </div>   
        </>
    )
}

export default BayahibeCarousel