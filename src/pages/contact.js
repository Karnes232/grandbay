import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helment from 'react-helmet'
import Grid from '@material-ui/core/Grid';
import ContactComponent from '../components/ContactComponent'
import Footer from '../components/Footer';

function contact() {
    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/contact/" />
        </Helment>
        <Layout>
        <Seo title="Contact Us | Grand Bay of The Sea | Scuba Diving in Punta Cana made easy" description="Come and discover scuba diving with the experts at Grand Bay of The Sea. Contact Us for personalized packages and services." />
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
