import { useState } from 'react'
// import './App.css'
import Proopss from './Proopps';

function App() {
  const [count,setCount]=useState(0);

  function Incre(){
    setCount(count+1);
  }
  function Decre(){
    if(count>0){
      setCount(count-1);
    }
    else{
      setCount(0);
    }
  }
  return (
    <>
    <p> Count is {count}</p>
    <button onClick={Incre}>Increment</button>
    <button onClick={Decre}>Decrement</button>
    <Proopss name="sagar" age={25}/>
    </>
  )
}

export default App
