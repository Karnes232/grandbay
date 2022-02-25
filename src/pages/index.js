import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import LazyLoad from 'react-lazyload';
import CarouselComponent from '../components/CarouselComponent'
import Footer from '../components/Footer';
import icon1 from '../images/icons8-clown-fish-48.webp';
import icon3 from '../images/icons8-scuba-diving-team-64.webp';
import '../styles/index.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helment from 'react-helmet'
    

const IndexPage = () => {
    const { site } = useStaticQuery(
        graphql`
        query {
            site {
            siteMetadata {
                title
                description
                keywords
                url
                author
                image
            }
            }
        }
        `
    )
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Grand Bay of the Sea",
        "description": site.siteMetadata.description,
        "url": "https://www.grandbay-puntacana.com/",
        "logo": "https://www.grandbay-puntacana.com/static/logo-smaller-d5cb1a00f0a9e9d2de1108977be2b0af.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+18297239338",
            "contactType": "customer service",
            "availableLanguage": ["en","es","fr"]
        },
        "sameAs": [
            "https://www.facebook.com/grandbaydivecenter/",
            "https://twitter.com/GrandBayOfTheS1",
            "https://www.instagram.com/grandbayoftheseard/",
            "https://www.youtube.com/channel/UCpYWOhIwbVVLGYOxL0UAtTw",
            "https://www.grandbay-puntacana.com/"
        ]
    }
    return(
        <Layout>
            <Helment>
                <link rel="canonical" href="https://www.grandbay-puntacana.com" />
                <meta name="google-site-verification" content="QNQfgD0iQIbuHkuZ5fb8hKEYbV6iCN_TvIyRdnAu7yg" />
                
            </Helment>
            <Seo title="Grand Bay of the Sea | Dive Company Punta Cana | Diving Training Center Punta Cana | Dive Center Near Me | Scuba Diving in Punta Cana made easy" description="Join our Scuba Divers on the reefs around Punta Cana and the surrounding area. To learn about our Dive Company, visit our website now." schemaMarkup={schema}/>
            <div className="seo-tags">
                <h1><strong>punta cana scuba diving</strong></h1>
                <h2><strong>scuba diving dominican republic</strong></h2>
                <h2><strong>diving dominican republic</strong></h2>
            </div>
            <LazyLoad height={200} offset={50} once>
                <CarouselComponent/>
            </LazyLoad>
            <div className="hero text-center">
                    <h1>Grand Bay <br/>of The <br/>Sea </h1>

                </div>

                <div className="section text-center w-75 p-3 mx-auto">
                    <div className="seo-tags">
                        <h1><strong>Scuba Diving in Punta Cana</strong></h1>
                    </div>
                    <h4> <strong>Explore a Whole New World!</strong> </h4>
                    <p>Welcome to Grand Bay of the Sea, your PADI Dive Center in Punta Cana, where our long-standing          experience meets the beauty of the underwater world in our gorgeous area, for a memorable diving experience in the best reefs of Dominican Republic.
                        This is the place where any scuba diver in Punta Cana can feel at home, whether they are experienced divers or novices, or even non divers (yet!). We offer a wide range of dive trip packages in Punta Cana, including Bayahibe, Saona Island, and Catalina Island, as well as dive courses and certification packages.
                        You can discover this Caribbean paradise with our experienced guides and our friendly staff, and join the multitude of divers and snorkelers that literally fell in love with the breathtaking views that our stunning sea offers. </p>   
                </div>
                
                <div className="row mx-5">
                <div className="section text-center w-75 p-3 mt-0 mx-auto col-12 col-md-3 index-sections">
                    <Link className="nav-link"  to="/courses">
                    <div className="seo-tags">
                        <h1><strong>punta cana diving</strong></h1>
                    </div>
                    <h4  className='trip-links'><strong>Scuba Courses</strong></h4>
                    <img className='my-2' src={icon3} alt="Scuba Diving Punta Cana"/>
                    <p className='mt-2'>Try diving for the first time, get certified, or upgrade your certification</p>
                    </Link>
                </div>

                <div className="section text-center w-75 p-3 mt-2 mx-auto col-12 col-md-3 index-sections">
                    <Link className="nav-link" to="/sites">
                    <div className="seo-tags">
                        <h1><strong>punta cana dive sites</strong></h1>
                    </div>
                    <h4 className='trip-links'><strong>Dive Packages</strong></h4>
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
                <LazyLoad height={200} offset={50} once>
                <div className="p-0 mx-0 mt-2 col-12 col-md-12 google-map">
                    <iframe id='google-map' className='mb-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4686.043239862332!2d-68.36093478510533!3d18.648849387334387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8ed5ae3fc1995%3A0xfaa20e908d9d0359!2sGrand%20Bay%20of%20the%20Sea%20%2C%20Dive%20Center!5e1!3m2!1sen!2sdo!4v1612129278222!5m2!1sen!2sdo" frameborder="0"  allowfullscreen="" aria-hidden="false" title='google-map'></iframe>
                    <div className="mx-auto my-auto">
                    <h4 className='text-center'><strong>Scuba Diving in Punta Cana</strong></h4>
                    <p>Punta Cana is the underwater jewel of the Dominican Republic. The white beaches, lush vegetation and turquoise sea hide exciting adventures and beautiful seascapes. 
                    Look for Dive Center near Me or Scuba School near me in your search engine to find our webpage and contact information. When you are diving with us, we take you to the best dive sites of the region, a paradise for shark lovers, wreck enthusiasts, turtles and rays galore! 
                    The healthy reefs around this side of the islands are thriving with marvelous creatures and colorful corals. Shallow reefs here receive sunlight all year round and have the perfect conditions for hard corals to grow beautiful and vigorous: we can see brain corals, labyrinth corals, whip corals, fan corals, acroporas, porites, millepora and pillar corals.</p>
                    </div>
                </div>
                </LazyLoad>
                </div>   
                <LazyLoad height={200} offset={50} once>
                    <Footer/> 
                </LazyLoad> 
        </Layout>
    )}

export default IndexPage
