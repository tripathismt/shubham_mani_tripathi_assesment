import React from 'react'

function Share(props) {
  return (
    <div className='relative xs:w-full'>
       <div className={`w-[22rem] ${props.login?"h-[25rem]":"h-[29rem]"} bg-[#F8F8F8] rounded-lg fixed right-7 bottom-[6rem] p-4 xs:w-full xs:bottom-0 xs:right-0`}>
          <div className='pl-4 pr-4 pb-6 text-xl font-semibold text-center'>
            Let us know your Feedback about us!
          </div>
        
          <div className='w-3/4  h-1 bg-[#CCCCCC] m-auto'></div>

            <div className='relative'>
            <label for="message" className=" block mb-2 text-m font-medium text-gray-500 pt-4 ">Describe the issue in detail *</label>
            <textarea id="message" rows="4" className=" block p-2.5 w-full h-[10rem] text-m text-gray-900 bg-[#CCCCCC]  border " placeholder="Write here..."></textarea>
            <div className='absolute bottom-3 left-4 bg-gray-400 rounded-m '>
                <button type="button" className="p-1 text-black rounded cursor-pointer  ">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                </svg>
                </button>
                <span className='pr-3'>Attach</span> 
            </div>
            </div>

            <div class={`flex items-center pt-2 mb-4 ${!props.login?"hidden":""}`}>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Send feedback anonymously</label>
        </div>

            <div className={`pt-3 ${props.login?"hidden":""}`}>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Enter your email to receive an update</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your Email" required />
        </div>

            <button type="button" class="px-4 py-[0.15rem] text-s font-medium text-center text-white bg-gray-500 rounded-[4px] absolute  right-4 bottom-6" onClick={props.submitfun}>Submit</button>

       </div>
    </div>
  )
}

export default Share
