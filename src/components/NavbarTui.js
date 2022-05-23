import React from 'react';
import logosmaller from '../images/logo-smaller.webp'
import { Link } from 'gatsby'
import '../styles/nav.css'

function NavbarTui() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container mx-2 container-tui">
                <div className="navbar-brand">
                    <img src={logosmaller} id='small-logo' alt="Grand Bay of the Sea Scuba Diving in Punta Cana"></img>
                </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/tui/discover">
                        Discover Scuba Diving
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/tui/scubadiver">
                        PADI Scuba Diver Certification
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/tui/openwater">
                        PADI Open Water Certification
                    </Link>               
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/tui/advanced">
                        PADI Advanced Open Water Certification
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link"  to="/tui/sites">
                        Scuba Diving Sites
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/tui/catalina">
                        Catalina Island
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/tui/bayahibe">
                        Bayahibe Diving
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}

export default NavbarTui