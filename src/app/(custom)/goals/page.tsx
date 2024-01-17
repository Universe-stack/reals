"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import Drawer from '@/app/components/UI/Drawer';
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';
import { db } from "@/firebase/initFirebase"


interface HabitFormData {
  date: Date;
  habitName: string;
  description: string;
  completed: boolean;
  rewardPoints: number;
  status: string;
  assignedTo: string;
  time: Date | null;
  tasks:[];
  startLevel:number;
  currentLevel:number;
  totalLevel:number;
}

async function getGoalData():Promise<HabitFormData | null | boolean | any>{
  try{
    const querySnapshot = await getDocs(collection(db, "goal"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    return querySnapshot;
  }
  catch(e){
    console.log('request failed',e)
    return false
  }
}




const Goals = () => {

  const [data,setData] = useState({})

  useEffect(()=>{
    getGoalData()
      .then(result => {console.log(result,'result')})
      .catch(error=>(console.log(error, 'error fetching data from firestore')))
  }, [])

  return (
    <div className='bg-[rgb(250,250,251)] min-h-screen w-full flex justify-between align-middle text-[#3F3F46]'>
      <div className=' py-[2.06rem] w-[92%] ml-[2.5%] h-full flex flex-col justify-center text-[#3F3F46] gap-[1.81rem]'>
        <div className='flex justify-between'>
          <div className='flex justify-start align-middle gap-4'>
            <span className='self-center'>
            <input type="text" placeholder="Search goals" className="input input-bordered w-full max-w-xs h-[2.4rem]" />
            </span>
            <span className=''>
              <ul className='flex gap-3'>
                <li className=''>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="flex self-center py-[0.5rem] px-[0.7rem] m-1 gap-1 font-[500]"> Owner <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                      </span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Item 1</a></li>
                      <li><a>Item 2</a></li>
                    </ul>
                  </div>
                </li>

                <li className=''>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="flex self-center py-[0.5rem] px-[0.7rem] gap-1 m-1 font-[500]">Completion <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                      </span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Item 1</a></li>
                      <li><a>Item 2</a></li>
                    </ul>
                  </div>
                </li>

                <li className=''>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="flex self-center py-[0.5rem] px-[0.7rem] gap-1 m-1 font-[500]">Status <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                      </span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Item 1</a></li>
                      <li><a>Item 2</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </span>
          </div>

          <div className=''>
            <Drawer />
          </div>
        </div>

        <div className=' grid grid-cols-3 gap-3'>
  
          <Link href={`/goals/${1}`}>
          <div className='bg-[#FFFFFF] border border-[#e7e6e6] rounded-[0.625rem] p-[0.625rem] flex flex-col gap-3'>
            <span className='flex gap-1 align-middle'>
              <span className='self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </span>
              <p className='font-[500]'>Goal 1</p>
            </span>
            <span className='flex gap-2 align-middle'>
              <progress className="progress w-[83%] self-center z-0" value="70" max="100"></progress>
              <p>20/25</p>
            </span>

            <div className='flex gap-2'>
              <div className='flex gap-1 align-middle bg-[#FFFFFF] py-[0.35rem] px-[0.45rem] rounded-[0.353rem] border border-[#e7e6e6]'>
                <span className='self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 self-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className='text-sm self-center'>paid</p>
              </div>
              <div className='flex gap-1 align-middle bg-[#FFFFFF] py-[0.35rem] px-[0.45rem] rounded-[0.353rem] border border-[#e7e6e6]'>
                <span className='self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 self-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <p text-sm self-center>Joan</p>
              </div> 
            </div>
            
            <div className='flex justify-between'>
              <div className='flex gap-1 align-middle'>
                <span className='self-center'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 self-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </span>

                <p className='text-sm self-center mt-1'> Joan.</p>
              </div>

              <span className='flex gap-1 '>
                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className ="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                  </span>
                  <p className='text-sm'> 4 hours ago</p>
              </span>
            </div>
          </div>
          </Link>

          <div className='bg-[#FFFFFF] border border-[#e7e6e6] rounded-[0.625rem] p-[0.625rem] flex flex-col gap-3'>
            <span className='flex gap-1 align-middle'>
              <span className='self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </span>
              <p className='font-[500]'>Goal 1</p>
            </span>
            <span className='flex gap-2 align-middle'>
              <progress className="progress w-[83%] self-center z-0" value="70" max="100"></progress>
              <p>20/25</p>
            </span>

            <div className='flex gap-2'>
              <div className='flex gap-1 align-middle bg-[#FFFFFF] py-[0.35rem] px-[0.45rem] rounded-[0.353rem] border border-[#e7e6e6]'>
                <span className='self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 self-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className='text-sm self-center'>paid</p>
              </div>
              <div className='flex gap-1 align-middle bg-[#FFFFFF] py-[0.35rem] px-[0.45rem] rounded-[0.353rem] border border-[#e7e6e6]'>
                <span className='self-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 self-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <p text-sm self-center>Joan</p>
              </div> 
            </div>
            
            <div className='flex justify-between'>
              <div className='flex gap-1 align-middle'>
                <span className='self-center'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 self-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </span>

                <p className='text-sm self-center mt-1'> Joan.</p>
              </div>

              <span className='flex gap-1 '>
                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className ="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                  </span>
                  <p className='text-sm'> 4 hours ago</p>
              </span>
            </div>
          </div>

        </div>  
      </div>
    </div>
  )
}

export default Goals