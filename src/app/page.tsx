'use client'

import React from 'react'
import Image from 'next/image';
import HeroImage from './components/Image';


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center w-full">
      <div className=' Home-inner flex flex-col w-[90%]'>
        <div className='HeroPage flex justify-evenly align-middle gap-6 w-[100%] self-center mt-[7rem]'>
          <div className='HeroText'>
            <h1 className='text-[2.5rem] font-extrabold mt-10'>Increase your<br></br> fxn productivity today!</h1>
            <p className='text-sm mt-5'> Start by making yourself a daily dose of motivation,go for a walk and listen to Burna boy!</p>
            <p className='text-sm font-medium'> Wondering where to start? 👇</p>
          </div>
          <div className='HeroImg'><HeroImage/></div>
        </div>
        <div className='buttons w-[84%] mt-12 self-center flex gap-4'>
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white text-lg py-2 px-4 rounded-full transition">Start here 🌻</button>
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white text-lg py-2 px-4 rounded-full transition"> Go to dashboard </button>
        </div>

      </div>
    </main>
  )
}
