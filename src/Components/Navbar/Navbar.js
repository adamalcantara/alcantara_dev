import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../../Assets/img/logo.png'

const Navbar = () => {
    return (
        <Link to="/" id="logoimg">
            <img src={Logo} alt="logo" id="logo"></img>
        </Link>
    )
}

export default Navbar
