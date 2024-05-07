import React from 'react';

function Popupa({onClose}) {
 
  return  (
      <>
      <div>
      <div>
     <button  onClick={onClose}>Close </button> <br/>
     this is my popup
   
      </div>
      </div>

      </>
  ) 
  }


export default Popupa;