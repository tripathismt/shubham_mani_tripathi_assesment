import React from 'react'
import {useState} from 'react'

function Issue(props) {
   
  return (
    <div className='relative h-full xs:w-full'>
       <div className={`w-[22rem] ${props.login?"h-[30rem]":"h-[35rem]" } bg-[#F8F8F8] rounded-lg fixed right-7 bottom-[6rem] p-4  xs:bottom-0 xs:right-0 xs:w-full`}>
          <div className='pl-4 pr-4 pb-6 text-xl font-semibold text-center'>
            Let us know about the issue  you are facing right now!
          </div>
        
          <div className='w-3/4  h-1 bg-[#CCCCCC] m-auto'></div>

          <div className='flex flex-col'>
            <label className='w-full pt-3 pb-2' htmlFor="dropdownDefaultButton">Choose a section
            </label>  
            <div>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black
                bg-[#CCCCCC] w-full
              font-medium rounded-lg text-m px-5 py-2.5 text-center inline-flex items-center justify-between " type="button">Interview Questions <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>  
                    </ul>  
                </div>        
            </div>
          </div>

            <div className='relative'>
            <label for="message" className=" block mb-2 text-m font-medium text-gray-500 pt-4 ">Describe the issue in detail *</label>
            <textarea id="message" rows="4" className=" block p-2.5 w-full h-[10.5rem] text-m text-gray-900 bg-[#CCCCCC] rounded-lg border " placeholder="Write here..."></textarea>
            <div className='absolute bottom-3 left-4 bg-gray-400 rounded-m '>
                <button type="button" className="p-1 text-black rounded cursor-pointer  ">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                </svg>
                </button>
                <span className='pr-3'>Attach</span> 
            </div>

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

export default Issue
