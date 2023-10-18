import React from 'react'
import './styles/Footer.css'
import { GrTechnology } from 'react-icons/gr'
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>

        {/* Heading text for the footer section */}
        <div className="footerHeading">
            {/* Footer Logo */}
            <div className="logo">
                <GrTechnology />
                <span>FinTech</span>
            </div>

            <h2>
                Optimize strategies for challenging financial landscapes
            </h2>
        </div>

        {/* The links in the footer section */}
        <div className="footerLinks">
            
            {/* Link Group One */}
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>About Us</Link></li>
                <li><Link href={'/'}>Partners</Link></li>
            </ul>
            
            {/* Link Group Two */}
            <ul>
                <li><Link href={'/#services'}>Our Services</Link></li>
                <li><Link href={'/#contactUs'}>Contact Us</Link></li>
                <li><Link href={'/'}>Partners</Link></li>
            </ul>
            
            {/* Link Group Three */}
            <ul>
                <li><Link href={'/'}>Insights</Link></li>
                <li><Link href={'/'}>Careers</Link></li>
                <li><Link href={'/'}>Terms Of Use</Link></li>
            </ul>
            
            {/* Link Group Four */}
            <ul>
                <li><Link href={'/'}>Jobs</Link></li>
                <li><Link href={'/'}>Legal</Link></li>
                <li><Link href={'/'}>Privacy</Link></li>
            </ul>

            <div className="newsLetter">
                <h3>
                    Stay informed with our newsletter
                </h3>

                <div className="inputWrapper">
                    <input type="email" name="newsEmail" id="newsEmail" placeholder='Your Email Address' />
                    <span><FaAngleRight /></span>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer