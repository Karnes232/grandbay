import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

const DiveSite = ({ id, name, img, depth, desc, selectedImg, setSelectedImg }) => {
    const [readMore,setReadMore] = useState(false);
    return (
        <div key={id} className="col-sm-6 col-md-4 mt-3 dive-site-info" 
            onClick={() => setSelectedImg(img)}
            role="button"  
            tabIndex="0"   
            onKeyDown={() => setSelectedImg(img)}  
        >
            <LazyLoad height={200} offset={50} once>
            <img src={img} alt={name} className='border border-bottom-0 border-dark rounded-top'/>
            <footer className="border border-top-0 rounded-bottom border-dark py-2 px-1">
                <div className="d-flex align-items-center flex-column">
                    <h4 className=''>{name}</h4>
                    <h6>{depth}</h6>
                </div>
                <p>{readMore?desc:`${desc.substring(0,150)}...`
                    }
                <button onClick={()=> setReadMore(!readMore)}>
                    {readMore?'show less':'read more'}
                </button></p>
            </footer>
            </LazyLoad>
        </div>
    )   
};
export default DiveSite;





                        