import React from 'react';
import DiscoverCarousel  from '../components/DiscoverCarousel';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from 'react-bootstrap/Button';

import Paypal from "gatsby-plugin-paypal"

function Discover() {

    const PaylpalButton = () => (
    <Paypal 
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'paypal',
      }}
      amount={1.00}
      currency="USD"
    />
    )

    return (
        <>
        <Layout>
        <SEO title="Discover Scuba Diving" />
            <DiscoverCarousel/>
            <div className="container text-center mt-4 dive-info">    
                <h3 className='mb-2'><strong>Try Discover Scuba Diving</strong></h3>
                <div className="row mt-2">
                <div className="col-sm-4">
                    <div className="well">
                        <h5>Experience the underwater world!</h5>
                        <p>If you would like to give diving a try, but don’t really know if you’re going to like it, or simply don’t want to invest a lot of time in a full course, we are pleased to offer a number of options that let you get your hair wet and experience the underwater world.</p>
                    </div>
                </div>
                <div className="col-sm-4"> 
                    <div className="well">
                        <h3><strong>Course Overview</strong></h3>
                        <p>Course Level: Beginner</p>
                        <p>Price: $105 per person</p>
                        <p>Duration: 2.5 Hours</p>
                    </div> 
                </div>
                <div className="col-sm-4">
                    <div className="well">
                        <p>This is a one-day PADI program that offers you the experience of Scuba diving to 12 meters, although it does not result in a certification, it can be credited as your first open water dive towards your PADI open water certification. This program is perfect for people who are interested in finding out what it is like to breath underwater and experience the underwater world.</p>
                    </div>
                    
                </div>
                </div>
                <div className="well d-flex justify-content-center mr-5">
                    <PaylpalButton />
                </div>
                <div className="well d-flex justify-content-end mr-5">
                    <Button href="/scubadiver" size="sm">Scuba Diver</Button>
                </div>
            </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Discover
