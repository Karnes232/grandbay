import React, {useState} from 'react';
import DiscoverCarousel  from '../components/DiscoverCarousel';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

import Paypal from "gatsby-plugin-paypal"

function OpenWater() {

    const [paidFor, setPaidFor] = useState(false);

    const PaypalButton = () => (
    <Paypal 
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'paypal',
      }}
      amount={225.00}
      currency="USD"
      shippingPreference="NO_SHIPPING"
      onApprove={ (data, actions) => setPaidFor(true) }
    />
    )

    return (
        <>
        <Layout>
        <SEO title="Open Water" />
            <DiscoverCarousel/>
            <div className="container text-center mt-4 dive-info">    
            <h3 className='mb-2'><strong>Padi Open Water Course</strong></h3>
            <h5 id='scuba-diver-info-big'><strong>What can you expect from this beginner’s PADI Open Water course in the Dominican?</strong></h5>
            <div className="row mt-2">
            <div className="col-sm-4">
                <div class="well">
                    <p>This is a 3-day diving course which will allow you to dive down to a maximum of 18 meters / 60 feet anywhere in the world. The course consists of 3 sections – online dive theory, confined swimming pool sessions and 4 Open Water dives.</p>
                </div>
            </div>
            <div className="col-sm-4"> 
                <div className="well">
                    <h3>Course Overview</h3>
                    <p className='my-1'>Course Level: Beginner</p>
                    <p className='my-1'>Price: $450 per person</p>
                    <p className='my-1'>Duration: 6 - 2.5 Hours sessions</p>
                    <p className='my-1'>Over 3 days</p>
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
            <div className="col-sm-4">
                <div className="well">
                    <h5 id='scuba-diver-info-small'><strong>What can you expect from this beginner’s PADI Open Water course in the Dominican?</strong></h5>
                    <p>The PADI E-Learning is a new product from PADI that makes the dive theory very easy to complete and can be downloaded on any Apple or Android device before you even arrive on Punta Cana or on the beach here, which leaves more free time for you on your vacation.</p>
                </div>
            </div>
            </div>
            <div className="underline my-2"></div>
            <div className="row mt-4">
                <div className="col-sm-4">
                    <div className="well">
                        <p>On your first day of the course your instructor will do a review with you of your theory and then you will get acquainted with the equipment before starting the confined pool session.</p>
                    </div>
                    <div className="well">
                        <p>At this point you will do your confined water training at one of our pools, with small groups you can complete all of your confined water training in one day.</p>
                    </div>
                </div>
                <div className="col-sm-4"> 
                    <div className="well">
                        <p>In your confined water dives you will learn all you need to know in how to use scuba equipment and be able to handle yourself under water as well as being prepared for any situation in the open water. We prefer to take a little more time with you in the pool so that you are 100% comfortable when you go diving in the open water. Not only will you learn a lot, you will a have a lot of fun swimming around under water.</p>
                    </div> 
                </div>
                <div className="col-sm-4">
                    <div className="well">
                        <h4><strong>Open Water Dives</strong></h4>
                        <p>The open water portion of the course consists of 4 open water dives where you will perform various dive skills both under water and at the surface to make sure that you are a competent and safe diver. We break up the skills over the 4 dives so that you only are doing a few skills each dive and get to spend the majority of your time diving with your instructor and exploring the underwater world.</p>
                    </div>
                </div>
                </div>
                <div className="well d-flex justify-content-between mx-2">
                    <Button href="/scubadiver" size="sm">Scuba Diver</Button>
                    <Button href="/advanced" size="sm">Advance Open Water</Button>
                </div>
        </div>
        <Footer/>
        </Layout>
        </>
    )
}

export default OpenWater
