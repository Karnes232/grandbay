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
                    <img src="https://i.ibb.co/tMD2302/cat3.jpg" srcset="https://i.ibb.co/JxDx0cj/cat3-small.jpg 480w, https://i.ibb.co/tMD2302/cat3.jpg 1080w" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/D8thp31/photo1.jpg" srcset="https://i.ibb.co/MpXT2Xm/photo1-small.jpg 480w, https://i.ibb.co/D8thp31/photo1.jpg 1080w" sizes="50vw" alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src="https://i.ibb.co/8XxBVMj/DSC6729.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/nM2brh4/image4.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img className='girl-on-boat' src="https://i.ibb.co/7NbJphL/girlboat2.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/zmk0PSD/20190320-145703.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div className='less-opacity'>
                    <img src="https://i.ibb.co/Kh05X76/DSC5389.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/CbsDQsG/photo7.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/Wts6M7c/photo8.jpg" alt="Scuba Diving Punta Cana"/>
                </div>
                <div>
                    <img src="https://i.ibb.co/K5ySgmM/photo9.jpg" alt="Scuba Diving Punta Cana"/>
                </div>

                
            </Carousel>
        </div>
    
        </>
    )
}