'use client'

import React from 'react'
import teens from '../../../public/reals teens.png'
import Image from 'next/image'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div className='flex flex-col gap-[4rem] w-full justify-center bg-gray-primary py-[100px]'>
        <h2 className='text-center text-5xl font-[700] '>What our users say <br/> about us</h2>

        <div className=' self-center grid grid-cols-2 gap-6'>
            <div className="card w-96 bg-black text-primary-content">
                <div className="card-body">
                    <div className='flex flex-row-reverse justify-between' >
                        <div className="avatar">
                        <div className="w-[3rem] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={100} height={100} src={teens} alt="" />
                        </div>
                        </div>
                        <h2 className="card-title">Franka Onyeka</h2>                   
                    </div>
            
                    <p className='py-4'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn">Contact</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-black text-primary-content">
                <div className="card-body">
                    <div className='flex flex-row-reverse justify-between' >
                        <div className="avatar">
                        <div className="w-[3rem] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={100} height={100} src={teens} alt="" />
                        </div>
                        </div>
                        <h2 className="card-title">Franka Onyeka</h2>                   
                    </div>
            
                    <p className='py-4'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn">Contact</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-black text-primary-content">
                <div className="card-body">
                    <div className='flex flex-row-reverse justify-between' >
                        <div className="avatar">
                        <div className="w-[3rem] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={100} height={100} src={teens} alt="" />
                        </div>
                        </div>
                        <h2 className="card-title">Franka Onyeka</h2>                   
                    </div>
            
                    <p className='py-4'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn">Contact</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-black text-primary-content">
                <div className="card-body">
                    <div className='flex flex-row-reverse justify-between' >
                        <div className="avatar">
                        <div className="w-[3rem] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={100} height={100} src={teens} alt="" />
                        </div>
                        </div>
                        <h2 className="card-title">Franka Onyeka</h2>                   
                    </div>
            
                    <p className='py-4'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials