import React from 'react';
import {useState, useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";





    const ForgotOtp = () => {

        
        const [otpInputs, setOtpInputs] = useState(['', '', '', '']);
        const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
        const inputRefs = [useRef(), useRef(), useRef(), useRef()];

        const handleInputChange = (index, value) => {
            const newOtpInputs = [...otpInputs];
            newOtpInputs[index] = value;
            setOtpInputs(newOtpInputs);
    
          
            const isFilled = newOtpInputs.every(input => input.trim() !== '');
            setIsSubmitEnabled(isFilled);
            if (value && index < 3) {
                inputRefs[index + 1].current.focus();
            }
        };


    return(
        <>

            <div className='flex justify-center items-center m-10 ' >
             <div className='font-serif max-w-full p-5    rounded-md bg-[#cacfd7]' >
                <p className='x' >
                <Link to='/'  >
            <a href="#"  ><IoClose className='ml-auto' /></a>
                </Link>
            </p>
             <h3 className='font-bold text-xl'>Otp Verification</h3> <br/>
            <p className='textepf' >Enter the otp sent to - <br/> abhinaythresia@outlook.com</p> <br/>
                <div className='flex justify-between' >
                   {otpInputs.map((value, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    className=' text-center text-lg font-semibold rounded  w-10 h-10 sm:m-5'
                                    value={value}
                                    maxLength={1}
                                    onChange={e => handleInputChange(index, e.target.value)}
                                    ref={inputRefs[index]}
                                />
                            </div>
                        ))}
                   
                </div> <br/>
                <p className='textepf' >Don't receive code ? <b>Re-send</b> </p> <br/>
           
                   <Link to={isSubmitEnabled ? '/changePass' : '#'} className={`send ${isSubmitEnabled ? '' : 'disabled'}`}>
                   <a href='#'>
                   <button className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2' disabled={!isSubmitEnabled} >
                    Submit
                    </button>
                   </a>
                    </Link>
                    
              <br/>
             </div>
            </div>
      
        </>
    )

}

export default ForgotOtp;
