import React from 'react';
import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


const ForgotPass = () => {

    const [isValidEmail, setIsValidEmail] = useState(false);


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (value) => {
        setEmail(value);
        if (!value) {
            setEmailError('Email is required');
            setIsValidEmail(false);
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError('Please enter a valid email address');
            setIsValidEmail(false);
        } else {
            setEmailError('');
            setIsValidEmail(true);
        }
        const handleSave = () => {
            validateEmail(email); // Validate email before proceeding
            if (isValidEmail) {
                console.log('Email is valid, navigating to the next page');
                // Navigate to the next page (ForgotOtp)
            }
        };
    };



    const handleSave = () => {
        if (isValidEmail) {
            console.log('Email is valid, navigating to next page');
            // Navigate to the next page (ForgotOtp)
        }
    };
    



    return(
        <>

            <div className='flex justify-center items-center my-20 ' >
             <div className='font-serif max-w-full  p-5 rounded-md bg-[#cacfd7]' >
                <p className='' >
                <Link to='/'  >
                  <a href="#"  ><IoClose className='ml-auto' /></a>
                  </Link>
                  </p>
             <h2>Forgot Password</h2> <br/>
            <p className='textepf' >Enter email address & we'll send you a link to reset <br/> your password.</p> <br/>
            <label className='textepf' >
                    Email <br/>
                    <input type='email' placeholder='Email' className='pl-2 rounded-sx border-black border-2 w-full h-8'
                    value={email}
                    onChange={(e) => validateEmail(e.target.value)}

                     required />
                     <span className='error'>{emailError}</span> <br/> 
                </label> <br/>
               
                <Link to={isValidEmail ? '/ForgotOtp' : '#'}>

                 <a href='#'>
                 <button className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2' onClick={handleSave}>Send
                    </button>
                 </a>
                    </Link>
                    
                 <br/> <br/>
                <p className='textepf' > <a href='#'>
                   <Link to='/'  >Back to LOG IN</Link>
                    {/* Back to LOG IN  */}
                     </a> </p>
             </div>
            </div>
      
        </>

    );
}




export default ForgotPass;
