import React, { useState } from 'react';
import { divesites } from '../divesites';
import DiveSite from '../components/DiveSite';
import Modal from '../components/Modal'
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalPhotos from '../components/ModalPhotos'
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import '../styles/divesite.css'

function Sites() {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/sites" />
        </Helment>
        <Layout>
        <SEO title="Dive Sites Punta Cana" description="Grand Bay of the Sea has many choices to dive in Punta Cana and the surrounding areas. With over 30 dive sites to choose from, we are sure we can help you find one that is right for you and your family." />
            <div className="jumbotron">
                <div className="jumbotron-background">
                    <img src="https://i.ibb.co/HpdmSGf/saona1.jpg" alt="Punta Cana Scuba Diving"/>
                </div>
                <div className="container text-center">
                    <h1>Dive Sites</h1>     
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
            <div className="well d-flex justify-content-center my-3">
                <Button href="/" size="sm">Back Home</Button>
            </div>
            { selectedImg && <ModalPhotos selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            <Footer/>
            </Layout>
        </>
    )
}

export default Sites
