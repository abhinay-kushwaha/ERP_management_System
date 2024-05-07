import React from 'react';
import { Link } from 'react-router-dom';

import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineDevices } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className=' p-1 h-screen  md:min-w-40 border-r-4 border-[#111a2b]' >

        <Link to='/Dashboard'>
      <div className='flex justify-start py-2 gap-1'>
        <div className=' text-2xl '> <MdOutlineDashboard /></div>
        <div className='hidden md:block font-serif '> Dashboard</div>
      </div>
        </Link>

        <Link to='/'>
      <div className='flex justify-start py-2  gap-1'>
        <div className=' text-2xl '><MdOutlineBedroomParent /> </div>
        <div className='hidden md:block font-serif'>Meeting Rooms </div>
      </div>
        </Link>

        <Link to='/employee'>
      <div className='flex justify-start py-2  gap-1'>
        <div className=' text-2xl '><MdOutlinePersonSearch /> </div>
        <div className='hidden md:block font-serif'> Employee</div>
      </div>
        </Link>

        <Link to='/sidebarDevice'>
      <div className='flex justify-start py-2 gap-1'>
        <div className=' text-2xl '><MdOutlineDevices /> </div>
        <div className='hidden md:block font-serif'> Device</div>
      </div>
        </Link>

        <Link to='/'>
      <div className='flex justify-start py-2  gap-1'>
        <div className=' text-2xl '> <MdOutlineRocketLaunch />  </div>
        <div className='hidden md:block font-serif'> Project</div>
      </div>
        </Link>

        <Link to='/'>
      <div className='flex justify-start py-2  gap-1'>
        <div className=' text-2xl '><IoSettingsOutline /> </div>
        <div className='hidden md:block font-serif'> Setting</div>
      </div>
        </Link>

        </div>
  )
}
export default Sidebar; 