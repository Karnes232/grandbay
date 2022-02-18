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
                    <img src="https://i.ibb.co/R9ddywQ/cat3.webp" srcset="https://i.ibb.co/hZqZgsW/cat3-small.webp 480w, https://i.ibb.co/R9ddywQ/cat3.webp 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/7gdVbWb/photo1.webp" srcset="https://i.ibb.co/qDYmvdr/photo1-smaller.webp 500w, https://i.ibb.co/H2nxJb6/photo1-small.webp 700w, https://i.ibb.co/7gdVbWb/photo1.webp 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src="https://i.ibb.co/K7m6Ynk/DSC6729.webp" srcset="https://i.ibb.co/MMQJ4J3/DSC6729-smaller.webp 700w, https://i.ibb.co/K7m6Ynk/DSC6729.webp 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/QrTvX90/image4.webp" srcset="https://i.ibb.co/yhQqcWg/image4-smaller.webp 700w, https://i.ibb.co/QrTvX90/image4.webp 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img className='girl-on-boat' src="https://i.ibb.co/j4ssv36/girlboat2.webp" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/pRQLq1h/20190320-145703.webp" srcset="https://i.ibb.co/phScV54/20190320-145703-smaller.webp 700w, https://i.ibb.co/pRQLq1h/20190320-145703.webp 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src="https://i.ibb.co/Tb2NLTM/DSC5389.webp" srcset="https://i.ibb.co/dsZ3KfV/DSC5389-smaller.webp 700w, https://i.ibb.co/Tb2NLTM/DSC5389.webp 1080w" sizes="50vw"  alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/wKRM8Bw/photo7.webp" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/Qd18XwD/photo8.webp" srcset="https://i.ibb.co/d4vrn00/photo8-smaller.webp 700w, https://i.ibb.co/Qd18XwD/photo8.webp 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/j4fLFB4/photo9.webp" srcset="https://i.ibb.co/vYTrJBR/photo9-smaller.webp 700w, https://i.ibb.co/j4fLFB4/photo9.webp 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>

                
            </Carousel>
        </div>
    
        </>
    )
}