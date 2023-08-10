import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../assets/css/Footer.css'
import Lottie from 'lottie-react'
import Lottie01 from '../assets/images/Lottie/Lottie01.json'



export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="footer-top">
        <Lottie animationData={Lottie01} style={{ height: "200px" }} />
        <h3>Ready To Start A <br /> Project?</h3>
        <button className='button' onClick={() => { navigate('/start-project'); }}>Let's Do This</button>
      </div>
      <div className="footer-bottom">
        <div className="nav-links">
          <ul>
            <li><NavLink to='/'><ion-icon name="cube"></ion-icon> Home</NavLink></li>
            <li><NavLink to='what-we-do'><ion-icon name="cube"></ion-icon> What We Do?</NavLink></li>
            <li><NavLink to='work'><ion-icon name="cube"></ion-icon> Work</NavLink></li>
            <li><NavLink to='/start-project'><ion-icon name="cube"></ion-icon> Start Project</NavLink></li>
          </ul>
        </div>
        <p>
          Made With <span style={{ color: "crimson" }}><ion-icon name="heart"></ion-icon></span> In India. All rights reserved &copy; 2023.
          Let's collaborate and create exceptional digital solutions that reflect the rich heritage and collective brilliance of our global community. Together, we can build a brighter digital future!
        </p>
        <div className="social-links">
          <Link to='https://www.linkedin.com/in/jatindahiya-profile/'><ion-icon name="logo-linkedin"></ion-icon></Link>
          <Link to='https://github.com/jatindahiya100'><ion-icon name="logo-github"></ion-icon></Link>
        </div>
      </div>
    </footer>
  )
}
