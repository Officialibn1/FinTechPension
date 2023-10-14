import React from 'react'
import bgImage from '@/public/agency.jpeg'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
        <div className="headerText">
            <h1>
                Optimize strategies for challenging financial landscapes
            </h1>

            <p>
                Unlock success in turbulance markets. Tailored strategies to navigate and trive in challanging financial landscapes.
            </p>

            <div className="headerButtons">
                <button>Get Started</button>
                
                <button>Contact Us</button>
            </div>
        </div>

        <div className="headerImage">
            <div className="headerRates">
                <h1>72%</h1>
                <p>SCI Success Rate</p>
            </div>
            <div className="headerRates">
                <h1>31%</h1>
                <p>Dept Reduction Rate</p>
            </div>
            <Image src={bgImage} width={650} quality={100} alt='header image' />
        </div>

       
    </header>
  )
}

export default Header