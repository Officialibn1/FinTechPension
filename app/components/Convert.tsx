import React from 'react'
import { GoVerified } from "react-icons/go";

const ConvertKnowledge = () => {
  return (
    <section className='convertKnowledge'>
        <div className="convertKnowledgeLeft">
            <h1>
                Converting knowledge into actionable plans
            </h1>

            <p>
                Understanding your concerns, we continiously thrive to pose thoughtful quaries and driving work improvements
            </p>
        </div>

        <div className="convertKnowledgeRight">
            <div className="tiles"><GoVerified /> Valuation Services</div>
            <div className="tiles"><GoVerified /> Deal Structuring</div>
            <div className="tiles"><GoVerified /> Development of Financial Models</div>
            <div className="tiles"><GoVerified /> Feasability Studies & Business Plans</div>
        </div>
    </section>
  )
}

export default ConvertKnowledge