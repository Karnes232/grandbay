import React, {useState} from 'react';
import DiscoverCarousel  from '../components/DiscoverCarousel';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

import Paypal from "gatsby-plugin-paypal"

function Advanced() {

    const [paidFor, setPaidFor] = useState(false);

    const PaypalButton = () => (
    <Paypal 
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'paypal',
      }}
      amount={180.00}
      currency="USD"
      shippingPreference="NO_SHIPPING"
      onApprove={ (data, actions) => setPaidFor(true) }
    />
    )

    return (
        <>
        <Layout>
        <SEO title="Advanced Open Water" />
            <DiscoverCarousel/>
            <div class="container text-center mt-4 dive-info">    
            <h3 className='mb-2'><strong>PADI Advanced Open Water Course</strong></h3>
            <h5 id='scuba-diver-info-big'><strong>What can you expect from this PADI Advanced Open Water course in the Dominican?</strong></h5>
            <div class="row mt-2">
            <div class="col-sm-4">
                <div class="well">
                    <p>In Open Water, you learned the basics of how to scuba dive. In Advanced, you are fine tuning your skills, and learning how to be a diver. You will gain more experience, and try some different diving specialites under the supervision of an instructor. </p>
                </div>
            </div>
            <div class="col-sm-4"> 
                <div class="well">
                    <h3>Course Overview</h3>
                    <p className='my-1'>Course Level: Intermediate</p>
                    <p className='my-1'>Price: $360 per person</p>
                    <p className='my-1'>Duration: 5 - 2.5 Hours sessions</p>
                    <p className='my-1'>Over 3 days</p>
                </div> 
                <div className="well">
                    <p className='mb-1 mt-2'><strong>Reserve Now</strong></p>
                    <p className='mt-1'>Only a 50% deposit</p>
                </div>
                {paidFor ? (
                    <div>
                        <h6>Congrats, you just bought a diving course!</h6>
                    </div>
                ) : (
                    <div className="well d-flex justify-content-center mb-2">
                        <PaypalButton />
                    </div>
                )}
            </div>
            <div class="col-sm-4">
                <div class="well">
                    <h5 id='scuba-diver-info-small'><strong>What can you expect from this PADI Advanced Open Water course in the Dominican?</strong></h5>
                    <p>You can enroll immediately after earning your PADI Open Water Diver certification regardless of your skill level. The course helps you build confidence in navigation, fine-tune buoyancy skills and introduces you to different diving activities such as wreck diving.</p>
                </div>
            </div>
            </div>
            <div className="underline my-2"></div>
            <div class="row mt-4">

                <div class="col-sm-4">
                    <div className="well">
                        <p>During the Deep Dive (up to 30 meter / 100 feet), you learn how to plan dives to deal with the physiological effects and challenges of deeper scuba diving.</p>
                        <p>The Underwater Navigation Adventure Dive refines your compass navigation skills and helps you better navigate using kick-cycles, visual landmarks and time.</p>
                        
                    </div>
                </div>
                <div class="col-sm-4"> 
                    <div class="well">
                        <p>While Deep Diving and Underwater Navigation are mandatory, together with your dive instructor, you can choose 3 other adventure dives to gain the PADI Advanced Open Water Diver certification.</p>
                        <p>One of the top choices for our students is the Wreck Dive, where we visit Wreck Monica</p>
                        
                    </div> 
                </div>
                <div class="col-sm-4">
                    <div class="well">
                        <p>Also think about buoyancy control, fish identification, boat diving, underwater photo / video (especially if you have a GoPro or underwater camera already) or maybe enriched air (Nitrox) to expand your bottom time.</p>
                        
                    </div>
                </div>
                </div>
                <div className="underline my-2"></div>
                <div class="row mt-4">
                    
                    <div class="col-sm-12">
                        <h4><strong>Why should you do your advanced training?</strong></h4>
                        <p>Once you graduate to Advanced Open Water Diver, you can dive deeper. You’ll be certified to 30 meters / 100 feet, giving you access to a wider variety of dive sites and marine life. There are many sea creatures that you can't see at shallower depths, and wrecks are often found deeper.</p>
                    </div>
                </div>
                <div className="well d-flex justify-content-start ml-2">
                    <Button href="/openwater" size="sm">Open Water</Button>
                </div>
        </div>
        <Footer/>
        </Layout>
        </>
    )
}

export default Advanced
