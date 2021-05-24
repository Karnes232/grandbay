import React from 'react';
import logosmaller from '../images/logo-smaller.png'
import { Link } from 'gatsby'
import '../styles/nav.css'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container mx-2">
                <Link className="navbar-brand" to="/">
                    <img src={logosmaller} id='small-logo' alt="Grand Bay of the Sea Scuba Diving in Punta Cana"></img>
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/courses">
                        Scuba Classes
                    </Link>               
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/sites">
                        Dive Packages
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link"  to="/trips">
                        Dive Trips
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/species">
                        Species Guide
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/contact">
                        Contact Us
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar

