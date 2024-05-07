import React from 'react';
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";


const DeviceAssign = () => {
  return(
      <>
      <div className='threeDot'>
        <div className='threeDot1'>
          <div > <button className='threeDot2'  ><MdOutlineAssignmentInd />Assign</button></div>
          <div > <button className='threeDot2'  > <FaRegEdit />Edit</button></div>

          <div ><button  className='threeDot2' > <MdDeleteOutline /> Delete</button></div>

          <div ><button  className='threeDot2' > <FaDownload /> Download Bill</button></div>
        </div>
         
      </div>
      
      
      
      </>



);
}
export default DeviceAssign; 