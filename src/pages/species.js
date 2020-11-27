import React from 'react';
import photo1 from '../images/saona1.jpg';
import { fish } from '../fish';
import Footer from '../components/Footer';

import Layout from "../components/layout"
import SEO from "../components/seo"

function Species() {
    return (
        <>
        <Layout>
        <SEO title="Fishes of Punta Cana" />
            <div className="jumbotron">
                <div className="jumbotron-background">
                    <img src={photo1} alt=""/>
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
                            <div key={id} className="col-sm-4 col-md-3 mt-1">
                                <img src={img} alt={name} className='border border-bottom-0 border-dark rounded-top'/>
                                <h4 className='border border-top-0 border-dark rounded-bottom py-2'>{name}</h4>
                            </div>
                        )                      
                    })}
                </div>
            </div>
            <Footer/>
            </Layout>
        </>
    )
}

export default Species