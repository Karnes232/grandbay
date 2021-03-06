import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function SaonaCarousel() {
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
                    <img src='https://i.ibb.co/99b1D4z/1024px-Dominican-Republic-Saona-Island-3-1600x965.jpg' alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src='https://i.ibb.co/84VxCZz/SAONA-ISLAND-panoramio.jpg' alt="Scuba Diving Punta Cana Catalina"/>
                </div>
                <div>
                    <img src='https://i.ibb.co/Qf2NwVZ/Beachfront-houses-Saona-Island.jpg' alt="Scuba Diving Punta Cana Bayahibe"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/0FmgFhD/saona1.jpg" alt="Scuba Diving Punta Cana Saona"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/Q9CX8K7/photo4.jpg" alt="Scuba Diving Bavaro"/>
                </div>
            </Carousel>
        </div>   
        </>
    )
}

export default SaonaCarousel