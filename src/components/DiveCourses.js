import React from 'react'
import { Link } from "gatsby"
import Carousel from 'react-bootstrap/Carousel';

function DiveCourses() {
    return (
        <>
            <Carousel id="diveCourses" pauseOnHover={false}>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-sm-8 carousel-photo">
                            <Link className="nav-link" to="/discover">
                                <img src="https://i.ibb.co/Gc9Ynwg/JHO-0831-Editar.jpg" alt="Discover Scuba Diving Punta Cana"/>
                            </Link>
                        </div>
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info"> 
                            <Link to="/discover">
                                <h4 className='d-flex justify-content-center trip-links'><strong>Discover Scuba Diving</strong></h4>
                                <p className='d-flex justify-content-center'>For those who have never tried scuba diving before!</p>
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info">
                            <Link to="/scubadiver">
                                <h4 className='d-flex justify-content-center trip-links'><strong>Scuba Diver</strong></h4>
                                <p className='d-flex justify-content-center'>Dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet</p>
                            </Link>
                        </div>
                        <div className="col-sm-8 carousel-photo">
                            <Link className="nav-link" to="/scubadiver"> 
                                <img src="https://i.ibb.co/0XKChJ4/GOPR2873.jpg" alt="Scuba Diver PADI Punta Cana"/>
                            </Link>
                        </div>                    
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-sm-8 carousel-photo">
                            <Link className="nav-link" to="/openwater">
                                <img src="https://i.ibb.co/qmX8Wwc/20190501-093335.jpg" alt="Open Water Diver Punta Cana"/>
                            </Link>
                        </div>
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info">
                            <Link to="/openwater">
                                <h4 className='d-flex justify-content-center trip-links'><strong>Open Water Diver</strong></h4>
                                <p className='d-flex justify-content-center'>Dive anywhere in the world with a certified buddy!</p>
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info"> 
                            <Link to="/advanced">
                                <h4 className='d-flex justify-content-center trip-links'><strong>Advanced Open Water Diver</strong></h4>
                                <p className='d-flex justify-content-center'>Take it to the next level!</p>
                            </Link> 
                        </div>
                        <div className="col-sm-8 carousel-photo">
                            <Link className="nav-link" to="/advanced">
                                <img src="https://i.ibb.co/ZJwYBxS/IMG-0735.jpg" alt="Advanced Open Water Punta Cana"/>
                            </Link> 
                        </div>                           
                    </div>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default DiveCourses
