import React from 'react'

function Queries(props) {
  return (
    <div className='relative h-full xs:w-full '>
       <div className={`w-[22rem] ${props.login?"h-[27rem]":"h-[37rem]"} bg-[#F8F8F8] rounded-lg fixed right-7 bottom-[6rem] p-4 xs:w-full xs:bottom-0 xs:right-0`}>
          <div className='pl-4 pr-4 pb-6 text-xl font-semibold text-center'>
            Let us know what your queries are!
          </div>
        
          <div className='w-3/4  h-1 bg-[#CCCCCC] m-auto'></div>

        <div className='flex flex-col'>
            <label className='w-full pt-3 pb-2' htmlFor="dropdownDefaultButton">Your Name *
            </label>  
            <div>
            <input type="text" id="first_name" class="bg-[#CCCCCC] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 " placeholder="Enter your Name" required />  
              
            </div>
            
          </div>
          <div className={`flex flex-col ${props.login?"hidden":""}`}>
            <label className='w-full pt-3 pb-2' htmlFor="dropdownDefaultButton">Your Email *
            </label>  
            <div>
            <input type="text" id="first_name" class="bg-[#CCCCCC] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 " placeholder="Enter your Name" required />  
              
            </div>
            
          </div>
          <div className={`flex flex-col ${props.login?"hidden":""}`}>
            <label className='w-full pt-3 pb-2' htmlFor="dropdownDefaultButton">Your Mobile number
            </label>  
            <div>
            <input type="text" id="first_name" class="bg-[#CCCCCC] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 " placeholder="Enter your Name" required />  
              
            </div>
            
          </div>

            <div className='relative'>
            <label for="message" className=" block mb-2 text-m font-medium text-gray-500 pt-4 ">What would you like to ask? *</label>
            <textarea id="message" rows="4" className=" block p-2.5 w-full h-[7rem] text-m text-gray-900 bg-[#CCCCCC]  border rounded-lg" placeholder="Write here..."></textarea>
            
            </div>
         
            <button type="button" class="px-4 py-[0.15rem] text-s font-medium text-center text-white bg-gray-500 rounded-[4px] absolute  right-4 bottom-6" onClick={props.submitfun} >Submit</button>

       </div>
    </div>
  )
}

export default Queries
