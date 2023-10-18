import React from 'react'
import './styles/Footer.css'
import { GrTechnology } from 'react-icons/gr'

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
            
        </div>
    </footer>
  )
}

export default Footer