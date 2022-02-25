import React, { useState } from 'react';
import { Link } from "gatsby"
import { divesites } from '../divesites';
import DiveSite from '../components/DiveSite';
import Modal from '../components/Modal'
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ModalPhotos from '../components/ModalPhotos'
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import '../styles/divesite.css'


function Sites() {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/sites/" />
        </Helment>
        <Layout>
        <Seo title="Padi Course In Punta Cana | Scuba Classes | Scuba School Near Me | Scuba Certification Punta Cana | Padi Scuba Diving Punta Cana" description="Talk to our team about packages of Scuba Diving, Scuba Classes, Shark Diving In Punta Cana. Give us a call right away." />
            <div className="jumbotron">
                <div className="jumbotron-background">
                    <img src="https://i.ibb.co/0KfLQXn/saona1.webp" alt="Punta Cana Scuba Diving"/>
                </div>
                <div className="container text-center">
                    <h1>Dive Sites</h1>     
                </div>
            </div>
            <div className="row py-2">
                    <div className="col-sm-12 text-center">
                        <h4 className='text-center course-title'><strong>What can we see while diving in Punta Cana?</strong></h4>
                        <p>Punta Cana is the underwater jewel of the Dominican Republic. When you are diving with us, we take you to the best dive sites of the region, a paradise for shark lovers, wreck enthusiasts, turtles and rays galore! 
                        The healthy reefs around this side of the islands are thriving with marvelous creatures and colorful corals. Shallow reefs here receive sunlight all year round and have the perfect conditions for hard corals to grow beautiful and vigorous: we can see brain corals, labyrinth corals, whip corals, fan corals, acroporas, porites, millepora and pillar corals.</p>
                    </div>
            </div>
           <div className="container-fluid bg-3 fish-id">
               <div className="text-center">
                   <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#dive-packages">Dive Packages</button>
                   <Modal />
                </div>   
                <motion.div className="row mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                >
                    {divesites.map((divesite)=>{
                        return <DiveSite key={divesite.id} {...divesite} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>      
                    })}
                </motion.div>
            </div>
                <div className="row py-2">
                    <div className="col-sm-12 text-center">
                        <h4 className='text-center course-title'><strong>Shark Diving in Punta Cana</strong></h4>
                        <p>For the best Shark Dive in Punta Cana, join us on our half day trip to Shark Point in Bavaro, where divers can meet black tip reef sharks, nurse sharks and other reef sharks face to face, on top of southern stingrays, eagle rays and amazing coral formations.
                        Shark diving in Punta Cana is actually possible a bit everywhere, since these beautiful and intelligent creatures like to swim around in our area: our experienced divemasters and instructors will know where to take you for an experience not to be missed. We recommend you do not fear sharks around our waters, especially nurse sharks: they are among the most docile and harmless creatures in the sea, and actually seem to enjoy respectful human interaction. 
                        Another amazing encounter that is typical in our waters between January and March is the elegant humpback whale, coming to the <Link to="https://www.silverbankwhales.com/">Silverbank</Link> every year to mate: keep your eyes open while you’re in the area at this time of the year, we might be able to stop for some life-changing snorkeling and whale watching!</p>
                    </div>
                </div>


            
            { selectedImg && <ModalPhotos selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            <Footer/>
            </Layout>
        </>
    )
}

export default Sites
