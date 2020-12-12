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
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DominicanRepublic-Saona-Island-3-1600x965.jpg/1024px-DominicanRepublic-Saona-Island-3-1600x965.jpg' alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/8/83/SAONA_ISLAND_-_panoramio.jpg' alt="Scuba Diving Punta Cana Catalina"/>
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Beachfront_houses_Saona_Island.jpg/1024px-Beachfront_houses_Saona_Island.jpg' alt="Scuba Diving Punta Cana Bayahibe"/>
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

export default SaonaCarousel