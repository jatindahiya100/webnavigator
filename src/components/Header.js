import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        // Add or remove the 'no-scroll' class based on the menuOpen state
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup the class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [menuOpen]);

    return (
        <div className="relative">
            {/* Header for Smaller Screens */}
            <header className='md:hidden flex items-center justify-between h-20 bg-transparent px-4'>
                <div className="logo">
                    <Link to='/' className='inline-flex items-center gap-x-2.5 font-semibold'>
                        <img className='h-9 w-9' src={Logo} alt="The Web Navigators Logo" />
                        <span>The Web Navigators</span>
                    </Link>
                </div>
                <div className="hamburger">
                    <button
                        onClick={toggleMenu}
                        className='text-2xl text-gray-500 focus:outline-none'
                    >
                        <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
                            <path d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5" fill="none" strokeWidth="1.5" strokeLinecap="round"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Full-screen Side Navigation Menu */}
            <div className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-lg overflow-y-auto transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:w-0 z-50`}>
                <button onClick={closeMenu} className='md:hidden text-2xl text-gray-500 focus:outline-none absolute top-6 right-4'>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
                        <path d="M6 18L18 6M6 6l12 12" fill=" none " strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                </button>
                <nav className='flex flex-col items-center gap-4 py-24'>
                    <NavLink onClick={closeMenu} className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='/'>Home</NavLink>
                    <NavLink onClick={closeMenu} className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='work'>Previous Work</NavLink>
                    <NavLink onClick={closeMenu} className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='what-we-do'>What We Do ?</NavLink>
                    <NavLink onClick={closeMenu} className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='start-project'>Start Project</NavLink>
                </nav>
            </div>

            {/* Desktop Header */}
            <header className='mx-auto max-w-screen-xl w-full flex flex-row items-center justify-between h-20 bg-transparent absolute top-0 left-0 right-0 md:flex md:flex-row md:items-center md:justify-between md:h-20 bg-transparent hidden'>
                <div className="logo">
                    <Link to='/' className='inline-flex items-center gap-x-2.5 font-semibold'>
                        <img className='h-9 w-9' src={Logo} alt="The Web Navigators Logo" />
                        <span>The Web Navigators</span>
                    </Link>
                </div>
                <nav className='hidden md:flex items-center gap-12'>
                    <NavLink className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='/'>Home</NavLink>
                    <NavLink className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='work'>Previous Work</NavLink>
                    <NavLink className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='what-we-do'>What We Do ?</NavLink>
                    <NavLink className='cursor-pointer text-base font-semibold leading-6 font-normal rounded-lg text-slate-900 py-2 px-4 hover:bg-gray-200 transition duration-600' to='start-project'>Start Project</NavLink>
                </nav>
            </header>
        </div>
    );
}
