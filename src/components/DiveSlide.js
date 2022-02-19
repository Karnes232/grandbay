import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "gatsby"


function DiveSlide() {
    return (
        <>
        <div class="carousel-wrapper mt-2" id='dive-slide'>
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
                    <Link to="/discover">
                    <div className="row d-flex justify-content-center">
                    <div className="col-xs-8 carousel-wrapper-inner w-100">
                        <img className='w-100' id='dis-photo' src="https://i.ibb.co/yP1wdKR/JHO-0831-Editar.webp" alt="Discover Scuba Diving Punta Cana"/>
                    </div>
                    <div className="col-xs-2 mt-2">
                        <div className="well course-list-small-screen">
                            <h4><strong>Discover Scuba Diving</strong></h4>
                        </div>                      
                        <div className="container">
                            <p>For those who have never tried scuba diving before!</p>
                        </div>
                    </div>
                    </div>
                    </Link>
                </div>
                <div>
                    <Link to="/scubadiver">
                    <div className="row d-flex justify-content-center">
                    <div className="col-xs-8 carousel-wrapper-inner w-100">
                        <img className='w-100' src="https://i.ibb.co/rcBs8hK/GOPR2873.webp"  alt="Scuba Diver PADI Punta Cana"/>
                    </div>
                    <div className="col-xs-2 mt-2">
                        <div className="well course-list-small-screen">
                            <h4><strong>Scuba Diver</strong></h4>
                        </div>
                        <div className="container">
                            <p>Dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet</p>
                        </div>
                    </div>
                    </div>
                    </Link>            
                </div>
                <div>
                    <Link to="/openwater">
                    <div className="row d-flex justify-content-center">
                    <div className="col-xs-8 carousel-wrapper-inner w-100">
                        <img className='w-100' src="https://i.ibb.co/L5kx6bg/20190501-093335.webp" alt="Open Water Punta Cana"/>
                    </div>
                    <div className="col-xs-2 mt-2">
                        <div className="well course-list-small-screen">
                            <h4><strong>Open Water Diver</strong></h4>
                        </div>
                        <div className="container">
                            <p>Dive anywhere in the world with a certified buddy!</p>
                        </div>
                    </div>
                    </div> 
                    </Link>           
                </div>
                <div>
                    <Link to="/advanced">
                    <div className="row d-flex justify-content-center">
                    <div className="col-xs-8 carousel-wrapper-inner w-100">
                        <img className='w-100' src="https://i.ibb.co/mvNrnQD/IMG-0735.webp" alt="Advanced Open Water Punta Cana"/>
                    </div>
                    <div className="col-xs-2 mt-2">
                        <div className="well course-list-small-screen">
                            <h4><strong>Advanced Open Water Diver</strong></h4>
                        </div>
                        <div className="container">
                            <p>Take it to the next level!</p>
                        </div>
                    </div>
                    </div> 
                    </Link>           
                </div>
                
                
            </Carousel>

            

        
        </div>
    
        </>
    )
}

export default DiveSlide
