import React, {useState} from 'react';
import TripCarousel  from '../components/TripCarousel';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

import Paypal from "gatsby-plugin-paypal"

function Catalina() {

    const [paidFor, setPaidFor] = useState(false);

    const PaypalButton = () => (
    <Paypal 
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'paypal',
      }}
      amount={100.00}
      currency="USD"
      shippingPreference="NO_SHIPPING"
      onApprove={ (data, actions) => setPaidFor(true) }
    />
    )

    return (
        <>
        <Layout>
        <SEO title="Catalina Diving" />
            <div class="catalina">
                <div class="row">
                <div class="col-sm-8 mb-3">
                    <TripCarousel/> 
                </div>
                <div class="container col-sm-4 my-auto">
                    <div class="well text-center">
                        <h4><strong>Trip Overview</strong></h4>
                        <p className='my-1'>Price: $175 per person </p>
                        <p className='my-1'>(2 tank dive)</p>
                        <p className='my-1'>Price: $60 per person </p>
                        <p className='my-1'>(companion)</p>
                        <p className='my-1'>Duration: 7:30 - 18:00</p>
                        <p className='my-1'>Lunch included</p>
                        <p className='my-1'>Drinks : Alcoholic & Non-Alcoholic included</p>
                    </div>
                    <div className="underline my-4"></div>
                    <div className="well text-center">
                        <p className='mb-1 mt-2'><strong>Reserve Now</strong></p>
                        <p className='mt-1'>Only a $100 deposit</p>
                    </div>
                    {paidFor ? (
                        <div>
                            <h6>Thanks for purchasing your trip to Catalina</h6>
                        </div>
                    ) : (
                        <div className="well d-flex justify-content-center mb-2">
                            <PaypalButton />
                        </div>
                    )} 
                </div>
                </div>

                </div>
                
                <div class="container text-center">    
                <h3><strong>Catalina Island</strong></h3>                

                </div>
                
                <div class="mx-5 text-center">    
        
                <div class="row">
                    <div class="col-sm-12">
                    <p>It is a popular tourist destination and place frequented by some cruises ships of the Caribbean. Recommended activities on Catalina Island: snorkeling and diving, given the nature of its translucent waters and surrounded by live coral living in colorful fish. Isla Catalina, is an ideal option to take as an excursion if you are spending your vacations in La Romana, Punta Cana.</p>
                    </div>
                </div>

                <div class="row">
                    
                    
                    <div class="col-sm-6">
                        <div class="well">
                            <p>THE WALL:  This spectacular drop-off is definitely one of the best dive sites in the Dominican Republic.  A gentle slope leads towards the wall. On the top reef you will enjoy the abundant marine life. Every square centimeter of this sea bed is covered with sponges and hard or soft coral. The depth of this terrace varies from 1.5 to 6 meters. The drop-off is fully overgrown with coral and the crevices hide a tremendous amount of reef creatures. We restrict the depth even for advanced divers to 30 meters. </p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="well">
                            <p>THE AQUARIUM: The dive site is protected from the wind. Year round perfect conditions at the surface guarantee a very easy dive at about 12 meters depth. Incredibly healthy coral formations await you on the almost flat sandy bottom. Yellow stingrays, lobsters, moray eels, angelfish, grunts, snappers, soldier fish and trunkfish are only part of its attraction. Huge vase and barrel sponges hide stone crabs and “sea spiders”. You will see trumpet fish trying to blend in with the branches of soft coral formations. </p>
                        </div>
                    </div>  
                </div>


                <div className="well d-flex justify-content-between mx-2">
                    <Button href="/bayahibe" size="sm">Bayahibe</Button>
                    <Button href="/saona" size="sm">Saona</Button>
                </div>


                </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Catalina
