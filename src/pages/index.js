import React from "react"
import { Link } from "gatsby"

import CarouselComponent from '../components/CarouselComponent'

import Footer from '../components/Footer';
import icon1 from '../images/icons8-clown-fish-48.png';
import icon3 from '../images/icons8-scuba-diving-team-64.png';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Grand Bay of the Sea" />
    <CarouselComponent/>
    <div className="hero text-center">
            <h1>Grand Bay</h1>
            <h2>of The</h2>
            <h3>Sea</h3>
        </div>

        <div className="section text-center w-75 p-3 mx-auto">
            <h4> <strong>Explore a Whole New World!</strong> </h4>
            <p>Join us on the reefs around Punta Cana and surronding area. You will find a great variety of dive sites from shallow coral reefs, wrecks, caves and canyons habited by turtles.</p>   
        </div>

        <div className="row container mx-auto">
        <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-2">
            <Link className="nav-link"  to="/courses">
            <h4><strong>Scuba Course</strong></h4>
            <img className='my-2' src={icon3} alt="Scuba Diving Punta Cana"/>
            <p className='mt-2'>Try diving for the first time, get certifed, or upgrade your certification</p>
            </Link>
        </div>

        <div className="section text-center w-75 p-3 mt-2 mx-auto col-12 col-md-2">
            <Link className="nav-link" to="/sites">
            <h4><strong>Reef Diving</strong></h4>
            <img className='my-2' src={icon1} alt="Scuba Diving Punta Cana"/>
            <p className='mt-2'>Dive for a day or more, and save on multiple dive packages</p>
            </Link>
        </div> 

        <div className="section text-center w-75 p-3 mt-2 mx-auto col-12 col-md-2">
            <Link className="nav-link" to="/trips">
            <h4><strong>Day Trips</strong></h4>
            <img className='my-2' src="https://img.icons8.com/pastel-glyph/64/000000/route--v2.png" alt="Scuba Diving Punta Cana"/>
            <p className='mt-2'>Enjoy a day on the caribbean coast of the island, with its white sand and turquoise waters</p>
            </Link>
        </div>
        </div>   
        <Footer/>  
  </Layout>
)

export default IndexPage
