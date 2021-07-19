import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Logo from '../../Assets/img/alcantaradevelopment.png'
import githublogo from "../../Assets/img/githublogo.png"
import linkedinlogo from "../../Assets/img/linkedinlogo.png"
import instagramlogo from "../../Assets/img/instagramlogo.png"
import { Toggle } from "../Toggle/Toggle"

import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
        console.log("testing out the props");
        console.log(this.props)
    }

    

    render() {
        return (
            <div id="navigation">
                <div id="mobileNavActive">
                    <Link to="/" id="logoimg">
                        <img src={Logo} alt="logo" id="logo"></img>
                    </Link>
                    <div id="burger" onClick={this.handleClick}>
                        <div id="line1" className={this.state.clicked ? 'line1click' : ''}></div>
                        <div id="line2" className={this.state.clicked ? 'line2click' : ''}></div>
                        <div id="line3" className={this.state.clicked ? 'line3click' : ''}></div>
                    </div>
                </div>

                <div className={this.state.clicked ? 'navbar active' : 'navbar'}>
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
                    <Toggle theme={this.props.theme} toggleTheme={this.props.toggleTheme} id="toggle"/>
                </div>
                
            </div>
        )
    }
}

export default Navbar
