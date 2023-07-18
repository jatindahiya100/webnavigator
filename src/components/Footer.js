import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <h2>Ready To Start A <br /> Project?</h2>
        <button className='button'>Let's Do This</button>
      </div>
      <div className="footer-bottom">
        <div className="nav-links">
          <ul>
            <li><NavLink to='/'><ion-icon name="cube"></ion-icon> Home</NavLink></li>
            <li><NavLink to='services'><ion-icon name="cube"></ion-icon> Services</NavLink></li>
            <li><NavLink to='work'><ion-icon name="cube"></ion-icon> Work</NavLink></li>
            <li><NavLink to='/about'><ion-icon name="cube"></ion-icon> About</NavLink></li>
          </ul>
        </div>
        <p>
          Made With <span style={{ color: "crimson" }}><ion-icon name="heart"></ion-icon></span> In India. All rights reserved &copy; 2023.
        </p>
        <div className="social-links">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-github"></ion-icon>
        </div>
      </div>
    </footer>
  )
}
