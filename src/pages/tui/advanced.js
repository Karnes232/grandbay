import React from 'react';
import DiscoverCarousel  from '../../components/DiscoverCarousel';
import Footer from '../../components/Footer';
import Helment from 'react-helmet'
import Seo from "../../components/seo"
import Button from 'react-bootstrap/Button';
import LayoutTui from '../../components/layoutTui';

function Advanced() {

    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/advanced/" />
        </Helment>
        <LayoutTui>
        <Seo title="Advanced Open Water" description="Well you are in Punta Cana you have the chance to complete your Advanced Open Water Dive certification"/>
            <DiscoverCarousel/>
            <div className="mx-5 text-center mt-4 dive-info">
                <div className="seo-tags">
                    <h1><strong>Scuba Diving in Punta Cana</strong></h1>
                </div>  
            <h3 className='mb-2'><strong>PADI Advanced Open Water Course</strong></h3>
            <h5 id='scuba-diver-info-big'><strong>What can you expect from this PADI Advanced Open Water course in the Dominican?</strong></h5>
            <div className="row mt-2">
            <div className="col-sm-4 d-flex align-items-center">
                <div className="well">
                    <p>In Open Water, you learned the basics of how to scuba dive. In Advanced, you are fine tuning your skills, and learning how to be a diver. You will gain more experience, and try some different diving specialites under the supervision of an instructor. </p>
                </div>
            </div>
            <div className="col-sm-4"> 
                <div className="well">
                    <h3>Course Overview</h3>
                    <p className='my-1'>Course Level: Intermediate</p>
                    <p className='my-1'>Price: $400 per person</p>
                    <p className='my-1'>Duration: 5 - 2.5 Hours sessions</p>
                    <p className='my-1'>Includes: Transport</p>
                    <p className='my-1'>Over 3 days</p>
                </div> 
                
            </div>
            <div className="col-sm-4 d-flex align-items-center">
                <div className="well">
                    <h5 id='scuba-diver-info-small'><strong>What can you expect from this PADI Advanced Open Water course in the Dominican?</strong></h5>
                    <p>You can enroll immediately after earning your PADI Open Water Diver certification regardless of your skill level. The course helps you build confidence in navigation, fine-tune buoyancy skills and introduces you to different diving activities such as wreck diving.</p>
                </div>
            </div>
            </div>
            <div className="underline my-2"></div>
            <div className="row mt-4">

                <div className="col-sm-4 d-flex align-items-center">
                    <div className="well">
                        <p>During the Deep Dive (up to 30 meter / 100 feet), you learn how to plan dives to deal with the physiological effects and challenges of deeper scuba diving.</p>
                        <p>The Underwater Navigation Adventure Dive refines your compass navigation skills and helps you better navigate using kick-cycles, visual landmarks and time.</p>
                        
                    </div>
                </div>
                <div className="col-sm-4 d-flex align-items-center"> 
                    <div className="well">
                        <p>While Deep Diving and Underwater Navigation are mandatory, together with your dive instructor, you can choose 3 other adventure dives to gain the PADI Advanced Open Water Diver certification.</p>
                        <p>One of the top choices for our students is the Wreck Dive, where we visit Wreck Monica</p>
                        
                    </div> 
                </div>
                <div className="col-sm-4 d-flex align-items-center">
                    <div className="well">
                        <p>Also think about buoyancy control, fish identification, boat diving, underwater photo / video (especially if you have a GoPro or underwater camera already) or maybe enriched air (Nitrox) to expand your bottom time.</p>
                        
                    </div>
                </div>
                </div>
                <div className="underline my-2"></div>
                <div className="row mt-4">
                    
                    <div className="col-sm-12">
                        <h4><strong>Why should you do your advanced training?</strong></h4>
                        <p>Once you graduate to Advanced Open Water Diver, you can dive deeper. You’ll be certified to 30 meters / 100 feet, giving you access to a wider variety of dive sites and marine life. There are many sea creatures that you can't see at shallower depths, and wrecks are often found deeper.</p>
                    </div>
                </div>
                <div className="well d-flex justify-content-start ml-2">
                    <Button href="/tui/openwater" size="sm">Open Water</Button>
                </div>
        </div>
        <Footer/>
 
        </LayoutTui>
        </>
    )
}

export default Advanced
