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
                    <img src="https://i.ibb.co/HNSBdLP/cat1.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/Yyv8ZNY/cat2.jpg" alt="Scuba Diving Punta Cana Catalina"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/d0Dp7Np/cat3.jpg" alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/0FmgFhD/saona1.jpg" alt="Scuba Diving Punta Cana Saona"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/GTPmjkZ/image5.jpg" alt="Scuba Diving Bavaro"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/Q9CX8K7/photo4.jpg" alt="Scuba Diving Bavaro"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/QJr0mKW/20200122-144128.jpg" alt="Scuba Diving Bavaro"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/CWnnV21/478bf545-6691-4485-8e37-66e39a67d3a7.jpg" alt="Scuba Diving Bavaro"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/YjKBnwm/image7.jpg" alt="Scuba Diving Bavaro"/>
                </div>
                
            </Carousel>
        </div>   
        </>
    )
}

export default TripCarousel