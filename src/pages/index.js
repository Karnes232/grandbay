import React from "react"
import { Link } from "gatsby"

import CarouselComponent from '../components/CarouselComponent'

import Footer from '../components/Footer';
import icon1 from '../images/icons8-clown-fish-48.png';
import icon3 from '../images/icons8-scuba-diving-team-64.png';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Helment from 'react-helmet'

const IndexPage = () => (
  <Layout>
    <Helment>
        <link rel="canonical" href="https://www.grandbay-puntacana.com" />
        <meta name="google-site-verification" content="QNQfgD0iQIbuHkuZ5fb8hKEYbV6iCN_TvIyRdnAu7yg" />
    </Helment>
    <SEO title="Grand Bay of the Sea" />
    <div className="seo-tags">
        <h1><strong>punta cana scuba diving</strong></h1>
        <h1><strong>scuba diving dominican republic</strong></h1>
        <h1><strong>diving dominican republic</strong></h1>
    </div>
    <CarouselComponent/>
    <div className="hero text-center">
            <h1>Grand Bay</h1>
            <h2>of The</h2>
            <h3>Sea</h3>
        </div>

        <div className="section text-center w-75 p-3 mx-auto">
            <div className="seo-tags">
                <h1><strong>Scuba Diving in Punta Cana</strong></h1>
            </div>
            <h4> <strong>Explore a Whole New World!</strong> </h4>
            <p>Join us on the reefs around Punta Cana and surronding area. You will find a great variety of dive sites from shallow coral reefs, wrecks, caves and canyons habited by turtles.</p>   
        </div>

        <div className="row mx-5">
        <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-3 index-sections">
            <Link className="nav-link"  to="/courses">
            <div className="seo-tags">
                <h1><strong>punta cana diving</strong></h1>
            </div>
            <h4  className='trip-links'><strong>Scuba Courses</strong></h4>
            <img className='my-2' src={icon3} alt="Scuba Diving Punta Cana"/>
            <p className='mt-2'>Try diving for the first time, get certifed, or upgrade your certification</p>
            </Link>
        </div>

        <div className="section text-center w-75 p-3 mt-2 mx-auto col-12 col-md-3 index-sections">
            <Link className="nav-link" to="/sites">
            <div className="seo-tags">
                <h1><strong>punta cana dive sites</strong></h1>
            </div>
            <h4 className='trip-links'><strong>Reef Diving</strong></h4>
            <img className='my-2' src={icon1} alt="Scuba Diving Punta Cana"/>
            <p className='mt-2'>Dive for a day or more, and save on multiple dive packages</p>
            </Link>
        </div> 

        <div className="section text-center w-75 p-3 mt-2 mx-auto col-12 col-md-3 index-sections">
            <Link className="nav-link" to="/trips">
            <div className="seo-tags">
                <h1>scuba punta cana</h1>
            </div>
            <h4 className='trip-links'><strong>Day Trips</strong></h4>
            <img className='my-2' src="https://img.icons8.com/pastel-glyph/64/000000/route--v2.png" alt="Scuba Diving Punta Cana"/>
            <p className='mt-2'>Enjoy a day on the caribbean coast of the island, with its white sand and turquoise waters</p>
            </Link>
        </div>
        </div>   
        <Footer/>  
  </Layout>
)

export default IndexPage
