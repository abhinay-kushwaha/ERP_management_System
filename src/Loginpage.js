import React from 'react';
import {useState} from 'react';
import ForgotPass from './forgotPass.js';
import shantilogo from '../src/assets/shantilogo.png';
import { Link, NavLink } from 'react-router-dom';



const Loginpage = ()=> {

  // for validation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email) {
        setEmailError('Email is required');
    } else if (!email.includes('@')) {
        setEmailError('Email must contain "@" symbol');
    } else if (!email.includes('.com')) {
        setEmailError('Email must contain ".com"');
    } else {
        setEmailError('');
    }
};


const validatePassword = () => {
  if (!password) {
      setPasswordError('Password is required');
  } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
  } else {
      setPasswordError('');
  }
};

  const handleLogin = () => {
      validateEmail();
      validatePassword();

      if (email && password) {
          console.log('Login successful');
         
      }
  };



  return (
    <>
    <div className='min-h-screen md:flex md:justify-between  md:items-center space-y-10' >

      <div className='bg-gradient-to-r from-[#031130] via-[#01174d] to-[#031130] md:bg-gradient-to-b from-[#031130] via-[#01174d] to-[#031130]  md:flex md:justify-center md:items-center md:h-screen md:w-3/5 ' >
        <div >
          <img src="https://shantiinfosoft.com/images/footer-logo.svg" alt='logo' className='w-screen p-16 ' />
        </div> 
      </div>

      <div className='flex justify-center items-center md:w-2/5'>
  <div className='p-20 font-serif max-w-full w-full '>
    <h1 className='font-bold text-2xl '>Hello Again!</h1>
    <p className=''>Welcome Back</p>
    <form className='mt-8'>
      <div className='mb-4'>
        <label className='text-xs block'>Email</label>
        <input
          type='email'
          placeholder='Email'
          className='pl-2 rounded-sm border-black border-2 w-full h-8'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          required
        />
        <span className='text-xs text-red-500'>{emailError}</span>
      </div>
      <div className='mb-4'>
        <label className='text-xs block'>Password</label>
        <input
          type='password'
          placeholder='Password'
          className='pl-2 rounded-sm border-black border-2 w-full h-8'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
          required
        />
        <span className='text-xs text-red-500'>{passwordError}</span>
      </div>
      <Link to={email && password ? '/mainpage' : '#'}>
        <button
          className='bg-[#031130] text-white text-lg font-semibold rounded w-full py-2'
          onClick={handleLogin}
        >
          Login
        </button>
      </Link>
    </form>
    <p className='text-xs  mt-4'>
      <Link to='/ForgotPass'>Forgot Password ?</Link>
    </p>
  </div>
</div>


    </div>
    </>
  )
}
export default Loginpage;