import React from 'react';
import TripCarousel  from '../components/TripCarousel';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"

function Bayahibe() {
    return (
        <>
        <Layout>
        <SEO title="Bayahive Diving" />
            <div class="catalina">
                <div class="row">
                <div class="col-sm-8 mb-3">
                    <TripCarousel/> 
                </div>
                <div class="container col-sm-4 my-auto">
                    <div class="well text-center">
                        <h4><strong>Trip Overview</strong></h4>
                        <p>Price: $185 per person </p>
                        <p>(2 tank dive)</p>
                        <p>Price: $90 per person </p>
                        <p>(snorkling)</p>
                        <p>Duration: 7:30 - 18:00</p>
                        <p>Lunch included</p>
                        <p>Drinks : Alcoholic & Non-Alcoholic included</p>
                    </div> 
                </div>
                </div>

                </div>
                
                <div class="container text-center">    
                <h3><strong>Catalina Island</strong></h3>
     
                <div class="row">
                    
                    
                    <div class="col-sm-6">
                    <div class="well">
                    <p>THE WALL:  This spectacular drop-off is definitely one of the best dive sites in the Dominican Republic.  A gentle slope leads towards the wall. On the top reef you will enjoy the abundant marine life. Every square centimetre of this sea bed is covered with sponges and hard or soft coral. The depth of this terrace varies from 1.5 to 6 meters. The drop-off is fully overgrown with coral and the crevices hide a tremendous amount of reef creatures. We restrict the depth even for advanced divers to 30 meters. </p>
                    </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="well">
                            <p>THE AQUARIUM: The dive site is proteced from the wind. Year round perfect conditions at the surface guarantee a very easy dive at about 12 meters depth. Incredibly healthy coral formations await you on the almost flat sandy bottom. Yellow stingrays, lobsters, moray eels, angelfish, grunts, snappers, soldier fish and trunkfish are only part of its attraction. Huge vase and barrel sponges hide stone crabs and “sea spiders”. You will see trumpet fish trying to blend in with the branches of soft coral formations. </p>
                        </div>
                    </div>  
                </div>

                </div>
                
                <div class="container text-center">    
        
                <div class="row">
                    <div class="col-sm-12">
                    <p>It is a popular tourist destination and place frequented by some cruises ships of the Caribbean. Recommended activities on Catalina Island: snorkeling and diving, given the nature of its translucent waters and surrounded by live coral living in colorful fish. Isla Catalina, is an ideal option to take as an excursion if you are spending your vacations in La Romana, Punta Cana.</p>
                    </div>
                </div>

                <div className="well d-flex justify-content-between mx-5 trip-links">
                    <Link to="/saona">
                        Saona
                    </Link>
                    <Link to="/catalina">
                        Catalina
                    </Link>
                </div>

                </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Bayahibe