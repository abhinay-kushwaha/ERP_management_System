import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

  return(
      <>
      <div>
        <ul>

          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>

        </ul>
      </div>

      </>
  );
}


export default Nav;