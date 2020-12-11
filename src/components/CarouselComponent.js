import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo1 from '../images/cb1.jpg'
import photo3 from '../images/photo1.jpg'
import photo4 from '../images/photo2.jpg'
import photo5 from '../images/photo3.jpg'
import photo6 from '../images/photo4.jpg'
import photo7 from '../images/photo5.jpg'
import photo8 from '../images/photo6.jpg'
import photo9 from '../images/photo7.jpg'
import photo10 from '../images/photo8.jpg'
import photo11 from '../images/photo9.jpg'



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
                <div>
                    <img src="https://i.ibb.co/zGdRhfx/image20.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/j6g6xFj/image4.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img className='girl-on-boat' src="https://i.ibb.co/BcDKrJJ/image1.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src={photo7} alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/Bs6txmm/ds3.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src={photo9} alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src={photo10} alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src={photo11} alt="Scuba Diving Punta Cana"/>
                </div>

                
            </Carousel>
        </div>
    
        </>
    )
}