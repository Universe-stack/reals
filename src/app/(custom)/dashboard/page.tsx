import React,{Suspense} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sunset from '../../../../public/reals sunset.png';
import Chart from '../../components/Chart';

function ChartFallback() {
  return <p>Chart loading...</p>
}
const Dashboard = () => {
  return (
    <div className='bg-[#FAFAFB] min-h-screen w-full text-center flex justify-between align-middle text-[#3F3F46]'>
      <div className=' py-[2.06rem] w-[92%] ml-[2.5%] h-full flex flex-col justify-center text-[#3F3F46] gap-[1.81rem]'>
        <div className='flex flex-col gap-[2rem]'>
          <span className='flex gap-3'><p className='font-[700] text-[#18181B] text-[1rem] leading-6'>Hey Neils -</p> <p className='text-[1rem] font-[400] leading-6 text-[#71717A]'> How are you doing today?</p></span>
          <span className=' flex gap-[1.75rem]'>
            <div className='p-[0.94rem] rounded-[0.625rem] flex flex-col gap-[0.6875rem] bg-white w-[17.437rem] border border-[#E4E4E7]'>
              <p className='text-[#71717A] text-[0.69rem] font-[500] leading-[1.125rem] tracking-[0.0625rem] text-start'>TODAYS INCOME</p>

              <span className='flex flex-row justify-between align-middle'>
                <p className=' text-left text-[#18181B] leading-[2rem] text-[1.3125rem] font-[700]'>$54</p>
                <p className='text-right text-[#22C55E] font-[500] text-[0.8125rem] leading-[1.32rem] flex mt-2'> +36%<span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </p>
              </span>
            </div>

            <div className='p-[0.94rem] rounded-[0.625rem] flex flex-col gap-[0.6875rem] bg-white w-[17.437rem] border border-[#E4E4E7]'>
              <p className='text-[#71717A] text-[0.69rem] font-[500] leading-[1.125rem] tracking-[0.0625rem] text-start'>TOTAL INCOME</p>

              <span className='flex flex-row justify-between align-middle'>
                <p className=' text-left text-[#18181B] leading-[2rem] text-[1.3125rem] font-[700]'>$1,124</p>
                <p className='text-right text-[#22C55E] font-[500] text-[0.8125rem] leading-[1.32rem] flex mt-2'> +36%<span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </p>
              </span>
            </div>

            <div className='p-[0.94rem] rounded-[0.625rem] flex flex-col gap-[0.6875rem] bg-white w-[17.437rem] border border-[#E4E4E7]'>
              <p className='text-[#71717A] text-[0.69rem] font-[500] leading-[1.125rem] tracking-[0.0625rem] text-start'>TASKS REMAINING</p>

              <span className='flex flex-row justify-between align-middle'>
                <p className=' text-left text-[#18181B] leading-[2rem] text-[1.3125rem] font-[700]'>4</p>
                <p className='text-right text-[#22C55E] font-[500] text-[0.8125rem] leading-[1.32rem] flex mt-2'> +43%<span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </p>
              </span>
            </div>

            <div className='p-[0.94rem] rounded-[0.625rem] flex flex-col gap-[0.6875rem] bg-white w-[17.437rem] border border-[#E4E4E7]'>
              <p className='text-[#71717A] text-[0.69rem] font-[500] leading-[1.125rem] tracking-[0.0625rem] text-start'>TASKS COMPLETED</p>

              <span className='flex flex-row justify-between align-middle'>
                <p className=' text-left text-[#18181B] leading-[2rem] text-[1.3125rem] font-[700]'>32</p>
                <p className='text-right text-[#22C55E] font-[500] text-[0.8125rem] leading-[1.32rem] flex mt-2'> 896%<span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </p>
              </span>
            </div>
          </span>
        </div>

        <div className='flex gap-[1.94rem] w-full'>
          <div className=' flex flex-col gap-[1.81rem] w-[70%]'>
            <div className='w-[100%] h-[20.5rem] bg-[#FFFFFF] rounded-[0.625rem] border border-[#E4E4E7]'>
            <Suspense fallback={<ChartFallback />}>
              <Chart />
            </Suspense>
            </div>
 
            <div className='w-[100%] bg-[#FFFFFF] rounded-[0.625rem] border border-[#E4E4E7]'>
              <div className='w-full'>
                <span className='w-full py-[1.12rem] px-[1.56rem] flex justify-between'>
                  <span>
                    <p className='leading-6 font-[700] text-[#18181B] text-[1rem] text-left'> Schedule today</p>
                    <p className='mt-[0.25rem] text-[0.8125rem] leading-[1.375rem] font-[400] text-[#71717A]'>Lorem ipsum dolor sit amet, consectetur adipis.</p>
                  </span>

                  <span>
                   <Link href={"#"}>
                    <p className='flex cursor-pointer'> See all schedules <span className='mt-1.5'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                      <path d="M4.125 2.79167L7.33333 6L4.125 9.20834" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg></span>
                    </p>
                   </Link>
                  </span>
                </span>

                <div className='h-[15rem] overflow-scroll'>
                  <ul className=''>
                    <li className=''>
                      <div className='px-[1.56rem] py-[1.25rem] border border-[#E4E4E7] bg-[#FFF] flex justify-between align-middle gap-[10%]'>
                        <div className='px-[1rem] py-[0.425rem] rounded-[2.5rem] bg-[#DCFCE7] flex justify-center gap-2'> <span className='pt-[0.54rem]'><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#22C55E"/>
                          </svg>
                          </span><p className='text-[#14532D] text-[0.75rem] font-[500] leading-6'>Completed</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> Clear the bushes</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>7:00 PM</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> $2</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>13 feb 2023</p>
                        </div>
                        
                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> Office</p>
                        </div>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                      </div>

                      <div className='px-[1.56rem] py-[1.25rem] border border-[#E4E4E7] bg-[#FFF] flex justify-between align-middle gap-[10%]'>
                        <div className='px-[1rem] py-[0.425rem] rounded-[2.5rem] bg-[#FEE2E2] flex justify-center gap-2'> <span className='pt-[0.54rem]'><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#EF4444"/>
                          </svg>
                          </span><p className='text-[#7F1D1D] text-[0.75rem] font-[500] leading-6'>Cancelled</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> Clear the bushes</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>7:00 PM</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> $2</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>13 feb 2023</p>
                        </div>
                        
                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> Office</p>
                        </div>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                      </div>

                      <div className='px-[1.56rem] py-[1.25rem] border border-[#E4E4E7] bg-[#FFF] flex justify-between align-middle gap-[10%]'>
                        <div className='px-[1rem] py-[0.425rem] rounded-[2.5rem] bg-[#FEF9C3] flex justify-center gap-2'> <span className='pt-[0.54rem]'><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#FACC15"/>
                          </svg>
                          </span><p className='text-[#713F12] text-[0.75rem] font-[500] leading-6'>Pending</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> Take maria to class</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>7:00 PM</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> $1</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>13 feb 2023</p>
                        </div>
                        
                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> School</p>
                        </div>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                      </div>

                      <div className='px-[1.56rem] py-[1.25rem] border border-[#E4E4E7] bg-[#FFF] flex justify-between align-middle gap-[10%]'>
                        <div className='px-[1rem] py-[0.425rem] rounded-[2.5rem] bg-[#DCFCE7] flex justify-center gap-2'> <span className='pt-[0.54rem]'><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#22C55E"/>
                          </svg>
                          </span><p className='text-[#14532D] text-[0.75rem] font-[500] leading-6'>Completed</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> Clear the bushes</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>7:00 PM</p>
                        </div>

                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> $2</p>
                          <p className='font-[500] text-[0.75rem] text-[#71717A]'>13 feb 2023</p>
                        </div>
                        
                        <div className='text-left'>
                          <p className='font-[700] text-[0.8125rem]'> Office</p>
                        </div>

                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[30%] flex flex-col gap-[1.81rem]'>
            <div className='bg-[#FFFFFF] w-[100%] h-[20.5rem] rounded-[0.625rem] p-[1.69rem] border border-[#E4E4E7]'>

            </div>

            <div className='h-[20.5rem] overflow-scroll bg-[#FFFFFF] w-[100%] rounded-[0.625rem] p-[1.12rem] border border-[#E4E4E7]'>
                  <span>
                    <p className='leading-6 font-[700] text-[#18181B] text-[1rem] text-left'> Leaderboard</p>
                    <p className='mt-[0.25rem] text-[0.8125rem] leading-[1.375rem] font-[400] text-left text-[#71717A]'>See how your friends are doing.</p>
                  </span>

                  <div className='mt-[1.81rem] '>
                    <ul className='flex flex-col gap-[1.35rem]'>
                      
                      <li className='flex justify-between align-middle'>
                        <div className='flex justify-center align-middle gap-2'>
                          <div className='w-[2.15rem] h-[2.15rem] rounded-full mt-1'>
                            <Image src={sunset} width={100} height={100} className='cover w-[100%] h-[100%] rounded-full' alt=''/>
                          </div>
                          <div className=''>
                            <p className='text-[0.812rem] font-[700] text-[#18181B] leading-[1.375rem] text-left'>Jerry Lawlins</p>
                            <p className='text-[0.8125rem] text-[#18181B] font-[400] leading-[1.375rem] text-left'>@jking112</p>
                          </div>
                        </div>

                        <div className=''>
                          <p className='text-[#18181B] text-[0.8125rem] font-[500] leading-[1.3125rem] text-right'>$123</p>
                          <p className=' text-[0.8125rem] text-[#71717A] font-[400] leading-[1.375rem] text-right'>25/25</p>
                        </div>
                      </li>

                      <li className='flex justify-between align-middle'>
                        <div className='flex justify-center align-middle gap-2'>
                          <div className='w-[2.15rem] h-[2.15rem] rounded-full mt-1'>
                            <Image src={sunset} width={100} height={100} className='cover w-[100%] h-[100%] rounded-full' alt=''/>
                          </div>
                          <div className=''>
                            <p className='text-[0.812rem] font-[700] text-[#18181B] leading-[1.375rem] text-left'>Adaora madueke</p>
                            <p className='text-[0.8125rem] text-[#18181B] font-[400] leading-[1.375rem] text-left'>@madum2</p>
                          </div>
                        </div>

                        <div className=''>
                          <p className='text-[#18181B] text-[0.8125rem] font-[500] leading-[1.3125rem] text-right'>$104</p>
                          <p className=' text-[0.8125rem] text-[#71717A] font-[400] leading-[1.375rem] text-right'>22/25</p>
                        </div>
                      </li>

                      <li className='flex justify-between align-middle'>
                        <div className='flex justify-center align-middle gap-2'>
                          <div className='w-[2.15rem] h-[2.15rem] rounded-full mt-1'>
                            <Image src={sunset} width={100} height={100} className='cover w-[100%] h-[100%] rounded-full' alt=''/>
                          </div>
                          <div className=''>
                            <p className='text-[0.812rem] font-[700] text-[#18181B] leading-[1.375rem] text-left'>Jerry Lawlins junior</p>
                            <p className='text-[0.8125rem] text-[#18181B] font-[400] leading-[1.375rem] text-left'>@jkingjr112</p>
                          </div>
                        </div>

                        <div className=''>
                          <p className='text-[#18181B] text-[0.8125rem] font-[500] leading-[1.3125rem] text-right'>$93</p>
                          <p className=' text-[0.8125rem] text-[#71717A] font-[400] leading-[1.375rem] text-right'>15/25</p>
                        </div>
                      </li>
                    </ul>
                  </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard