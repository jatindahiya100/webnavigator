import React from 'react'
import '../assets/css/header.css'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from "react-router-dom"

export default function Header() {

  return (
    <div className='header'>

      <div className="logo">
        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      </div>

      <div className="nav-items">
        <NavLink className="primary-text-light-mode" to='/'>Home</NavLink>
        <NavLink className="primary-text-light-mode" to='/about'>About</NavLink>
        <NavLink className="primary-text-light-mode" to='/work'>Work</NavLink>
        <NavLink className="primary-text-light-mode" to='/services'>Services</NavLink>
      </div>


      <div className="quick-actions">

      </div>

    </div>
  )
}
