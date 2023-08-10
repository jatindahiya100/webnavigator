import React, { useState } from 'react';
import '../assets/css/Header.css';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!isNavOpen);

    // Toggle body scroll based on navigation state
    if (!isNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const headerStyle = {
    backgroundColor: isNavOpen ? 'var(--accent)' : 'var(--primary-color)',
    color: isNavOpen ? 'var(--primary-color)' : 'var(--secondary-color)',
    transition: 'color 0.6s',
  }

  const sidenavStyle = {
    width: isNavOpen ? '100%' : '0%',
  };

  return (
    <>
      <div className='header' style={headerStyle}>
        <div className="logo">
          <Link to='/'><span>&#9775; Web</span><span>Navigators</span></Link>
        </div>

        <div className="header-buttons">

          <NavLink style={{ background: isNavOpen ? 'var(--secondary-color)' : 'var(--accent)' }} className='nav-item' to='start-project' onClick={isNavOpen ? toggleMenu : ''}>Start Project</NavLink>

          <div className={`toggle-menu ${isNavOpen ? 'change' : ''}`} onClick={toggleMenu}>
            <div style={{ background: isNavOpen ? 'var(--primary-color)' : 'var(--secondary-color)' }} className="bar1"></div>
            <div style={{ background: isNavOpen ? 'var(--primary-color)' : 'var(--secondary-color)' }} className="bar2"></div>
            <div style={{ background: isNavOpen ? 'var(--primary-color)' : 'var(--secondary-color)' }} className="bar3"></div>
          </div>

        </div>
      </div>

      <div className="sidenav" style={sidenavStyle}>
        <Link className='nav-item' to='/' onClick={toggleMenu}>Home</Link>
        <Link className='nav-item' to='/what-we-do' onClick={toggleMenu}>What We Do ?</Link>
        <Link className='nav-item' to='/work' onClick={toggleMenu}>Previous Work</Link>
        <Link className='nav-item' to='/blogs' onClick={toggleMenu}>Blogs</Link>
        <Link className='nav-item' to='/start-project' onClick={toggleMenu}>Start Project</Link>
      </div>
    </>
  );
}
