import React from 'react'

function OurWrok() {
    const gradiant = {
        background: 'linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%)',
        height: '100px',
      };
      
  return (
    <div className=' w-full my-5 flex justify-center items-center overflow-hidden' style={gradiant}>
    <img src="/assets/amazonlogo.png" alt="logo" style={{height:'70px', marginLeft:'-25px'}} className='pt-3 ml-20 hover:scale-105'/>
        <img src="/assets/Austrian.png" alt="logo" style={{height:'70px', width:'250px'}} className='ml-20 hover:scale-105'/>
        <img src="/assets/amazonlogo.png" alt="logo" style={{height:'70px'}} className='pt-3 ml-20 hover:scale-105'/>
        <img src="/assets/Austrian.png" alt="logo" style={{height:'70px', width:'250px'}} className='ml-20 hover:scale-105'/>
        <img src="/assets/VectorAudio.png" alt="logo" style={{height:'70px'}} className=' ml-20 hover:scale-105'/>
        <img src="/assets/amazonlogo.png" alt="logo" style={{height:'70px'}} className='pt-3 ml-20 hover:scale-105'/>
        
    </div>
  )
}

export default OurWrok