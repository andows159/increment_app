import React, {useState} from 'react';
import Welcome from '../pages/Welcome.js'

export default function App () {
  var [globalCounter, setGlobalCounter] = useState(0);
  var [count, setCount] = useState(0);
  function increment(){
    setCount(count + 1)
    setGlobalCounter(globalCounter + 1)
  }
  
    return (
     <Welcome
     counter= {count}
     increment = {()=>increment()}
     format= {()=>setCount(count = 0)}
     message= {globalCounter}
     formatGlobal={()=>setGlobalCounter(globalCounter = 0)}
     />
     
    
    );
  }
