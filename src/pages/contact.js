import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import ContactComponent from '../components/ContactComponent'
import Footer from '../components/Footer';

function contact() {
    return (
        <>
        <Layout>
        <SEO title="Contact Us" />
            <div className="container">
                <Grid container spacing={1}>
                    <ContactComponent />
                </Grid>
            </div>
            <Footer/> 
        </Layout>   
        </>
    )
}

export default contact
