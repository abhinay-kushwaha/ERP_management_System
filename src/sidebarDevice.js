import React, { useRef } from 'react';
import DeviceAddD from './deviceAddD'
import DeviceAssignAssign from './deviceAssignAssign.js'
import AssignEdit from './assignEdit.js'
import DeviceDelete from './deviceDelete.js'
// import DeviceAddD from './deviceAddD'
import { useState,modelRef } from 'react';

import Desktop from '../src/assets/desktop.jpeg';
import Iphone from '../src/assets/iphone.jpeg';
import Vivo from '../src/assets/vivo.jpeg';
import Asus from '../src/assets/asus.jpeg';

// for 3 dot 
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Modal } from '@mui/material';


import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineAssignmentInd } from "react-icons/md";


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


const SidebarDevice = () => {
  // this line foe table
  const [currentPage, setCurrentPage] = useState(1);



  // this line for show DeviceAddDevice 
const[showDeviceAddDevice,setShowDeviceAddDevice] = useState(false)
const[showDeviceAssignAssign,setShowDeviceAssignAssign] = useState(false)
const[showAssignEdit,setShowAssignEdit] = useState(false)
const[showDeviceDelete,setShowDeviceDelete] = useState(false)
// const[showDeviceAddDevice,setShowDeviceAddDevice] = useState(false)
// const modelRef= useRef();

// const closeModel = (e) =>{
//   if(modelRef.current === e.target){
//     onClose();
//   }
// }



// Dummy data for the table
const tableData = [
  { id: 1, name: 'DESKTOP-P14FRB1', category: 'Desktop', status: 'Assign', purchaseDate: '17,Mar 2024', warranty: '2 Year', image: Desktop },
  { id: 2, name: ' Iphone-12', category: 'Ios', status: 'Request', purchaseDate: '17,Mar 2024', warranty: '2 Year' , image: Iphone },
  { id: 3, name: 'Vivo T2 Pro x', category: 'Android', status: 'Available', purchaseDate: '17,Mar 2024', warranty: '2 Year' , image: Vivo },
  { id: 4, name: 'Asus-Tuf Gaming', category: 'Laptop', status: 'Assign', purchaseDate: '17,Mar 2024', warranty: '2 Year' , image: Asus },
  { id: 5, name: 'DESKTOP-P14FRB1', category: 'Desktop', status: 'Request', purchaseDate: '17,Apr 2024', warranty: '2 Year' , image: Desktop },
  { id: 6, name: 'Asus-Tuf Gaming', category: 'Laptop', status: 'Available', purchaseDate: '17,Mar 2024', warranty: '2 Year' , image: Asus },
  { id: 7, name: 'Realme 10T pro', category: 'Android', status: 'Assign', purchaseDate: '17,Feb 2024', warranty: '2 Year' , image: Vivo },
  { id: 8, name: 'Asus-Tuf Gaming', category: 'Laptop', status: 'Available', purchaseDate: '17,Mar 2024', warranty: '2 Year, '  , image: Asus},
  // Add more data as needed
];

const itemsPerPage = 5; // Number of items to display per page
const totalPages = Math.ceil(tableData.length / itemsPerPage);

// Calculate the index of the first and last item on the current page
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

// Event handlers for pagination
const goToPreviousPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const goToNextPage = () => {
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
      const [deviceAssignAssignOpen, setDeviceAssignAssignOpen] = useState(false);
      const handleDeviceAssignAssignOpen = () => setDeviceAssignAssignOpen(true);
      const handleDeviceAssignAssignClose = () => setDeviceAssignAssignOpen(false);
    
           const [assignEditOpen, setAssignEditOpen] = useState(false);
      const handleAssignEditOpen = () => setAssignEditOpen(true);
      const handleAssignEditClose = () => setAssignEditOpen(false);
    
           const [deviceDeleteOpen, setDeviceDeleteOpen] = useState(false);
      const handleDeviceDeleteOpen = () => setDeviceDeleteOpen(true);
      const handleDeviceDeleteClose = () => setDeviceDeleteOpen(false);
          

  return(

    <>
     {/* <div ref={modelRef} onClick= {closeModel} > */}
     <div  >
     <div className='text-xs md:text-base   '>
    

        <div className=' font-serif'>
             <div className=''>

             <div className='flex justify-between h-  '>
             <div>
             <h2 className='font-bold text-xl md:text-2xl '>Device</h2>
              <div>45 Devices</div>  
             </div>
              <div className='flex flex-col md:flex-row md:items-center md:space-x-1 space-y-1'>
              <div>
                <div className='mb-2 sm:mb-0'>
                <div className='flex justify-between items-center bg-[#f7e7e7] p-1 rounded-md'> <input type='search' placeholder='🔍search' className='w-24 sm:w-auto bg-[#f7e7e7] placeholder-black pl-2'  /> </div>
                <div>  </div>
                </div></div>
                
              <div className=' md:mb-0 p-1 rounded-md flex justify-center items-center min-w-2 bg-[#ee4f50]' ><IoDocumentsOutline />
                <button className='ml-2 md:ml-0' onClick={()=> setShowDeviceAddDevice(true) }>
                 Add Device</button>
                  </div>
                  </div>
             </div>

             </div>
             <br/>
             <div className='overflow-x-scroll '>
             <div className='min-w-full'>
              <table className=' w-full ' >
                <thead className=' w-full h-10 '>
                <tr className='bg-[#031330] text-white space-x-0 '>
                 
                  <th ><div className='flex  items-center'>Device Name  <IoMdArrowDropdown /></div>   </th>
                  <th ><div className='flex  items-center'>Category  <IoMdArrowDropdown /></div>      </th>
                  <th ><div className='flex  items-center'>Status  <IoMdArrowDropdown /> </div>       </th>
                  <th ><div className='flex  items-center'>Purchased date  <IoMdArrowDropdown /></div></th>
                  <th ><div className='flex  items-center'>Warranty  <IoMdArrowDropdown /> </div>     </th>
                  <th></th>
                </tr> 
                </thead>
                
                
                <tbody>
                                {currentItems.map((item) => (
                                    <tr key={item.id} className='border-[#031330] border-b-2'>
                                        <td className='flex items-center'>
                                            <div><img src={item.image} alt='logo' className='hidden sm:block w-10 h-10' /></div>
                                            <div className='das-name'>{item.name}</div>
                                        </td>
                                        <td>{item.category}</td>
                                        <td>{item.status}</td>
                                        <td>{item.purchaseDate}</td>
                                        <td>{item.warranty} </td>
                                        <td className='three-dot'>
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
                                          <Button onClick={handleDeviceAssignAssignOpen}><MdOutlineAssignmentInd />Assign</Button>
                                          </MenuItem>
                                      <MenuItem >
                                          <Button onClick={handleAssignEditOpen}><FaEdit />Edit</Button>
                                          </MenuItem>
                                      <MenuItem >
                                          <Button onClick={handleDeviceDeleteOpen}><MdDeleteForever />Delete</Button>
                                          </MenuItem>

                                        {/* <MenuItem onClick={()=> setShowAssignEdit(true) } >Edit</MenuItem>
                                        <MenuItem onClick={()=> setShowDeviceDelete(true) } >Delete</MenuItem> */}
                                        {/* <MenuItem onClick={()=> setShowEditEmp(true) } >Download Bill</MenuItem> */}
                                    </Menu>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>

                  {/* <tbody>
                <tr>
                  
                  <td className='imgb'>
                    <div><img src={Desktop} alt='logo' className='table-img' /></div>
                    <div className='das-name'>DESKTOP-P14FRB1</div>
                  </td>
                  <td>Desktop</td>
                  <td>Assign</td>
                  <td>17, Mar 2024</td>
                  <td>2 Year</td>
                  <td>...</td>
                </tr><br/>
                <tr>
                  <td className='imgb'>
                    <div><img src={Iphone} alt='logo' className='table-img' /></div>
                    <div className='das-name'>Iphone-12</div>
                  </td>
                  <td>Ios</td>
                  <td>Request</td>
                  <td>17, Mar 2024</td>
                  <td>2 Year, 8 Month</td>
                  <td>...</td>
                </tr><br/>
                <tr>
                <td className='imgb'>
                    <div><img src={Vivo} alt='logo' className='table-img' /></div>
                    <div className='das-name'>Vivo T2 Pro x</div>
                  </td>
                  <td>Android</td>
                  <td>Available</td>
                  <td>17, Mar 2024</td>
                  <td>2 Year, 8 Month</td>
                  <td>...</td>
                </tr><br/>
                <tr>
                <td className='imgb'>
                    <div><img src={Asus} alt='logo' className='table-img' /></div>
                    <div className='das-name'>Asus-Tuf Gaming</div>
                  </td>
                  <td>Laptop</td>
                  <td>Assign</td>
                  <td>17, Mar 2024</td>
                  <td>2 Year, 8 Month</td>
                  <td>...</td>
                </tr><br/>
                <tr>
                <td className='imgb'>
                    <div><img src={Desktop} alt='logo' className='table-img' /></div>
                    <div className='das-name'>DESKTOP-P14FRB1</div>
                  </td>
                  <td>Desktop</td>
                  <td>Assign</td>
                  <td>17, Mar 2024</td>
                  <td>2 Year, 8 Month</td>
                  <td>...</td>
                </tr>
                </tbody> */}
              </table>
          </div>

          </div>

        </div>
     </div>
     <br/>
     <div className='flex justify-center space-x-1 text-black font-bold'>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToPreviousPage}>Previous</a>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToPreviousPage}>1</a>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToNextPage}>2</a>
          <a href="#" className='p-1 bg-slate-300 rounded-md' onClick={goToNextPage}>Next</a>
          
    
     </div>


  { showDeviceAddDevice &&  <DeviceAddD className='device-addDevice'  onClose={()=> setShowDeviceAddDevice(false) }/>}
  {/* { showDeviceAssignAssign &&  <DeviceAssignAssign className='device-addDevice'  onClose={()=> setShowDeviceAssignAssign(false) }/>}
  { showAssignEdit &&  <AssignEdit   onClose={()=> setShowAssignEdit(false) }/>}
  { showDeviceDelete &&  <DeviceDelete    onClose={()=> setShowDeviceDelete(false) }/>} */}
  {/* { showDeviceAddDevice &&  <DeviceAddD   onClose={()=> setShowDeviceAddDevice(false) }/>} */}

   
<Modal
        open={deviceAssignAssignOpen}
        onClose={handleDeviceAssignAssignClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <DeviceAssignAssign notShow={handleDeviceAssignAssignClose}/>
      </Modal>
<Modal
        open={assignEditOpen}
        onClose={handleDeviceAssignAssignClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <AssignEdit notShow={handleAssignEditClose}/>
      </Modal>
<Modal
        open={deviceDeleteOpen}
        onClose={handleDeviceDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <DeviceDelete notShow={handleDeviceDeleteClose}/>
      </Modal>


     </div>
    </>

  );
}



export default SidebarDevice; 