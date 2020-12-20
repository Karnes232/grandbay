import React, {useState} from 'react';
import DiscoverCarousel  from '../components/DiscoverCarousel';
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

import Paypal from "gatsby-plugin-paypal"

function Discover() {

    const [paidFor, setPaidFor] = useState(false);

    const PaypalButton = () => (
    <Paypal 
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'paypal',
      }}
      amount={42.50}
      currency="USD"
      shippingPreference="NO_SHIPPING"
      onApprove={ (data, actions) => setPaidFor(true) }
    />
    )

    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/discover" />
        </Helment>
        <Layout>
        <SEO title="Discover Scuba Diving" />
        <SEO description="Well your on your vacation in Punta Cana you can try scuba diving for the very first time."/>
            <DiscoverCarousel/>
            <div className="mx-5 text-center mt-4 dive-info">    
                <h3 className='mb-2'><strong>Try Discover Scuba Diving</strong></h3>
                <div className="row mt-2">
                <div className="col-sm-4 d-flex align-items-center">
                    <div className="well">
                        <h5>Experience the underwater world!</h5>
                        <p>If you would like to give diving a try, but don’t really know if you’re going to like it, or simply don’t want to invest a lot of time in a full course, we are pleased to offer a number of options that let you get your hair wet and experience the underwater world.</p>
                    </div>
                </div>
                <div className="col-sm-4"> 
                    <div className="well">
                        <h3><strong>Course Overview</strong></h3>
                        <p className='my-1'>Course Level: Beginner</p>
                        <p className='my-1'>Price: $85 per person</p>
                        <p className='my-1'>Duration: 2.5 Hours</p>
                        <p>Includes: Transport</p>
                    </div> 
                    <div className="well">
                        <p className='mb-1 mt-2'><strong>Reserve Now</strong></p>
                        <p className='mt-1'>Only a 50% deposit</p>
                    </div>
                    {paidFor ? (
                        <div>
                            <h6>Thanks for choosing to dive with us!</h6>
                        </div>
                    ) : (
                        <div className="well d-flex justify-content-center mb-2">
                            <PaypalButton />
                        </div>
                    )}
        
                </div>
                <div className="col-sm-4 d-flex align-items-center">
                    <div className="well">
                        <p>This is a one-day PADI program that offers you the experience of Scuba diving from 6 to a maximum of 12 meters, although it does not result in a certification, it can be credited as your first open water dive towards your PADI open water certification. This program is perfect for people who are interested in finding out what it is like to breath underwater and experience the underwater world.</p>
                    </div>
                    
                </div>
                </div>
                
                <div className="well d-flex justify-content-end mr-2">
                    <Button href="/scubadiver" size="sm">Scuba Diver</Button>
                </div>
            </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Discover
