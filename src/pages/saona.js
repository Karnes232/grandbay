import React, {useState} from 'react';
import SaonaCarousel  from '../components/SaonaCarousel';
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PayPalButton } from "react-paypal-button-v2"
import Button from 'react-bootstrap/Button';


function Saona() {

    const [paidFor, setPaidFor] = useState(false);
    
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/saona" />
        </Helment>
        <Layout>
        <SEO title="Saona Diving" description="Saona Island is just a short trip from Punta Cana offering some of the best scuba diving in the caribbean" />
            <div className="catalina">
                <div className="row">
                <div className="col-sm-8 mb-3">
                    <SaonaCarousel/> 
                </div>
                <div className="container col-sm-4 my-auto">
                    <div className="well text-center">
                        <h4><strong>Trip Overview</strong></h4>
                        <p>Minimum 2 Divers </p>
                        <p>(2 tank dive)</p>
                        <p>Duration: 7:30 - 18:00</p>
                        <p>Lunch included</p>
                        <p>Drinks : Alcoholic & Non-Alcoholic included</p>
                        <p className='contact-link'><a href="mailto:grandbayofthesea@gmail.com">Contact us</a> for more information</p>
                    </div> 
                    <div className="underline my-4"></div>
                    <div className="well text-center">
                        <p className='mb-1 mt-2'><strong>Reserve Now</strong></p>
                        <p className='mt-1'>Only a $100 deposit</p>
                    </div>
                    {paidFor ? (
                        <div>
                            <h6>Thanks for purchasing your trip to Saona</h6>
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
                
                <div className="mx-5 text-center">    
                <h3><strong>Saona  Island</strong></h3>

                <div className="row">
                    <div className="col-sm-12">
                        <p>Saona Island is probably the most famous attraction in the Dominican Republic, and for good reason! The dives are world class and the beaches are paradise! This excursion is perfect for divers and snorkelers from the Punta Cana and Bavaro areas. It is a full day tour that will take you to a wreck dive/snorkel as well as our favorite dive site called el Penon. After the dives we go have lunch on Saona Island and enjoy some beach time. </p>
                    </div>
                </div>

     
                <div className="row">
                    
                    
                    <div className="col-sm-6">
                    <div className="well">
                        <p>Our diving excursion to Saona Island is very personalized as we only do it with private groups with a minimum of 2 people. That way we are able to provide the best service possible. The excursion is possible any day as long as the conditions are permitting. We will leave From the Punta Cana area at 8:30 am, (since it is private you don't have to wait for anyone else). It will take approximately 40 minutes until we reach Bayahibe where we will embark for our journey. </p>
                    </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="well">
                            <p>The first dive we will do is the Atlantic princess which is a very interesting shipwreck with a lot of marine life, this allows your companions who do not dive the chance to snorkel. Afterwards we head towards Saona Island for the second dive, this will be at el Penon. It is one of the best places to dive in the Caribbean Sea since it is somewhat remote and lacks divers where you can also enjoy snorkeling. Then we go to one of the 7 beaches that Saona Island has where we are going to enjoy a delicious buffet just for us. Then we can relax on the beautiful beach, on our way back we can stop at the natural pool and enjoy there seeing the starfish.</p>
                        </div>
                    </div>  
                </div>

                </div>
                
                <div className="mx-5 text-center">    
        
                

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