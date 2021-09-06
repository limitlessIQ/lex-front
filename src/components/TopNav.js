import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import '../styles/TopNav.css'

function TopNav() {
    return (
        <div className="wide TopNav">
            <Link to='#' className="centerVertical"><img className="logoMedium" src={Logo} alt="" /></Link>
        </div>
    )
}

export default TopNav
