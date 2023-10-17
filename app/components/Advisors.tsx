import { adviceCards } from '@/dummyData'
import React from 'react'
import './styles/Advisors.css';
import { AiOutlineDoubleRight } from "react-icons/ai";


const FinancialAdvisors = () => {
  return (
    <section className='financialAdvisors'>
        <div className="advisorsText">
            <h1>
                Making the most of our financial advisors&apos; real-world know-how.
            </h1>

            <p>
                Maximize your financial potential with our advisors who bring real-world expertise to the table. We&apos;re committed to leveraging their extensive knowledge to guide you towards success and security.
            </p>
        </div>

        <div className="advisorsCardsContainer">
            {adviceCards.map(card => (
                <div className="acvisorsCard" key={card.id}>
                    <h1>
                        {card.title}
                    </h1>

                    <p>
                        {card.desc}
                    </p>

                    <button>
                        <AiOutlineDoubleRight />
                    </button>
                </div>
            ))}
        </div>

    </section>
  )
}

export default FinancialAdvisors