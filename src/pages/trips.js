import React from 'react';
import TripCarousel  from '../components/TripCarousel';
import { Link } from "gatsby"
import Footer from '../components/Footer';
import icon1 from '../images/icons8-octopus-96.png';
import icon2 from '../images/icons8-shark-96.png';
import icon3 from '../images/icons8-cruise-ship-96.png';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"

function Trips() {
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/trips/" />
        </Helment>
        <Layout>
        <Seo title="Dive Trip Packages In Punta Cana | Scuba Diver In Punta Cana" description="We specialize in providing more personalized services to our clients with our professional team. Check out our Dive Trip Packages today."/>

            <TripCarousel/> 
            <div className="mx-5 text-center mt-4 dive-info">
                <div className="seo-tags">
                    <h1><strong>Scuba Diving in Punta Cana</strong></h1>
                </div>
                <div className="row py-2">
                    <div className="col-sm-12 text-center">
                        <h4 className='text-center course-title'><strong>Our Dive Trips</strong></h4>
                        <p>On our Bayahibe dive trip, we take you for an amazing certified dive in Punta Cana on a beautiful and colorful reef and an incredible second dive on the Atlantic Princess shipwreck, for some of the most exhilarating, colorful and bio-diverse Scuba Diving in Punta Cana.
                        On our local dive at Catalina Island we like to take experienced scuba divers on a deep Wall dive, where we can swim past a beautiful drop-off covered in corals and visited by turtles and sharks. The second dive will be on one of our favorite shallow reefs, The Aquarium, where whip and fan corals hide puffer fish, schools of blue tangs, yellow stingrays, lobsters, moray eels and all sorts of reef fish.</p>
                    </div>
                </div>
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
