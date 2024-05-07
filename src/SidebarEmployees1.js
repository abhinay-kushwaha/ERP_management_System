import React from 'react';

import { Link } from 'react-router-dom';


import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineDevices } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";
import { IoDocumentsOutline } from "react-icons/io5";

import { IoMdArrowDropdown } from "react-icons/io";
import { RxSwitch } from "react-icons/rx";
import Switch from '@mui/material/Switch';


const SidebarEmployees1 = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return(

    <>
     <div>
     <div className='sidebigdiv'>
   
     {/* <div className='sidebar' >
          <div className='sidediv' ><a href="#" > <MdOutlineDashboard />  Dashboard</a></div>
          <div className='sidediv' ><a href="#" > <MdOutlineBedroomParent />  Meeting Rooms</a></div>
          <div className='sidediv' ><a href="#" > <MdOutlinePersonSearch /> 
          <Link to='/SidebarEmployees'> Employees</Link>

          
          </a></div>
          <div className='sidediv' ><a href="#" > <MdOutlineDevices /> 
          <Link to='/SidebarDevice'> Device</Link>

          
          </a></div>
          <div className='sidediv' ><a href="#" > <MdOutlineRocketLaunch /> Project</a></div>
          <div className='sidediv' ><a href="#" > <IoSettingsOutline />  Setting</a></div>
        </div> */}
   


        <div className='employee'>
             <div className='employeee'>
             <h2>Employees</h2>

             <div className='empline'>
              <div>157 Employees</div>  
              <div className='searchbtn'>
              <div>
                <div className='searchb'>
                <div> <input type='search' placeholder='search' className='search'  /> </div>
                <div> <CiSearch /> </div>
                </div></div>
                
              <div className='addemp'> <IoDocumentsOutline /> Add Employees </div></div>
             </div>

             </div>

             <div className='emptable'>
             
              <table className='table'>
                <thead >
                <tr className='tablerow'>
                  <th >Employee   <IoMdArrowDropdown /> </th>
                  <th >Job Role <IoMdArrowDropdown /> </th>
                  <th >Email <IoMdArrowDropdown /> </th>
                  <th >Status <IoMdArrowDropdown /> </th>
                  <th> </th>
                </tr> 
                </thead> 
                <tbody>
                <tr>
                    <td >Ashok</td>
                    <td >Full stack developer</td>
                    <td >ashok@gmail.com</td>
                    <td ><Switch {...label} /></td>
                    <td >...</td>
                </tr> <br/>
                <tr>
                    <td>Akash</td>
                    <td>Full stack developer</td>
                    <td>akash@gmail.con</td>
                    <td><Switch {...label} /></td>
                    <td>...</td>
                </tr> <br/>
                <tr>
                    <td>Abhi</td>
                    <td>Frontend developer</td>
                    <td>abhinaythresia@gmail.com</td>
                    <td><Switch {...label} /></td>
                    <td>...</td>
                </tr> <br/>
                <tr>
                    <td >Saurabh</td>
                    <td >Full stack developer</td>
                    <td >saurabh@gmail.com</td>
                    <td ><Switch {...label} /></td>
                    <td >...</td>
                </tr> <br/>
                
                </tbody>
              </table>
          </div>



        </div>
     </div>
     
     <div className='pren'>
    <a href="#" className='prene' >Previous</a>
    <a href="#" className='prene'>1</a>
    <a href="#" className='prene'>2</a>
    <a href="#" className='prene'>Next</a>
    
     </div>

     </div>
    </>

  );
}



export default SidebarEmployees1; 