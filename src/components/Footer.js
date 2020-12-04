import React from 'react';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';
import { GrMail } from 'react-icons/gr';
import { RiWhatsappFill } from 'react-icons/ri';

function Footer() {
    return (
        
        <>
    
        <footer className="page-footer p-1 bg-dark text-white mt-2">
            <div className="container text-center w-75 p-1 mx-auto">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2020 
                        </p>
                    </div>

                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <a className='mx-2' href="https://www.facebook.com/grandbaydivecenter/" target="_blank" aria-label="Facebook" rel="noreferrer"><SiFacebook/></a>
                        <a className='mx-2' href="https://twitter.com/GrandBayOfTheS1" aria-label="Twitter" target="_blank" rel="noreferrer"><SiTwitter/></a>
                        <a className='mx-2' href="https://www.instagram.com/grandbayoftheseard/" target="_blank" aria-label="Instagram" rel="noreferrer"><SiInstagram/></a>
                        <a className='mx-2' href="mailto:grandbayofthesea@gmail.com" aria-label="Gmail"><GrMail/></a>
                        <a className='mx-2' href="https://api.whatsapp.com/send?phone=18297239338" target="_blank" aria-label="Whatsapp" rel="noreferrer"><RiWhatsappFill/></a>
                    </div>
                </div>
            </div>
    </footer>
        </>
    )
}

export default Footer
