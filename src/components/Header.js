import React from 'react'
import '../assets/css/Header.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img src={Logo} alt="The Web Navigators Logo" />
                    <span>The Web Navigators</span>
                </Link>
            </div>

            <nav>
                <ul>
                    <li><NavLink className='' to='/'>Home</NavLink></li>
                    <li><NavLink className='' to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink className='' to='work'>Previous Work</NavLink></li>
                    <li><NavLink className='' to='what-we-do'>What We Do ?</NavLink></li>
                    <li><NavLink to='start-project'>Start Project</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
