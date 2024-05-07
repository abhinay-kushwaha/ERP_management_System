import React from 'react';
import { IoClose } from "react-icons/io5";


const AddEmpChangepass = ({onClose}) => {
  return(

<div className='change_pass' >
            <div className='add_emp2'>
              <p className='x' onClick={onClose}><IoClose /></p>
                <h2>Change Password</h2>
                <p className='textepf'>
                    Must  include at least one symbol or number and have <br/> at least 8 characters.
                </p> <br/>

                <label className='textepf' >
                    Old Password </label><br/>
                    <input type='text' placeholder='Old Password' className='boxep' required />  <br/> <br/>
                
                <label className='textepf' >
                New Password  </label><br/>
                    <input type='text' placeholder='New Password' className='boxep' required /> <br/> <br/>
               
                {/* <input type='submit'/> */}
                   <button className='log' onClick={onClose}>Save</button>
                 <br/>
                

            
            </div> 
      </div>

);
}
export default AddEmpChangepass; 