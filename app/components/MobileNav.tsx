'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        // showNav ? setShowNav(false) : setShowNav(true)
        setShowNav(prev => !prev)
    }


  return (
    <div className='mobileNavbarContainer'>
        <div className={`mobileNavbar ${showNav ? 'right-0' : ' -right-96'}`}>
            <ul>
                <li><Link onClick={() => setShowNav(false)} href={`/`}>Home</Link></li>
                <li><Link onClick={() => setShowNav(false)} href={'/about'}>About Us</Link></li>
                <li><Link onClick={() => setShowNav(false)} href={'/services'}>Our Services</Link></li>
                <li><Link onClick={() => setShowNav(false)} href={'/partners'}>Partners</Link></li>
                <li>
                <div className="mobileContactUs">
                    <button>Contact Us</button>
                </div>
                </li>
            </ul>
        </div>

        <span className='mobileNavBtn md:hidden z-20' >
            <label className="btn btn-circle swap swap-rotate" >
                
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onClick={toggleNav} />
                
                {/* hamburger icon */}
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                
                {/* close icon */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                
                </label>
        </span>
    </div>
  )
}

export default MobileNav
