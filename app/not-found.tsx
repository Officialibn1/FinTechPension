import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <section className='contactUsContainer h-[70vh] flex items-center bg-stone-200 justify-center'>
        <h1 className="text-3xl font-medium text-slate-800 text-center">
            Oppsss..  sorry this page is under construction 🚧 🚧. . .  <br /><br />
            <Link href={'/'} className=' text-green-400 font-light underline'>Go back Home</Link>
        </h1>
    </section>
  )
}

export default NotFoundPage