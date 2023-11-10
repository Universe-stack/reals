import React from 'react';
import Image from 'next/image';
import Teens from '../../../public/reals teens.png';


const Community = () => {
  return (
    <div className='w-full flex flex-col justify-center align-middle py-[100px]  bg-gray-primary'>
        <div className='self-center p-[1rem] bg-white w-[60%] rounded-md flex gap-6'>
            <span className='w-[60%] flex flex-col align-middle gap-4 justify-center p-4'>
                <h3 className='text-4xl font-[700]'>Grow with our community!</h3>
                <p className='text-md pt-1'>A wolf that stays with the pack gets to live longer and grow fatter than one which stands alone</p>
                <button className='rounded-none p-[1.6rem] bg-blue-primary mt-[1rem]'> See More</button>
            </span>

            <span className='w-[500px] h-[400px] bg-black'>
            <Image
                width={500}
                height={500}
                src={Teens}
                alt={``}
                className='object-cover w-[100%] h-[100%]'
              />
            </span>
        </div>
    </div>
  )
}

export default Community