import React from 'react'
import './ChoseUs.css';
import Cards from './smallComponents/SimpleCard';


function ChoseUs() {
  return (
    <div className=' h-auto w-full mt-20'>
    <div className='curve-top h-96  flex  flex-col justify-center items-center'>
      <h2 className=' text-2xl font-bold mb-6 z-10'>Why Choose Us</h2>
      <div className='w-full flex justify-center'>
      <Cards imgSrc="/assets/gesture.png" heading="Take Control of Your Entire Marketing Landscape" paragraph="We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires." />
      <Cards imgSrc="/assets/globe.png" heading="Your Business's Dedicated Marketing Wing" paragraph="Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge." />
      <Cards imgSrc="/assets/chat.png" heading="A Reliable Collaborator" paragraph="Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand." />

      </div>
    </div>
  </div>  
  )
}

export default ChoseUs