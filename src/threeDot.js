import React from 'react';
import  { useRef } from 'react';
import { IoClose } from "react-icons/io5";

import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const ThreeDot = ({onClose}) => {

  const threeDotRef = useRef();
  const closeThreeDot = (e) => {
    if(threeDotRef.current === e.target){
      onClose();
    }
  }

  return(
      <>
     <div >
     <div className='device-dot' 
     ref={threeDotRef} onClick= {closeThreeDot}
    
     >
        <div className='threeDot1'>
        <p className='x' ><a  onClick={onClose} ><IoClose /></a></p>

          <div > <button className='threeDot2'  > <FaRegEdit />Edit</button></div>
          <div ><button  className='threeDot2' > <MdDeleteOutline />Delete</button></div>
          <div ><button  className='threeDot2' > <RiLockPasswordLine />Change Password</button></div>
        </div>
         
      </div>

     </div>     
      </>
);
}
export default ThreeDot; 