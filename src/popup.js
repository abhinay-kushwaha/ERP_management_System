// import React from "react";
import React, {useRef} from "react";
import Popupa from './popupa';
import {setState} from "react";
import { useState } from "react";
import {modelRef} from "react";

function Popup({onClose}) {
  const[showPop,setShowPop] = useState(false)

  const popupaRef = useRef(null);
  const closePopupa = (e) => {
    if(popupaRef.current === e.target){
      onClose();
    }
  }
return(
 <>
 <div  ref={popupaRef} onClick= {closePopupa}>
  <main>
  <h1>React Popup</h1>
  <br/>
  <button onClick={()=> setShowPop(true) }>Open popup</button>


  {showPop &&  <Popupa onClose={()=> setShowPop(false) }/>}
  </main>
  

 </div>

 </>
)
}
export default Popup;