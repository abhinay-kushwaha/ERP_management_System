import React from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import shantilogo from '../src/assets/shantilogo.png';
import motu from '../src/assets/motu.webp';

import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineDevices } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


 const Header = () => {
  return(
    <>
    <header>
    <div className='flex justify-between items-center h-14 bg-[#031130] ' >
      <div  className=' flex justify-center items-center m-2'>
        <img src="https://shantiinfosoft.com/images/footer-logo.svg" alt='logo' className='h-10 w-full' />
      </div>
      <div className='flex text-white' >
          <div className='hidden sm:flex sm:justify-center sm:items-center '>
          <div> <IoIosHelpCircleOutline className='text-xl' />  </div>
          <div className='text-l border-white border-r-2 p-3' >Help</div> 
          <div><p className=' '></p></div>
          </div>
          {/* <div className='helpl'>|</div> */}
          <div className='flex  justify-center items-center m-2' > 
          <div> <img src={motu} alt='logo' className='w-10 rounded-full ' /> </div>
           <div className=' m-1 ' ><label className='font-serif' >Abhi</label></div>
             <div>
             <select className='w-4 bg-transparent m-2' > 
                <option className='text-white bg-[#031330] border-2 font-normal text-xs m-5' >My Details</option>
                <option className='text-white bg-[#031330] border-2 font-normal text-xs m-5' >Change Password</option>
                <option className='text-white bg-[#031330] border-2 font-normal text-xs m-5' >Logout</option>
                <option className='text-white bg-[#031330] border-2 font-normal text-xs m-5 block sm:hidden' > <IoIosHelpCircleOutline className='text-xl' />Help</option>
            </select>
             </div>
          </div>
          
      </div>
    </div>
    </header>
    
   
    </>

  );
 }
export default Header; 