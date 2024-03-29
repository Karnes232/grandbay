import React, {useState} from 'react';
import CatalinaCarousel  from '../components/CatalinaCarousel';
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PayPalButton } from "react-paypal-button-v2"
import Button from 'react-bootstrap/Button';


function Catalina() {

    const [paidFor, setPaidFor] = useState(false);


    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/catalina/" />
        </Helment>
        <Layout>
        <Seo title="Catalina Diving" description="Catalina Island is just a short trip from Punta Cana offering some of the best scuba diving in the caribbean"/>
            <div class="catalina">
                <div class="row">
                <div class="col-sm-8 mb-3">
                    <CatalinaCarousel/> 
                </div>
                <div class="container col-sm-4 my-auto">
                    <div class="well text-center">
                        <h4><strong>Trip Overview</strong></h4>
                        <p className='my-1'>Price: $175 per person </p>
                        <p className='my-1'>(2 tank dive)</p>
                        <p className='my-1'>Price: $90 per person </p>
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
                        <PayPalButton
                            amount="100.00"
                            shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                                setPaidFor(true)

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                orderId: data.orderID
                                })
                            });
                            }}
                            options={{
                            clientId: "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0"
                            }}
                        />
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
                        <p className='scuba-bayhibe-text'>THE WALL:  This spectacular drop-off is definitely one of the <h1 className='scuba-bayhibe-h1'> best dive sites in the Dominican Republic</h1>.  A gentle slope leads towards the wall. On the top reef you will enjoy the abundant marine life. Every square centimeter of this sea bed is covered with sponges and hard or soft coral. The depth of this terrace varies from 1.5 to 6 meters. The drop-off is fully overgrown with coral and the crevices hide a tremendous amount of reef creatures. We restrict the depth even for advanced divers to 30 meters. </p>
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
