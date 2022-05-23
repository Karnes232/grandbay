import React from 'react';
import BayahibeCarousel  from '../../components/BayahibeCarousel';
import Footer from '../../components/Footer';
import Helment from 'react-helmet'
import Seo from "../../components/seo"
import LayoutTui from '../../components/layoutTui';


function Bayahibe() {


    return (
        <>
        <Helment>
            <link rel="canonical" href="https://www.grandbay-puntacana.com/bayahibe/" />
        </Helment>
        <LayoutTui>
        <Seo title="Bayahibe Diving" description="Bayahibe is just a short trip from Punta Cana offering some of the best scuba diving in the caribbean"/>
            <div class="catalina">
                <div class="row">
                <div class="col-sm-8 mb-3">
                    <BayahibeCarousel/> 
                </div>
                <div class="container col-sm-4 my-auto">
                    <div class="well text-center">
                        <h4><strong>Trip Overview</strong></h4>
                        <p className='my-1'>Price: $175 per person </p>
                        <p className='my-1'>(2 tank dive)</p>
                        <p className='my-1'>Duration: 7:30 - 16:00</p>
                        <p className='my-1'>Lunch optional</p>
                        <p className='my-1'>Drinks : Alcoholic optional</p>
                    </div> 
                    <div className="underline my-4"></div>
                    
                </div>
                </div>

                </div>
                
                <div class="mx-5 text-center">    
                <h3><strong>Bayahibe</strong></h3>
     
                <div class="row">
                    
                    
                    <div class="col-sm-6">
                    <div class="well">
                        <p>Located just a half-mile off the coast of Dominicus in Bayahíbe, the 73-meter (240 feet) long St. George ship was originally built in 1962 in Scotland, and was used to transport wheat and barley from Europe to the Caribbean. Today, the sunken ship is home to barracudas, moray eels, king mackerels, and groupers, among other species. Due to its depth of 40 meters (131 feet), it is recommended only for advanced divers. </p>
                    </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="well">
                            <p className='scuba-bayhibe-text'>The small fishing village of Bayahibe is located on the south coast of the Dominican Republic, a great place to visit any time of the year. <h1 className='scuba-bayhibe-h1'>Scuba diving in Bayahibe</h1>, is probably the best scuba diving on the whole Island. Diving in Bayahibe is generally easy. Most of the reefs just offshore and the protected side of Saona Island have little to no current.</p>
                        </div>
                    </div>  
                </div>

                </div>
                
                <div class="mx-5 text-center">    

                </div>
            <Footer/>
            </LayoutTui>
        </>
    )
}

export default Bayahibe