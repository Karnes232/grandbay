import React from 'react';
import TripCarousel  from '../components/TripCarousel';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

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
                        <p className='my-1'>Price: $155 per person </p>
                        <p className='my-1'>(2 tank dive)</p>
                        <p className='my-1'>Duration: 7:30 - 16:00</p>
                        <p className='my-1'>Lunch optional</p>
                        <p className='my-1'>Drinks : Alcoholic optional</p>
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


                <div className="well d-flex justify-content-between mx-2">
                    <Button href="/saona" size="sm">Saona</Button>
                    <Button href="/catalina" size="sm">Catalina</Button>
                </div>

                </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Bayahibe