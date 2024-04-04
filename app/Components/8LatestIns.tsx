import React from 'react'
import dynamic from 'next/dynamic';
const MyClientSideComponent = dynamic(() => import('./smallComponents/SlidePic'), { ssr: false });

function LatestIns() {
  return (
    <div className='w-full p-10' style={{ fontFamily: 'Montserrat, sans-serif' }}>
    <div className='flex justify-between items-end mb-2'>
      <div className='w-1/2'>
        <p className='p-0 m-0 text-black font-semibold'>Our Work</p>
        <h2 className='text-base text-gray-800 text-justify mt-4'>We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.</h2>
      </div>
      <div className='w-auto'>
        <a href='#' className='flexbox button ml-2 h-8' style={{ textDecoration: 'none' }}>
          <h3 className="text-white text-xs font-normal p-2">VIEW FULL PORTFOLIO</h3>
          <div style={{ height: '20px', width: '20px' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <MyClientSideComponent/>
  </div>
  
  )
}

export default LatestIns