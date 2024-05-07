import React from 'react';
import { IoClose } from "react-icons/io5";

const EditEmp = ({notShow}) => {
  return(

<div className='flex justify-center items-center my-20 absolute inset-0' >
            <div className='font-serif max-w-full  p-5 rounded-md bg-white '>
              <p className='x'><IoClose className='ml-auto text-2xl'  onClick={notShow} /></p>
                <h2 className='font-bold text-xl'>Edit Employee</h2>
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
                   <button className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2' onClick={notShow}>Save</button>
                 <br/>
                

            
            </div> 
      </div>

);
}
export default EditEmp; 