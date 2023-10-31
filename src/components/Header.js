import React from 'react'
import logo from '../utils/logo.png'
import DropdownButton from './Dropdown'
import { CgProfile } from 'react-icons/cg';
import profile from '../utils/p.png'

function Header() {
  return (
    <>
    <div className='w-screen h-32 bg-black flex items-center justify-center px-8 xs:px-2 xs:h-[4rem] border-b-4 border-gray-800 shadow-lg shadow-cyan-500/20' >
        <div className='w-screen h-1/2 bg-black flex items-center justify-between '>
                <img className='xs:[4rem] xs:h-[1.3rem]' src={logo} alt="logo" />
                <div className='w-1/4  flex items-center justify-evenly '>
                  <div className='xs:hidden'>
                    <DropdownButton name="Learn" />
                    <DropdownButton name="Practice" /> 
                  </div>
                    <img className='w-14 h-14 ml-6 xs:w-8 xs:h-8' src={profile} alt="photo" />
                </div>
                
        </div>
        
    </div>
 </>
  )
}

export default Header
