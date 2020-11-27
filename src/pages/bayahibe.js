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
                <h3><strong>Bayahibe</strong></h3>
     
                <div class="row">
                    
                    
                    <div class="col-sm-6">
                    <div class="well">
                        <p>Located just a half-mile off the coast of Dominicus in Bayahíbe, the 73-meter (240 feet) long St. George ship was originally built in 1962 in Scotland, and was used to transport wheat and barley from Europe to the Caribbean. Today, the sunken ship is home to barracudas, moray eels, king mackerels, and groupers, among other species. Due to its depth of 40 meters (131 feet), it is recommended only for advanced divers. </p>
                    </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="well">
                            <p>The small fishing village of Bayahibe is located on the south coast of the Dominican Republic, a great place to visit any time of the year. Scuba diving in Bayahibe, is probably the best scuba diving on the whole Island. Diving in Bayahibe is generally easy. Most of the reefs just offshore and the protected side of Saona Island have little to no current.</p>
                        </div>
                    </div>  
                </div>

                </div>
                
                <div class="container text-center">    


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