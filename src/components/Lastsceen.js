import React from 'react'
import {useState} from 'react'

function Lastsceen(props) {
  return (
    <div className='relative h-full'>
       <div className={`w-[25rem] h-auto bg-[#F8F8F8] rounded-lg fixed right-7 bottom-[6rem] p-3`}>
        <div className='font-semibold text-center'>
        Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!
        </div>

        <div class="absolute bottom-0 right-[39px] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-indigo-500"></div>


    </div>
    </div>
    
  )
}

export default Lastsceen
