import React from 'react';
import  { useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';



const AddEmp = ({onClose}) => {

// const addEmpRef = useRef();
// const closeAddEmp = (e) => {
//   if(addEmpRef.current === e.target){
//     onClose();
//   }
// }




// for validation 

  return(

<div className='add_emp1' 
// ref={addEmpRef} onClick= {closeAddEmp}
>
            <div className='flex justify-center items-center  absolute inset-0  backdrop-blur-sm h-auto w-full'>
              <div className='font-serif max-w-full  p-5 rounded-md bg-white  '>
              <p ><a href="#" onClick={onClose} ><IoClose className='ml-auto font-bold text-xl'  /></a></p>
             
                <h2 className='font-bold text-xl '>Add Employee</h2> <br/>
                <label className='text-xs' >
                    Name </label><br/>
                    <input type='text' placeholder='Name' className='pl-2 rounded-sm border-black border-2 w-full h-8' required />  <br/> 

                <label className='text-xs' >
                    Email </label><br/>
                    <input type='Email' placeholder='Email' className='pl-2 rounded-sm border-black border-2 w-full h-8' required />  <br/> 
                
                <label className='text-xs' >
                    Job Role  </label><br/>
                    <input type='text' placeholder='Job Role' className='pl-2 rounded-sm border-black border-2 w-full h-8' required /> <br/> <br/> 
               
                {/* <input type='submit'/> */}
                {/* <Link to="/"> */}
                   <button className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2'  onClick= {onClose}>Save</button>
                   {/* </Link>   */}
                 <br/>
                

            
            </div> 
      </div>
      </div>

);
}
export default AddEmp; 