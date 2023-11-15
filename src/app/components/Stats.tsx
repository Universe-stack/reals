'use client'

import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <div className="stats shadow gap-[4rem] w-full justify-center py-[100px]">
  
        <div className="stat place-items-center border-none">
            <div className="leading-[48px] tracking-[-.05em] font-[700] text-[48px]">31K</div>
            <div className="stat-title">Downloads</div>
            <div className="stat-desc">From January 1st to February 1st</div>
        </div>
        
        <div className="stat place-items-center border-none">
            <div className="stat-value text-secondary leading-[48px] tracking-[-.05em] font-[700] text-[48px]">4,200</div>
            <div className="stat-title">Users</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
        
        <div className="stat place-items-center border-none">
            <div className="stat-value leading-[48px] tracking-[-.05em] font-[700] text-[48px]">1,200</div>
            <div className="stat-title">New Registers</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
  
</div>
  )
}

export default Stats