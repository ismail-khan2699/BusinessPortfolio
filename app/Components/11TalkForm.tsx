import React from 'react'

function TalkForm() {
  return (
    <div className=' TalkFormC' style={{width:'100%', display:'block', fontFamily:'Montserrat, sans-serif'}} >
      <div className='flex justify-between py-20 w-full pl-20'>
        <div className=' w-5/12'>
          <p className=' p-0 m-0'>Let’s talk about your project</p>
          <h3 className=' text-sm text-gray-600 pt-4 w-2/3'>Do you have a project in mind, that you feel our approach would work well for? <br /><br />
We’re always happy to discuss your project with you and put together a free proposal.</h3>
        </div>
        <div className=' w-7/12'>
          <div className=' bg-white rounded-xl mr-10 p-20' style={{height:'700px', minWidth:'500px'}}>
            <h2 className=' font-semibold text-lg'> Just fill out the form below  to get started.</h2>
            <form action="Message" className='flex flex-col mt-3'>
             <input type="text" className='w-full border-2 h-12 rounded-lg p-2 m-2' placeholder="Name"/>
             <input type="email" className='w-full border-2 h-12 rounded-lg p-2 m-2' placeholder="Email"/>
             <input type="text" className='w-full border-2 h-12 rounded-lg p-2 m-2' placeholder="Company"/>
             <input type="tel" className='w-full border-2 h-12 rounded-lg p-2 m-2' placeholder="Phone No."/>
             <div className="flex items-center w-full border-2 h-12 rounded-lg p-2 m-2 relative">
                  <label htmlFor="brief" className="text-sm w-full">Send us your brief:</label>
                  <input type="file" className='' id="brief" style={{ color: 'transparent' }}/>
             </div>
             <textarea className='w-full border-2 h-24 rounded-lg p-2 m-2' placeholder="Message"></textarea>
             <div className="flex items-center">
              <input type="checkbox" id="agreeCheckbox" className="m-2"/>
              <label htmlFor="agreeCheckbox" className=' text-sm'>I agree to have my information stored in <span className=' text-orange-500'>Privacy Policy</span>.</label>
             </div>
             <button type="submit" className="w-full py-2 rounded-lg mt-4 ml-2" style={{ background: 'linear-gradient(103.22deg, #5B53F9 0%, #AC71D6 40.58%, #FF8E57 101.45%)', color: 'white' }}>Submit</button>
</form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TalkForm