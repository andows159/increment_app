import React, {useState} from 'react';
import Welcome from './Welcome.js'

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
     format= {()=>setCount(count = count - count)}
     message= {globalCounter}
     />
     
    
    );
  }
