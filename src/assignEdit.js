import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";


const AssignEdit = ({notShow}) => {
    return(
        <>

            <div className='flex justify-center items-center my-20 absolute inset-0 ' >
             <div className='font-serif max-w-full w-72  p-5 rounded-md bg-white' >
                <p className='x' ><a href="#"  ><IoClose className='ml-auto text-2xl' onClick={notShow}/></a></p>
             <h2 className='font-bold text-xl'>Edit Device</h2>  
          
             <label className='text-xs' >
                    Name </label><br/>
                    <input type='text' placeholder='Name' className='pl-2 rounded-sm border-black border-2 w-full h-8' required />  <br/>  

                <label className='text-xs' >
                    Category </label><br/>
                <div className='category1'>
                    {/* <input type='text' placeholder='Category' className='category' required  /> */}
                    <select className='pl-2 rounded-sm border-black border-2 w-full h-8' required> 
                      <option >1</option>
                      <option >2</option>
                   </select>
                </div>
                      <br/> 


                      <div className='outline-dashed w-fit p-1 flex flex-col justify-start items-center rounded'>
                    <input type='file' className='w-24' /><VscFileSubmodule className='text-4xl' />
                      </div>
                    <br/> <br/> 
                   <button className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2' >
                   <Link to='/ForgotOtp' className='log' onClick={notShow}>Add</Link>
                    
                    </button>
                <br/> 
                
             </div>
            </div>
      
        </>

    );
}




export default AssignEdit;
