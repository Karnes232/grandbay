import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




export default function CarouselComponent() {
    return (
        <>
        <div className="carousel-wrapper-home">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay
                infiniteLoop
                stopOnHover={false}
                transitionTime={700}
                showStatus={false}
            >
                <div className="carousel-wrapper-inner">
                    <img src="https://i.ibb.co/N6MX9q6/cat3.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/KDV5JVh/photo1.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src="https://i.ibb.co/3yBfF8S/DSC6729.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/j6g6xFj/image4.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img className='girl-on-boat' src="https://i.ibb.co/wr8q9FL/girlboat2.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/jWF8sfz/20190320-145703.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src="https://i.ibb.co/L1ZccfJ/DSC5389.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/6b7F4PR/photo7.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/TqbThsF/photo8.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/WP7dCKY/photo9.jpg" alt="Scuba Diving Punta Cana"/>
                </div>

                
            </Carousel>
        </div>
    
        </>
    )
}