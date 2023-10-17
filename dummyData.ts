// Type of advice for the advice sections
type Advice = {
    id: string,
    title: string,
    desc: string,
    link?: string
}

// Type of impact for the impact section
type Impact = {
    id: string,
    amount: number,
    text: string
}

// Impacts data
export const adviceCards: Advice[] = [
    {
        id: '1',
        title: 'Strategic Consulting Services',
        desc: 'Explore new horizons and achieve business excellence with our strategic consulting services.'
    },
    {
        id: '2',
        title: 'Company & Business Setup',
        desc: 'Lay a strong foundation for your entrepreneural dreams with our comprehensive business setup solutions.'
    },
    {
        id: '3',
        title: 'Acquisitions Finance Consulting',
        desc: 'We are providing strategic financial guidance, insightful due deligence and tailored solution to optimize your acquisition solution.'
    }, 
    {
        id: '4',
        title: 'Investment & Wealth Management',
        desc: 'Our seasoned advisors work closely with you to understand your unique financial objectives, risk tolerance and preferences.'
    }
]

export const impacts: Impact[] = [
    {
        id: '1',
        amount: 284,
        text: 'Employees'
    },
    {
        id: '2',
        amount: 42,
        text: 'Years'
    },
    {
        id: '3',
        amount: 38,
        text: 'Cities'
    },
    {
        id: '4',
        amount: 17,
        text: 'Countries'
    }
]

