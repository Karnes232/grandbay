import React, { useState } from 'react';
import { fish } from '../fish';
import Footer from '../components/Footer';
import Helment from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import ModalPhotos from '../components/ModalPhotos'

function Species() {

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/species" />
        </Helment>
        <Layout>
        <SEO title="Fishes of Punta Cana" />
            <div className="jumbotron">
                <div className="jumbotron-background">
                    <img src="https://i.ibb.co/HpdmSGf/saona1.jpg" alt=""/>
                </div>
                <div className="container text-center">
                    <h1>Fish of the Caribbean</h1>     
                </div>
            </div>
           <div className="container-fluid bg-3 text-center fish-id">    
                <h4>Just an idea of what you can see</h4>
                <div className="row mt-3">
                    {fish.map((f)=>{
                        const {id, name, img} = f;
                        return (
                            <motion.div key={id} className="col-sm-4 col-md-3 mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            >
                                <div className="single-fish mt-0 p-0"
                                    onClick={() => setSelectedImg(img)}
                                    role="button"  
                                    tabIndex="0"  
                                    onKeyDown={() => setSelectedImg(img)}
                                >
                                <img src={img} alt={name} className='border border-bottom-0 border-dark rounded-top'/>
                                </div>
                                
                                <h4 className='border border-top-0 border-dark rounded-bottom py-2'>{name}</h4>
                            </motion.div>
                        )                      
                    })}
                </div>
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

export default Species
