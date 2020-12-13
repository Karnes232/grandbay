import React from 'react'
import { GiScubaTanks } from 'react-icons/gi';
import AboutImg from '../images/franklin.png'
import AboutImg2 from '../images/franklin3.png'
import Footer from '../components/Footer';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/about" />
        </Helment>
        <Layout>
        <SEO title="About Us" />
          <div className="aboutus-section">
            <div className="container aboutus-container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12" id='aboutus'>
                        <div className="aboutus">
                            <h2 className="aboutus-title">About Us</h2>
                            <p className="aboutus-text">Grand Bay of the Sea is a local family ran dive company located in the Punta Cana area. With more than 15 years of experience throughout the Dominican Republic, we guarantee satisfaction and excellent treatment from our qualified staff. We specialize in providing a more personalized service to our clients with our professional team</p>
                            
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="aboutus-banner about-large text-center">
                            <img className='mb-3' src={AboutImg2} alt=""/>
                        </div>
                        <div className="aboutus-banner about-small">
                            <img className='mb-3 rounded mx-auto d-block' src={AboutImg} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="feature">
                            <div className="feature-box">
                                <div className="">
                                    <div className="iconset">
                                        <GiScubaTanks className='icon'/>
                                    </div>
                                    <div className="feature-content">
                                        <h4>Our Mission</h4>
                                        <p>To provide excellent training and supervision to  guarantee your safety.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                        <GiScubaTanks className='icon'/>
                                    </div>
                                    <div className="feature-content">
                                        <h4>Contact Infomation</h4>
                                        <p>Facebook: <a className='mx-2 mt-2' href="https://www.facebook.com/grandbaydivecenter/" target="_blank" aria-label="Facebook" rel="noreferrer"><SiFacebook/></a></p>
                                        <p>Instagram: <a className='mx-2' href="https://www.instagram.com/grandbayoftheseard/" aria-label="Instagram" target="_blank" rel="noreferrer"><SiInstagram/></a></p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="feature-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                        <GiScubaTanks className='icon'/>
                                    </div>
                                    <div className="feature-content">
                                        <p>Twitter: <a className='mx-2' href="https://twitter.com/GrandBayOfTheS1" target="_blank" aria-label="Twitter" rel="noreferrer"><SiTwitter/></a></p>
                                        <p>Email: <a className='mx-2' href="mailto:grandbayofthesea@gmail.com">grandbayofthesea@gmail.com</a></p>
                                        <p>Whatsapp: <a className='mx-2' href="https://api.whatsapp.com/send?phone=18297239338" target="_blank" rel="noreferrer">1-829-723-9338</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-page-footer">
        <Footer/>
        </div>
        </Layout>
        </>
    )
}

export default About
