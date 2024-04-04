import React from 'react'
import './LatestInsight.css'
import InsightCard from './smallComponents/InsightCard'

function LatestInsights() {
  return (
    <>
    <div  className=' h-auto relative'>
      <div id='rootInsight' className=' absolute -z-10  h-32'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-0'><path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
              </div>
        <div className=' z-10 pt-36 flex flex-col items-center'>
            <p className='  text-white'>LATEST INSIGHTS</p>
            <div className=' flex justify-center h-auto overflow-auto'>
            <InsightCard
              imgSrc="/assets/weLI1.png"
              heading="Website Accessibility And Why It Matters"
              paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque ...."
              date="25.01.2024"
              readMoreLink="#"
              />
            <InsightCard
              imgSrc="/assets/webLi2.png"
              heading="Website Accessibility And Why It Matters"
              paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque ...."
              date="25.01.2024"
              readMoreLink="#"
              />
            <InsightCard
              imgSrc="/assets/webLi3.png"
              heading="Website Accessibility And Why It Matters"
              paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatibus ea, ut sequi fugit impedit eveniet maiores, quas error atque ...."
              date="25.01.2024"
              readMoreLink="#"
              />
            </div>
        </div>
    
    </div>
    </>
  )
}

export default LatestInsights