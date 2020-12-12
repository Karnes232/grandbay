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
                                <img src="https://i.ibb.co/C1RjT0N/cb1.jpg" alt="Discover Scuba Diving Punta Cana"/>
                            </Link>
                        </div>
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info"> 
                            <Link to="/discover">
                                <h4 className='d-flex justify-content-center'><strong>Discover Scuba Diving</strong></h4>
                                <p className='d-flex justify-content-center'>For those who have never tried scuba diving before!</p>
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info">
                            <Link to="/scubadiver">
                                <h4 className='d-flex justify-content-center'><strong>Scuba Diver</strong></h4>
                                <p className='d-flex justify-content-center'>Dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet</p>
                            </Link>
                        </div>
                        <div className="col-sm-8 carousel-photo">
                            <Link className="nav-link" to="/scubadiver"> 
                                <img src="https://i.ibb.co/KDV5JVh/photo1.jpg" alt="Scuba Diver PADI Punta Cana"/>
                            </Link>
                        </div>                    
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-sm-8 carousel-photo">
                            <Link className="nav-link" to="/openwater">
                                <img src="https://i.ibb.co/RBMtjhx/photo2.jpg" alt="Open Water Diver Punta Cana"/>
                            </Link>
                        </div>
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info">
                            <Link to="/openwater">
                                <h4 className='d-flex justify-content-center'><strong>Open Water Diver</strong></h4>
                                <p className='d-flex justify-content-center'>Dive anywhere in the world with a certified buddy!</p>
                            </Link>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-sm-3 text-center d-flex align-items-center dive-course-info"> 
                            <Link to="/advanced">
                                <h4 className='d-flex justify-content-center'><strong>Advanced Open Water Diver</strong></h4>
                                <p className='d-flex justify-content-center'>Take it to the next level!</p>
                            </Link> 
                        </div>
                        <div className="col-sm-8 carousel-photo">
                            <Link className="nav-link" to="/advanced">
                                <img src="https://i.ibb.co/mBRX4v9/photo3.jpg" alt="Advanced Open Water Punta Cana"/>
                            </Link> 
                        </div>                           
                    </div>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default DiveCourses
