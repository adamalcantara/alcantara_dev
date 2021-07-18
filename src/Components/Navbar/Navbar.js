import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../../Assets/img/alcantaradevelopment.png'
import githublogo from "../../Assets/img/githublogo.png"
import linkedinlogo from "../../Assets/img/linkedinlogo.png"
import instagramlogo from "../../Assets/img/instagramlogo.png"

import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <Link to="/" id="logoimg">
                <img src={Logo} alt="logo" id="logo"></img>
            </Link>
            <nav id="navbar">
                <div id="links">
                    <Link to="/" className="links">Portfolio</Link>
                    <Link to="/about" className="links">About</Link>
                    <Link to="/contact" className="links">Contact</Link>
                </div>
                <div id="linkimg">
                    <a href="https://github.com/adamalcantara" target="_blank">
                        <img src={githublogo} alt="GitHub Logo" className="linkimg" />
                    </a>
                    <a href="https://www.linkedin.com/in/adam-alcantara" target="_blank">
                        <img src={linkedinlogo} alt="LinkedIn Logo" className="linkimg" />
                    </a>
                    <a href="https://www.instagram.com/alcantaradevelopment/" target="_blank">
                        <img src={instagramlogo} alt="Instagram Logo" className="linkimg" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
