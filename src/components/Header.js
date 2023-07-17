import React from 'react'
import '../assets/css/Header.css'
import logo from '../assets/images/thrive-logo.png'
import { Link, NavLink } from "react-router-dom"

export default function Header() {

  return (
    <div className='header'>

      <div className="logo">
        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      </div>

      <div className="nav-items">
        <NavLink className="primary-text-light-mode" to='/'><ion-icon name="home"></ion-icon>Home</NavLink>
        <NavLink className="primary-text-light-mode" to='/services'><ion-icon name="cube"></ion-icon> Services</NavLink>
        <NavLink className="primary-text-light-mode" to='/work'><ion-icon name="logo-react"></ion-icon> Work</NavLink>
        <NavLink className="primary-text-light-mode" to='/about'><ion-icon name="information-circle"></ion-icon> About</NavLink>
        <NavLink className="primary-text-light-mode" to='/contact'><ion-icon name="infinite"></ion-icon> Start Project</NavLink>
      </div>


      <div className="quick-actions">
        <div className='toogle-mode'><ion-icon name="moon"></ion-icon></div>
      </div>

    </div>
  )
}
