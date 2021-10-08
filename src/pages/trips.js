import React from 'react';
import TripCarousel  from '../components/TripCarousel';
import { Link } from "gatsby"
import Footer from '../components/Footer';
import icon1 from '../images/icons8-octopus-96.png';
import icon2 from '../images/icons8-shark-96.png';
import icon3 from '../images/icons8-cruise-ship-96.png';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"

function Trips() {
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/trips/" />
        </Helment>
        <Layout>
        <SEO title="Dive Trips" description="Some of the best scuba diving in the Dominican Republic is on the caribbean coast. We offer day trips to Catalina, Bayahibe and Saona."/>

            <TripCarousel/> 
            <div className="mx-5 text-center mt-4 dive-info">
                <div className="seo-tags">
                    <h1><strong>Scuba Diving in Punta Cana</strong></h1>
                </div>
                <h5 className='mb-2'><strong>The Caribbean Sea and thriving reefs will have divers exploring the shallow reefs, or the deeper wrecks.</strong></h5>
                <div className="row mt-2">
                    <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-4">
                        <Link className="nav-link"  to="/catalina">
                        <h4 className='trip-links'><strong>Catalina Island</strong></h4>
                        <img className='my-2' src={icon1} alt="Scuba Diving Punta Cana"/>
                        <p>If you dreamed of a Caribbean paradise, you'll find it right here on Catalina Island.</p>
                        </Link>
                    </div>
                    <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-4">
                        <Link className="nav-link"  to="/saona">
                        <h4 className='trip-links'><strong>Saona Island</strong></h4>
                        <img className='my-2' src={icon2} alt="Scuba Diving Punta Cana"/>
                        <p>Saona Island is the excursion that everyone recommends when they know that you are visiting the Dominican Republic.</p>
                        </Link>
                    </div>
                    <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-4">
                        <Link className="nav-link"  to="/bayahibe">
                        <h4 className='trip-links'><strong>Bayahibe Diving</strong></h4>
                        <img className='my-2' src={icon3} alt="Scuba Diving Punta Cana"/>
                        <p>This quiet fishing village has some amazing dive sites, including a couple wrecks that will surprise any diver.</p>
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
