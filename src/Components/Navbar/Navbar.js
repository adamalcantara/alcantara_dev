import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../../Assets/img/logo.png'

const Navbar = () => {
    return (
        <div>
            <Link to="/" id="logoimg">
                <img src={Logo} alt="logo" id="logo"></img>
            </Link>
            <nav id="navbar">
                <div id="navbar">
                    <Link to="/" className="links">Portfolio</Link>
                    <Link to="/about" className="links">About</Link>
                    <Link to="/contact" className="links">Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
