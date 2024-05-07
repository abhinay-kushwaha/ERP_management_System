import React from 'react';
import ForgotPass from './forgotPass.js';
import shantilogo from '../src/assets/shantilogo.png';
import { Link, NavLink } from 'react-router-dom';


const LoginOne = ()=> {

  return (
    
    <>
    <div className='' >

      <div className='' >
        <div className=''>
        <div><img src={shantilogo} alt='logo' className='' />
               <div className=''> <p >Formaly known as Shanti infosoft</p></div>
        
        </div> 
        </div>
        <div className=''></div>
      </div>

      <div className='' >
            <div>
                <h2>Hello Again!</h2>
                <p>Welcome Back</p>
                <label className='' >
                    Email </label><br/>
                    <input type='Email' placeholder='Email' className='' required />  <br/> <br/>
                
                <label className='' >
                    Password  </label><br/>
                    <input type='password' placeholder='Password' className='' required /> <br/> <br/>
               
                   <button className='log' >Login</button>
                 <br/>
                <p className='textepf' > 
                Forgot Password ?
                 </p>

            
            </div> 
      </div>

    </div>
    </>

   
  )
}
export default LoginOne;