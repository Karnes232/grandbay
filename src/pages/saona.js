import React from 'react';
import TripCarousel  from '../components/TripCarousel';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

function Saona() {
    return (
        <>
        <Layout>
        <SEO title="Saona Diving" />
            <div className="catalina">
                <div className="row">
                <div className="col-sm-8 mb-3">
                    <TripCarousel/> 
                </div>
                <div className="container col-sm-4 my-auto">
                    <div className="well text-center">
                        <h4><strong>Trip Overview</strong></h4>
                        <p>Minimum 4 Divers </p>
                        <p>(2 tank dive)</p>
                        <p>Duration: 7:30 - 18:00</p>
                        <p>Lunch included</p>
                        <p>Drinks : Alcoholic & Non-Alcoholic included</p>
                        <p className='contact-link'><a href="mailto:grandbayofthesea@gmail.com">Contact us</a> for more information</p>
                    </div> 
                </div>
                </div>

                </div>
                
                <div className="container text-center">    
                <h3><strong>Saona  Island</strong></h3>
     
                <div className="row">
                    
                    
                    <div className="col-sm-6">
                    <div className="well">
                        <p>Saona Island is probably the most famous attraction in the Dominican Republic, and for good reason! The dives are world class and the beaches are paradise! This excursion is perfect for divers and snorkelers from the Punta Cana and Bavaro areas. It is a full day tour that will take you to a wreck dive/snorkel as well as our favorite dive site called Peñon. After the dives we go have lunch on Saona Island and enjoy some beach time. </p>
                    </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="well">
                            <p>THE AQUARIUM: The dive site is proteced from the wind. Year round perfect conditions at the surface guarantee a very easy dive at about 12 meters depth. Incredibly healthy coral formations await you on the almost flat sandy bottom. Yellow stingrays, lobsters, moray eels, angelfish, grunts, snappers, soldier fish and trunkfish are only part of its attraction. Huge vase and barrel sponges hide stone crabs and “sea spiders”. You will see trumpet fish trying to blend in with the branches of soft coral formations. </p>
                        </div>
                    </div>  
                </div>

                </div>
                
                <div className="container text-center">    
        
                <div className="row">
                    <div className="col-sm-12">
                    <p>It is a popular tourist destination and place frequented by some cruises ships of the Caribbean. Recommended activities on Catalina Island: snorkeling and diving, given the nature of its translucent waters and surrounded by live coral living in colorful fish. Isla Catalina, is an ideal option to take as an excursion if you are spending your vacations in La Romana, Punta Cana.</p>
                    </div>
                </div>

                <div className="well d-flex justify-content-between mx-2">
                    <Button href="/catalina" size="sm">Catalina</Button>
                    <Button href="/bayahibe" size="sm">Bayahibe</Button>
                </div>

                </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Saona