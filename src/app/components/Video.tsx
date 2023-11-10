'use client'

import React from 'react'
import Youtube from './Youtube' 
import img101 from '../../../public/101.png';
import img103 from '../../../public/103.png';
import pathimg from '../../../public/path.png'
import Image from 'next/image';

type Props = {}

const Video = (props: Props) => {
  return (
    <div className='flex flex-col relative gap-[4rem] w-full justify-center py-[100px]'>
        <span className='absolute top-5'>
            <Image
                    width={200}
                    height={200}
                    src={img101}
                    alt={'first doodle'}
                    className=' '
                  />
        </span>

        <span className='absolute right-[10%] bottom-[10%]'>
            <Image
                    width={200}
                    height={200}
                    src={img103}
                    alt={'second doodle'}
                    className=' '
                  />
        </span>

        <span className='absolute left-[15%] z-10 bottom-[10%]'>
            <Image
                    width={200}
                    height={200}
                    src={pathimg}
                    alt={'third doodle'}
                    className=' '
                  />
        </span>

        <h1 className= 'text-center font-[700] text-5xl m-0'> 
            Let us show you around..
        </h1>

        <div className='self-center z-50'>
            <Youtube />
        </div>
    </div>
  )
}

export default Video