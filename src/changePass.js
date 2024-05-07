import React from 'react';
import {useState} from 'react';

import { Link, NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


const ChangePass = () => {


    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatchError, setPasswordsMatchError] = useState(false);

    const isSaveEnabled = newPassword !== '' && confirmPassword !== '' && newPassword === confirmPassword;

    const handleSave = () => {
        if (isSaveEnabled) {
            console.log('Save button clicked');
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (newPassword !== e.target.value) {
            setPasswordsMatchError(true);
        } else {
            setPasswordsMatchError(false);
        }
    };


    return(
        <>

            <div className='flex justify-center items-center my-20 absolute inset-0' >
             <div className='font-serif max-w-full  p-5 rounded-md bg-[#cacfd7]' >
                <p className='x' >
                <Link to='/'  >
                    <a href="#" ><IoClose className='ml-auto' /></a>
                    </Link>
                    </p>
             <h2 className='font-bold text-xl'>Change Password</h2> <br/>
            <p className='textepf' >Must include at least one symbol or number and have <br/> at least 8 characters. </p> <br/>
            <label className='textepf' >
                    New Password <br/>
                    <input type='password' placeholder='New Password' className='pl-2 rounded-sx border-black border-2 w-full h-8' maxLength={8} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required /> <br /> 
                </label> <br/>
            <label className='textepf' >
                    Confirm Password <br/>
                    <input type='password' placeholder='Confirm Password' className='pl-2 rounded-sx border-black border-2 w-full h-8' maxLength={8} value={confirmPassword} onChange={handleConfirmPasswordChange} required /> <br /> 
                    {passwordsMatchError && <p style={{ color: 'red' }}>Passwords do not match</p>}
                </label> <br/>
                <label>

                <Link to={isSaveEnabled ? '/' : '#'} className='log'>
                  {/* <a href='#'> */}
                   <button className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2' onClick={handleSave} disabled={!isSaveEnabled}>Save
                    </button>
                  {/* </a> */}
                   </Link>
                   
                </label> <br/>
             </div>
            </div>
      
        </>

    );
}




export default ChangePass;
