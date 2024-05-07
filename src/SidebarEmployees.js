import  React from 'react';
import  Alert  from 'react-popup-alert';
import Popup from 'react';  
import { Link } from 'react-router-dom';
import DeviceAddD from './deviceAddD';
import { useState} from 'react';
import {  useRef } from 'react';
import ThreeDot from './threeDot.js';
import { Modal } from '@mui/material';
// for 3 dot 
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


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
import EditEmp from './editEmp.js';
import DeleteEmp from './deleteEmp.js';
import ChangePass from './changePass.js';


const SidebarEmployees = ({onClose}) => {

  const[showAddEmp,setShowAddEmp] = useState(false);
  const[showEditEmp,setShowEditEmp] = useState(false);
  const[showDeleteEmp,setShowDeleteEmp] = useState(false);
  const[showChangePass,setShowChangePass] = useState(false);
  // const[showEditEmp,setShowEditEmp] = useState(false);
  
  // const[showThreeDot,setShowThreeDot] = useState(false)

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  // const threeDotRef = useRef(null);
  // const closeThreeDot = (e) => {
  //   if(threeDotRef.current === e.target){
  //     onClose();
  //   }
  // }
  

// pasination start

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // litne number show karvana h page me

  // Example table data
  const tableData = [
    { name: 'Pooja', role: 'Full stack developer', email: 'pooja@gmail.com', status: true },
    { name: 'Ajeet', role: 'Full stack developer', email: 'ajeet@gmail.con', status: false },
    { name: 'Abhinay', role: 'Frontend developer', email: 'abhinay@gmail.com', status: true },
    { name: 'Ashish', role: 'Full stack developer', email: 'Ashish@gmail.com', status: true },
    { name: 'Raghav', role: 'Frontend developer', email: 'Raghav@gmail.com', status: false },
    { name: 'Shivangi', role: 'Full stack developer', email: 'Shivangi@gmail.com', status: true },
    { name: 'Lavisha', role: 'Frontend developer', email: 'Lavisha@gmail.com', status: true },
    { name: 'Karan', role: 'Full stack developer', email: 'Karan@gmail.com', status: false },
    { name: 'Ajay', role: 'Frontend developer', email: 'Ajay@gmail.com', status: true },
    // Add extra data
  ];

  // Calculate the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Event handlers for pagination
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(tableData.length / itemsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));




  };
// for 3 dot 
const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };

//  option of 3 dot  
       const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

       const [deleteEmpOpen, setDeleteEmpOpen] = useState(false);
  const handleDeleteEmpOpen = () => setDeleteEmpOpen(true);
  const handleDeleteEmpClose = () => setDeleteEmpOpen(false);

  //      const [editOpen, setEditOpen] = useState(false);
  // const handleEditOpen = () => setEditOpen(true);
  // const handleEditClose = () => setEditOpen(false);
      
  


  return(

    < >

     {/* <div onClick={handleClose}> */}
     {/* <div   ref={threeDotRef} onClick= {closeThreeDot}> */}
     <div>
     <div className='text-xs md:text-base '>
   
        <div className='  font-serif'>
             <div className=''>

             <div className='flex justify-between'>
            <div>
            <h2 className='font-bold text-xl md:text-2xl'>Employees</h2>
              <div>157 Employees</div> 
              </div> 
              <div className='flex flex-col md:flex-row md:items-center md:space-x-1 space-y-1'>
                <div className='mb-2 sm:mb-0'>
                  <div className='flex justify-between items-center bg-[#f7e7e7] p-1 rounded-md'>
                    
                    <input type='search' placeholder='🔍search' className='placeholder-black w-24 sm:w-auto bg-[#f7e7e7] pl-2' />
                  </div>
                </div>
                
                <div className=' md:mb-0 p-1 rounded-md flex justify-center items-center min-w-2 bg-[#ee4f50]'> 
                  <IoDocumentsOutline />
                  <button className='add-emp ml-2 md:ml-0' onClick={() => setShowAddEmp(true)}>Add Employees</button> 
                </div>
              </div>

             </div>

             </div>
             <br/>
             <div className='overflow-x-scroll'>
             <div className='min-w-full'>
              <table className=' w-full ' > 
                <thead className=' w-full h-10 '>
                <tr className='bg-[#031330] text-white space-x-0 '>
                  <th className='   '><div className='flex  items-center'>Employee <IoMdArrowDropdown /></div></th>
                  <th className='   '  ><div className='flex items-center'>Job Role<IoMdArrowDropdown />  </div>  </th>
                  <th className='   ' ><div className='flex items-center'>Email<IoMdArrowDropdown /></div>    </th>
                  <th className='   '><div className='flex items-center'>Status <IoMdArrowDropdown /></div>    </th>
                  
                </tr> 
                </thead> 
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index} className='border-[#031330] border-b-2'>
                      <td className=''>{item.name}</td>
                      <td className=''>{item.role}</td>
                      <td className=''>{item.email}</td>
                      <td className='' ><Switch checked={item.status} size="small" className='' /> 
                      <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <b>...</b>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem >
                                          <Button className='' onClick={handleEditOpen}><FaEdit />  Edit</Button>
                                          </MenuItem>
                                        <MenuItem >
                                          <Button className='' onClick={handleDeleteEmpOpen}><MdDeleteForever />  Delete</Button>
                                          </MenuItem>
                                        <MenuItem >
                                          {/* <Button onClick={handleEditOpen}>Change Password</Button> */}
                                          </MenuItem>

                                    </Menu>
                      </td>
                     
                    </tr>
                  ))}
                </tbody>
                
                
                {/* <tbody>
                <tr>
                    <td >Pooja</td>
                    <td >Full stack developer</td>
                    <td >pooja@gmail.com</td>
                    <td > <Switch {...label} /></td>
                    <td >
                      <div 
                      style={{position:'relative'}}
                       onClick={()=> setShowThreeDot(true) }>
                    <Link to={ThreeDot}>
                      ...
                    </Link>
                    { showThreeDot &&  <ThreeDot   onClose={()=> setShowThreeDot(false) }/>}

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
                </tbody> */}
              </table>
          </div>
          </div>


        </div>
     </div>
     <br/>
     <div className='pren'>

     {/* <button onClick={handlePrevClick}>Previous</button>
     <button onClick={handlePrevClick}>1</button>
    <button onClick={handleNextClick}>2</button>
    <button onClick={handleNextClick}>Next</button> */}

      {/* <h1>{items[currentIndex]}</h1>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button> */}
          <div className='flex justify-center space-x-1 text-black font-bold'>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToPreviousPage}>Previous</a>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToPreviousPage}>1</a>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToNextPage}>2</a>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToNextPage}>Next</a>
          </div>
    
     </div>
     { showAddEmp &&  <AddEmp className='blur-lg'  onClose={()=> setShowAddEmp(false) }/>}
     {/* { showEditEmp &&  <EditEmp className=''  onClose={()=> setShowEditEmp(false) }/>}
     { showDeleteEmp &&  <DeleteEmp className=''  onClose={()=> setShowDeleteEmp(false) }/>}
     { showChangePass &&  <ChangePass className=''  onClose={()=> setShowChangePass(false) }/>} */}
     
     <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <EditEmp notShow={handleEditClose}/>
      </Modal>
     <Modal
        open={deleteEmpOpen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <DeleteEmp notShow={handleDeleteEmpClose}/>
      </Modal>
     {/* <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <EditEmp notShow={handleEditClose}/>
      </Modal> */}



     </div>
    </>

  );
}
export default SidebarEmployees;