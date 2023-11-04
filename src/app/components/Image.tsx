'use client'

import React, { useState, useEffect } from 'react'
import image1 from '../../../public/reals running.gif';
import image2 from '../../../public/reals biker.gif';
import image3 from '../../../public/reals boxer.png';
import Image from 'next/image';


type Props = {}

const images = [image1, image2, image3]

const HeroImage = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='relative h-72 w-96 mx-auto'>
        {images.map((image,index)=>(
            <Image 
                src={image}
                key={index}
                className={`absolute w-full h-full transition-opacity duration-300 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                alt={`Image ${index}`}
            />
        ))}
    </div>
  )
}

export default HeroImage