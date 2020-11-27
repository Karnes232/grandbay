import React, { useState } from 'react';

const DiveSite = ({ id, name, img, depth, desc }) => {
    const [readMore,setReadMore] = useState(false);
    return (
        <div key={id} className="col-sm-6 col-md-4 mt-1 dive-site-info">
            <img src={img} alt={name} className='border border-bottom-0 border-dark rounded-top'/>
            <footer className="border border-top-0 rounded-bottom border-dark py-2 px-1">
                <div>
                    <h4 className=''>{name}</h4>
                    <h6>{depth}</h6>
                </div>
                <p>{readMore?desc:`${desc.substring(0,150)}...`
                    }
                <button onClick={()=> setReadMore(!readMore)}>
                    {readMore?'show less':'read more'}
                </button></p>
            </footer>
        </div>
    )   
};
export default DiveSite;





                        