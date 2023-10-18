import React from 'react'

import './styles/ContactUs.css'

import { GoMail } from 'react-icons/go'

import { IoCallOutline } from 'react-icons/io5'

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";



const ContactUs = () => {
  return (
    <section className='contactUsContainer' id='contactUs'>
        <div className="contactUsWrapper">
            {/* Contact us div */}
            <div className="contactUsLinks">
                <h1>Contact Us</h1>

                {/* Email container */}
                <div className="contactUsCard">
                    <GoMail />

                    <div className="contactUsCardText">
                        <a href='mailto:officialibn001@gmail.com'>
                            officialibn001@gmail.com
                        </a>
                        <p>
                            Mon - Fri : 10AM - 5PM ESt
                        </p>
                    </div>
                </div>

                {/* Phone container */}
                <div className="contactUsCard">
                    <IoCallOutline />

                    <div className="contactUsCardText">
                        <a href='tell:+2349038880282'>
                            +234 903 888 0282
                        </a>
                        <p>
                            Mon - Fri : 10AM - 5PM ESt
                        </p>
                    </div>
                </div>
                
                {/* Office container */}
                <div className="contactUsCard">
                    <HiOutlineBuildingOffice2 />

                    <div className="contactUsCardText">
                        <a href='tell:+2349038880282'>
                            +234 906 720 2841
                        </a>
                        <p>
                            Mon - Fri : 10AM - 5PM ESt
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact form container */}
            <div className="contactForm">
                <form>
                    {/* Input One (Name Input) */}
                    <div className="inputContainer">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id='fullName' placeholder='Enter your full name' />
                    </div>

                    {/* Input Two (Email Input) */}
                    <div className="inputContainer">
                        <label htmlFor="emailAddress">Email Address</label>
                        <input type='email' id='emailAddress' placeholder='Enter your email address' />
                    </div>

                    {/* Input three (company name input) */}
                    <div className="inputContainer">
                        <label htmlFor="companyName">Company/Organization Name</label>
                        <input type="text" id='companyName' placeholder='Enter your company/organization name' />
                    </div>

                    {/* Input four (Type your message here) */}
                    <div className="inputContainer">
                        <label htmlFor="message">Message</label>
                        <textarea id='message' placeholder='Enter your message' />

                    </div>

                    <button>
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUs