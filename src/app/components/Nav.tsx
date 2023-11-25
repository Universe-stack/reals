//'use client'

import React from 'react';
import Image from "next/image"
import Link from "next/link"
import pic from "../../../public/reals standing.png";
import logo from "../../../public/logo.png";
import Search from './Search';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className='w-full flex justify-center align-middle h-[3.8125rem] shadow-[0px 1px 0px 0px rgba(18, 32, 59, 0.09)] p-[0.63rem]'>
           <div className=' self-center mx-[2.5rem] w-[100%] flex justify-between align-middle gap-4 mt-[1rem]'>
                    <div className=" self-start w-[10%] flex text-center align-middle gap-2">
                        <Image
                            src={logo}
                            alt="logo"
                        />
                        <p className="pt-2 font-mono font-extrabold">reals</p>
                    </div>

                    <div className='w-[80%] flex gap-[9.87px] justify-between'>
                        <div className='w-[65%]'><Search placeholder="Search tasks..."/></div>
                        <div className=' w-[15%] flex gap-[14%] '>
                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary bg-blue-600 border-none mt-2">99+</span> 
                                <button className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </button>
                            </div>

                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary mt-2 rounded-full">3+</span> 
                                <button className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>
                            </div>


                                <div className="avatar">
                                    <div className="w-[2.2rem] h-[2.2rem] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <Image
                                            src={pic}
                                            alt="pic"
                                            width={100}
                                            height={100}
                                            className='w-[100%] h-[100%] object-cover'
                                        />
                                    </div>
                                </div>
                                 </div>
                    </div>
           </div>
    </nav>
  )
}

export default Nav