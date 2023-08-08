import React, { useState } from 'react'
import '../assets/css/Header.css'
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
        <Link to='/'><span>&#9775; Web</span><span>Navigators</span></Link>
      </div>

      <nav className={isNavOpen === true ? 'mobile-menu' : 'desktop-menu'}>
        <NavLink to='/' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="home"></ion-icon> Home</NavLink>
        <NavLink to='/what-we-do' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="shapes"></ion-icon> What We Do?</NavLink>
        <NavLink to='/work' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="ribbon"></ion-icon> Work</NavLink>
        <NavLink to='/blogs' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="eye"></ion-icon> Blogs</NavLink>
        <NavLink to='/start-project' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="infinite"></ion-icon> Start Project</NavLink>
      </nav>

      <div className={`toggle-menu ${isNavOpen === false ? '' : 'change'}`} onClick={toggleMenu}>

        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>

      </div>

    </header>
  )
}
