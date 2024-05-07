import  React from 'react';
import  Alert  from 'react-popup-alert';
import Popup from 'react';
import { Link } from 'react-router-dom';
import DeviceAddD from './deviceAddD';
import { useState} from 'react';
import {  useRef } from 'react';

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
// import { useState } from 'react';
// import * as React from 'react';
import Switch from '@mui/material/Switch';
import AddEmp from './addEmp';
import ThreeDot from './threeDot';

const EmpTable1 =()=>{
  const[showAddEmp,setShowAddEmp] = useState(false)
  const[showThreeDot,setShowThreeDot] = useState(false)

  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return(
    <>
 <div className='emptable'>
             
             
               <tbody>
               <tr>
                   <td >Pooja</td>
                   <td >Full stack developer</td>
                   <td >pooja@gmail.com</td>
                   <td > <Switch {...label} /></td>
                   <td >
                     <div style={{position:'relative'}} onClick={()=> setShowThreeDot(true) }>
                   <Link to={ThreeDot}>
                     ...
                   </Link>
    { showThreeDot &&  <ThreeDot  onClose={()=> setShowThreeDot(false) }/>}

                   </div>
                     </td>
               </tr> <br/>
               <tr>
                   <td>Ajeet</td>
                   <td>Full stack developer</td>
                   <td>ajeet@gmail.con</td>
                   <td><Switch {...label} /></td>
                   <td>...</td>
               </tr> <br/>
               <tr>
                   <td>Abhinay</td>
                   <td>Frontend developer</td>
                   <td>abhinaythresia@gmail.com</td>
                   <td><Switch {...label} /></td>
                   <td>...</td>
               </tr> <br/>
               <tr>
                   <td >Ashish</td>
                   <td >Full stack developer</td>
                   <td >ashish@gmail.com</td>
                   <td ><Switch {...label} /></td>
                   <td >...</td>
               </tr> <br/>
               <tr>
                   <td >Raghav</td>
                   <td >Full stack developer</td>
                   <td >raghav@gmail.com</td>
                   <td ><Switch {...label} /></td>
                   <td >...</td>
               </tr><br/>
               <tr>
                   <td >Shivangi</td>
                   <td >Full stack developer</td>
                   <td >shivangi@gmail.com</td>
                   <td ><Switch {...label} /></td>
                   <td >...</td>
               </tr><br/>
               </tbody>
            
         </div>



    </>
  )
}
export default EmpTable1;