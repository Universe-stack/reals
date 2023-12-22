'use client'
import React from 'react';
import Form from './Form'


type Props = {}

const Drawer = (props: Props) => {
  return (
    <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex gap-2">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button bg-[#FFFFFF] border border-[#e7e6e6] text-[black]">
            add task
            <span className='self-center mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 self-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </span>    
        </label>
        
    </div> 
    <div className="drawer-side z-50">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-4 w-[25%] min-h-full bg-base-200 text-base-content z-50">
          <p className='pl-8 font-[600] text-[1.3rem] text-left mt-8'>Create goal</p>
          <p className='text-sm pl-8 mt-2'>Create goals that keep you going in strength</p>
          <Form />        
        </div>
    </div>
    </div>
  )
}

export default Drawer