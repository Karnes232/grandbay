import React from 'react';
import DiveSlide  from '../components/DiveSlide';
import DiveCourses  from '../components/DiveCourses'
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/courses.css'

function Courses() {
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/courses/" />
        </Helment>
        <Layout>
        <Seo title="Padi Course In Punta Cana | Scuba Classes | Scuba School Near Me | Scuba Certification Punta Cana | Padi Scuba Diving Punta Cana" description="We provide Scuba Classes in Punta Cana. Learn Certified Dive In Punta Cana. Come to us at Grand Bay of the Sea for Certified Dive In Punta Cana. "/>
            <div className="mx-5 mt-5">
                <div className="row">
                    <div className="col-sm-8 d-flex justify-content-center mb-1">
                        <div className="videoWrapper">
                            <iframe title="PADI Scuba Diving Punta Cana" className="responsive-iframe" src="https://www.youtube.com/embed/qEzf4MjmowA?playlist=qEzf4MjmowA&loop=1?autoplay=1&mute=0?controls=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 align-self-center">
                        <div className="well d-flex justify-content-center">
                        <h4><strong>The Fun Part</strong></h4>
                        </div>
                        <div className="well d-flex justify-content-center text-center">
                        <p>There is nothing like breathing underwater for the first time.</p>
                        </div>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-sm-12 d-flex justify-content-center text-center">
                        <div className="seo-tags">
                            <h1><strong>Scuba Diving in Punta Cana</strong></h1>
                        </div>
                        <p>It takes a little getting used to but after a few minutes, most participants realize how easy scuba diving really is. The biggest challenge for us is coaxing our students out of the water when the program is over.</p>
                    </div>
                </div>
                <DiveSlide/>
                <DiveCourses/>
            </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Courses
