import React, { useState } from 'react';
import photo1 from '../images/saona1.jpg';
import { divesites } from '../divesites';
import DiveSite from '../components/DiveSite';
import Modal from '../components/Modal'
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

function Sites() {
    return (
        <>
        <Layout>
        <SEO title="Dive Sites Punta Cana" />
            <div className="jumbotron">
                <div className="jumbotron-background">
                    <img src={photo1} alt="Punta Cana Scuba Diving"/>
                </div>
                <div className="container text-center">
                    <h1>Dive Sites</h1>     
                </div>
            </div>
           <div className="container-fluid bg-3 fish-id">
               <div className="text-center">
                   <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#dive-packages">More Info</button>
                   <Modal />
                </div>   
                <div className="row mt-3">
                    {divesites.map((divesite)=>{
                        return <DiveSite key={divesite.id} {...divesite} />      
                    })}
                </div>
            </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Sites
