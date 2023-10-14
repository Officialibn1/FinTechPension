import Link from 'next/link'
import React from 'react'
import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <GrTechnology />
            <span>FinTech</span>
        </div>

        <div className="navLinks">
            <ul>
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={'/about'}>About Us</Link></li>
                <li><Link href={'/services'}>Our Services</Link></li>
                <li><Link href={'/partners'}>Partners</Link></li>
            </ul>
        </div>

        <div className="contactUs">
            <button>Contact Us</button>
        </div>
    </nav>
  )
}

export default Navbar