import React, { useState } from 'react'
import '../assets/css/Header.css'
import logo from '../assets/images/thrive-logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

  const [isNavOpen, setNavOpen] = useState(false);

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 800) {
      var menu = document.querySelector("nav");
      menu.className = "desktop-menu";
      setNavOpen(false);
    }
  })

  const toggleMenu = () => {
    setNavOpen(!isNavOpen);
  }

  return (
    <header>

      <div className="logo">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>

      <nav className={isNavOpen === true ? 'mobile-menu' : 'desktop-menu'}>
        <NavLink to='/' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="home"></ion-icon> Home</NavLink>
        <NavLink to='/services' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="shapes"></ion-icon> Services</NavLink>
        <NavLink to='/work' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="ribbon"></ion-icon> Work</NavLink>
        <NavLink to='/start-project' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="infinite"></ion-icon> Start Project</NavLink>
      </nav>

      <div className='toggle-menu' onClick={toggleMenu}><ion-icon name={isNavOpen === false ? "menu" : "close"}></ion-icon></div>

    </header>
  )
}
