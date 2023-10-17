import React from 'react'
import './styles/Insights.css'
import { insights } from '@/dummyData'
import Image from 'next/image'

const Insights = () => {
  return (
    <section className='insights'>
        <div className="insightsTitle">
            <h1>
                Business and industry insights
            </h1>

            <p>
                All the core of every successful enterprise lies a deep understanding of its industry and the broader business landscape
            </p>
        </div>

        <div className="insightCardContainer">
            {insights.map(insight => (
                <div className="insightCard" key={insight.id}>
                    <Image src={insight.image} width={400} height={300} quality={100} alt='insight image' />
                    
                    <h1>
                        {insight.title}
                    </h1>

                    <p>
                        {insight.desc}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Insights