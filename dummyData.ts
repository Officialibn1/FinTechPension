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

// Type of insight cards
type Insight = {
    id: string,
    image: string,
    title: string,
    desc: string
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

export const insights: Insight[] = [
    {
        id: '1',
        image: 'https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4',
        title: 'Leveraging the work opportunity tax credit to bloster holiday ...',
        desc: 'As the holiday season is swiftly aproaching, retail establishments accross the United States are gearing up ... '
    }, 
    {
        id: '2',
        image: 'https://fastly.picsum.photos/id/856/4500/3112.jpg?hmac=VFr8pGzI1NbVoTha8W_Mw11pqEvh8OW5QXOAcZbGrBY',
        title: 'Managing director Johnada Peter Frarani featured as top 50 ...',
        desc: 'The healthcare consulting market is triving, charactarized by record-high transaction values and significant growth ...'
    },
    {
        id: '3',
        image: 'https://fastly.picsum.photos/id/513/4373/3280.jpg?hmac=LkZSEFr5H-jsaqmKTdANAlVWv6Zb38bDJxz5jQEyU0g',
        title: 'Unlocking the value potential in the southeast asian manufacturing',
        desc: 'With rising manufacturing investment opportunities in Southeast Asia, it is crutial to also note the challanges ...'
    }
]




