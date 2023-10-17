import React from 'react'
import './styles/Impact.css'
import { impacts } from '@/dummyData'

const Impact = () => {
  return (
    <section className='impactContainer'>
        
        <div className="impact">
            <h1>Worldwide Impact, Hometown Heart</h1>

            <div className="impactRates">
                {impacts.map(item => (
                    <div className="impactRate" key={item.id}>
                        <h1>{item.amount}</h1>

                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Impact