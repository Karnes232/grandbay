import React from 'react';
import TripCarousel  from '../components/TripCarousel';
import { Link } from "gatsby"
import Footer from '../components/Footer';
import icon1 from '../images/icons8-octopus-96.png';
import icon2 from '../images/icons8-shark-96.png';
import icon3 from '../images/icons8-cruise-ship-96.png';

import Layout from "../components/layout"
import SEO from "../components/seo"

function Trips() {
    return (
        <>
        <Layout>
        <SEO title="Dive Trips" />
            <TripCarousel/> 
            <div className="container text-center mt-4 dive-info">
                <h5 className='mb-2'><strong>The Caribbean Sea and thriving reefs will have divers exploring the shallow reefs, or the deeper wrecks.</strong></h5>
                <div className="row mt-2">
                    <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-4">
                        <Link className="nav-link"  to="/catalina">
                        <h4><strong>Catalina Island</strong></h4>
                        <img className='my-2' src={icon1} alt="Scuba Diving Punta Cana"/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur a explicabo tenetur quaerat voluptas ullam perferendis accusantium reiciendis. Optio, perferendis.</p>
                        </Link>
                    </div>
                    <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-4">
                        <Link className="nav-link"  to="/saona">
                        <h4><strong>Saona Island</strong></h4>
                        <img className='my-2' src={icon2} alt="Scuba Diving Punta Cana"/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur a explicabo tenetur quaerat voluptas ullam perferendis accusantium reiciendis. Optio, perferendis.</p>
                        </Link>
                    </div>
                    <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-4">
                        <Link className="nav-link"  to="/bayahibe">
                        <h4><strong>Bayahibe Diving</strong></h4>
                        <img className='my-2' src={icon3} alt="Scuba Diving Punta Cana"/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur a explicabo tenetur quaerat voluptas ullam perferendis accusantium reiciendis. Optio, perferendis.</p>
                        </Link>
                    </div>
                </div>
            </div> 
            <Footer/>
            </Layout>
        </>
    )
}

export default Trips
