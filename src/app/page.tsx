'use client'

import React from 'react'
import Image from 'next/image';
import HeroImage from './components/Image';
import Brands from './components/Brands';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Video from './components/Video';
import Community from './components/Community'


export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center">
      <div className=' Home-inner flex flex-col justify-center align-middle w-[80%] self-center py-[100px]'>
        <div className='HeroPage flex justify-evenly align-middle gap-6 w-[100%] self-center'>
          <div className='HeroText w-[50%]'>
            <h1 className='text-5xl mt-10 font-[900]'>Increase your<br></br> fxn productivity today!</h1>
            <p className='text-lg mt-5'> Start by making yourself a daily dose of motivation,go for a walk and listen to Burna boy!</p>
            <p className='text-lg font-medium'> Wondering where to start? 👇</p>
          </div>
          <div className='HeroImg w-[50%]'><HeroImage/></div>
        </div>
        <div className='buttons mt-12 self-center flex gap-4 w-[100%]'>
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white text-lg py-4 px-4 rounded-full transition">Start here 🌻</button>
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white text-lg py-4 px-4 rounded-full transition"> Go to dashboard </button>
        </div>
      </div>
      <Brands />
      <Product />
      <Stats />
      <Testimonials />
      <Video />
      <Community />
    </main>
  )
}
