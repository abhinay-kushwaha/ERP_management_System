import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


const DeviceAssignAssign = ({notShow}) => {
    return(
        <>

            <div className='flex justify-center items-center my-20 absolute inset-0 ' >
             <div className='font-serif max-w-full w-72 p-5 rounded-md bg-white' >
                <p className='x' ><a href="#" ><IoClose className='ml-auto text-2xl' onClick={notShow}/></a></p>
             <h2 className='font-bold text-xl '>Assign</h2> 
          
             <label className='text-xs' >
                    Assignee </label><br/>
                <div className='category1'>
                    {/* <input type='text' placeholder='Assignee' className='category'   /> */}
                    <select className='pl-2 rounded-sx border-black border-2 w-full h-8' required > 
                      <option >1</option>
                      <option >2</option>
                   </select>
                </div> 

                <label className='text-xs' >
                    Device </label><br/>
                <div className='category1'>
                    {/* <input type='text' placeholder='Device' className='category' required  /> */}
                    <select className='pl-2 rounded-sx border-black border-2 w-full h-8' required > 
                      <option >1</option>
                      <option >2</option>
                   </select>
                </div>
                     <br/> 
                   <button className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2' >
                   <Link to='/ForgotOtp' className='log' onClick={notShow} >Assign</Link>
                    
                    </button>
                
                
             </div>
            </div>
      
        </>

    );
}




export default DeviceAssignAssign;
