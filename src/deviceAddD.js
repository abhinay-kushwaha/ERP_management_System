import React from 'react';
import { IoClose } from "react-icons/io5";
import  { useRef } from 'react';
import { VscFileSubmodule } from "react-icons/vsc";

const DeviceAddD = ({onClose}) => {

//   const deviceAddDRef = useRef();
// const closeDeviceAddD = (e) => {
//   if(deviceAddDRef.current === e.target){
//     onClose();
//   }
// }
  return(

<div className='flex justify-center items-center  absolute inset-0 backdrop-blur-sm' 
// ref={deviceAddDRef} onClick= {closeDeviceAddD}
>
            <div className='font-serif text-xs max-w-full  p-5 rounded-md bg-white '>
              {/* <p className='x' { props.handleClose}><IoClose /></p> */}
              <h3 className='x' onClick={onClose}><IoClose className='ml-auto text-xl' /></h3>
                <h2 className='font-bold text-xl'>Add Device</h2>
                <label className='text-xs' >
                    Name </label><br/>
                    <input type='text' placeholder='Name' className='pl-2 rounded-sm border-black border-2 w-full b ' required />  <br/> 

                <label className='text-xs' >
                    Category </label><br/>
                <div className='rounded-sx border-black border-2 w-full '>
                    {/* <input type='text' placeholder='Category' className='category' required  /> */}
                    <select className='text-right w-full' required> 
                      <option className='w-full'>1</option>
                      <option className='w-full'>2</option>
                   </select>
                </div>
                      
                
                <label className='text-xs' >
                    Vendor Name  </label><br/>
                    <input type='text' placeholder='Vendor Name' className='pl-2 rounded-sm border-black border-2 w-full' required /> <br/> 
               
                <label className='text-xs' >
                    Purchased date  </label><br/>
                    <div className='text-right rounded-sm border-black border-2 w-full'>
                    
                    <input type='date' placeholder='Purchased date' className='w-full '  required/>
                      </div> 

                <label className='text-xs' >
                    Warranty Start date  </label><br/>
                    <div className='text-right rounded-sm border-black border-2 w-full '>
                    <input type='date' className='w-full' required />
                      </div> 

                      <div className='flex justify-between '>
                      <div>
                      <label className='text-xs' >
                    Warranty Year  </label><br/>
                    <div className=' rounded-sm border-black border-2 w-full '>
                    {/* <input type='text' placeholder=' Year' className='categoryww' required /> */}
                    <input type="number" min="0" max="9" step="1"  className='pl-2  h-5 w-full' required/>
                      </div>
                      </div>

                      <div>
                      <label className='text-xs' >
                    Warranty Month  </label><br/>
                    <div className=' rounded-sm border-black border-2 w-full '>
                    {/* <input type='text' placeholder=' Month' className='categoryww' required /> */}
                    <input type="number" min="0" max="12" className=' pl-2 h-5 w-full' required/>
                      </div> <br/>
                      </div>

                      </div>


                        <div className='flex justify-center gap-2 '>
                          <div className='outline-dashed p-1 flex flex-col justify-center items-center ' ><input type='file'  className='w-20 bg-inherit ' /><VscFileSubmodule className='text-4xl' /></div>
                          <div className='outline-dashed p-1 flex flex-col justify-center items-center ' > <input type='file' className='w-20  bg-inherit'  /><VscFileSubmodule className='text-4xl' /></div>
                        </div>
                   <br/>
                      <p><b className='text-xs'>Add generate Name</b></p> 
                   <button className='bg-[#031130] text-white text-xl font-semibold rounded w-full py-1' onClick={onClose}>Save</button>
                 <br/>
                

            
            </div> 
      </div>

);
}
export default DeviceAddD; 