import React from 'react'
import './styles/Footer.css'

import { FaSquareFacebook, FaXTwitter, FaLinkedin, FaGithubAlt } from "react-icons/fa6";

const FooterIcons = () => {
  return (
    <div className="footerIcons">
        <span>&copy; Copyright 2023 by Ibn</span>

        <div className="footerIconsSocials">

            <a href="/" target='_blank'>
                <FaSquareFacebook />
            </a>

            <a href="/" target='_blank'>
                <FaXTwitter />
            </a>

            <a href="/" target='_blank'>
                <FaLinkedin />
            </a>

            <a href="/" target='_blank'>
                <FaGithubAlt />
            </a>
            
        </div>
    </div>
  )
}

export default FooterIcons