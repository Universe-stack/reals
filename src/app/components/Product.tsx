import React,{useEffect,useState} from 'react'
import Mockup from '../../../public/apple-macbook-pro-6306818_1280.png'
import Image from 'next/image';
import DB1 from '../../../public/HT-1.png';
import DB2 from '../../../public/HT-2.png'

const Product = () => {

    const images = [DB1, DB2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        // Calculate when to change the image (e.g., based on scroll position)
        if (window.scrollY >= 300) {
          setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
          );
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [images.length]);


  return (
    <div className='flex flex-col gap-[4rem] w-full justify-center my-[3rem]'>
        <h2 className='text-center text-3xl '>All your needs met in <br/> one place</h2>
        <div className=' flex self-center justify-between w-[80%] gap-6 h-[25rem]'> 
            <div className='relative self-start'>
            {images.map((image, index) => (
          <Image
            width={100}
            height={100}
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`w-full h-full absolute top-0 left-0 transform transition-transform duration-500 ease-in-out ${
              index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          />))}
                <Image src={Mockup} alt='mockup-laptop' height={500} width={500}/>
            </div>
            <div className='self-start py-4 h-[100%] overflow-y-scroll scrollbar-width-thin '>
                <ul className='flex flex-col gap-[2.5rem] px-[0.2rem]'>
                    <li>
                        
                        <h3 className='font-bold text-xl py-3 flex gap-3'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="#A9B2C8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>
</span>Push notifications</h3>
                        <p className='text-sm'>metadata.metadataBase is not set for resolving social open graph or twitter images, using localhost:3000</p>
                    </li>

                    <li>
                        <h3 className='font-bold text-xl py-3 flex gap-3'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="#A9B2C8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
</span> Grow with friends</h3>
                        <p className='text-sm'>metadatametadataBase is not set for resolving social open graph or twitter images, using localhost:3000</p>
                    </li>

                    <li>
                        <h3 className='font-bold text-xl py-3 flex gap-3'><span><svg xmlns="http://www.w3.org/2000/svg" fill="#A9B2C8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</span> Share your progress</h3>
                        <p className='text-sm'>metadatametadataBase is not set for resolving social open graph or twitter images, using localhost:3000</p>
                    </li>

                    <li>
                        <h3 className='font-bold text-xl py-3 flex gap-3'><span><svg xmlns="http://www.w3.org/2000/svg" fill="#A9B2C8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span> Build to Earn</h3>
                        <p className='text-sm'>metadatametadataBase is not set for resolving social open graph or twitter images, using localhost:3000</p>
                    </li>

                    <li>
                        <h3 className='font-bold text-xl py-3 flex gap-3'><span><svg xmlns="http://www.w3.org/2000/svg" fill="#A9B2C8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
</span> Challenge your peers</h3>
                        <p className='text-sm'>metadatametadataBase is not set for resolving social open graph or twitter images, using localhost:3000</p>
                    </li>

                    <li>
                        <h3 className='font-bold text-xl py-3 flex gap-3'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="#A9B2C8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
</svg>
</span> Track your growth</h3>
                        <p className='text-sm'>metadatametadataBase is not set for resolving social open graph or twitter images, using localhost:3000</p>
                    </li>

                    <li>
                        <h3 className='font-bold text-xl py-3 flex gap-3'><span><svg xmlns="http://www.w3.org/2000/svg" fill="#A9B2C8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>
</span> Get access to coaches</h3>
                        <p className='text-sm'>metadata.metadataBase is not set for resolving social open graph or twitter images, using </p>
                    </li>


                </ul>
            </div>
        </div>
    </div>
  )
}

export default Product