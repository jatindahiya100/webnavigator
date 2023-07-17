import React from 'react'
import '../assets/css/header.css'
import logo from '../assets/images/logo.png'
import logo1 from '../assets/images/thrive-logo.png'
import { Link, NavLink } from "react-router-dom"

export default function Header() {

  return (
    <div className='header'>

      <div className="logo">
        <Link to='/'><img className='logo' src={logo1} alt="" /></Link>
      </div>

      <div className="nav-items">
        <NavLink className="primary-text-light-mode" to='/'><ion-icon name="home"></ion-icon>Home</NavLink>
        <NavLink className="primary-text-light-mode" to='/services'>What We Do</NavLink>
        <NavLink className="primary-text-light-mode" to='/about'>We Are</NavLink>
        <NavLink className="primary-text-light-mode" to='/work'>Portfolio</NavLink>
        <NavLink className="primary-text-light-mode" to='/contact'>Contact</NavLink>
      </div>


      <div className="quick-actions">
        <div className='toogle-mode'><ion-icon name="moon"></ion-icon></div>
      </div>

    </div>
  )
}
