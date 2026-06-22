import { useState } from 'react'
// import './App.css'
import Proopss from './Proopps';
import Button from './Button';
import Animal from './Animal';

const animals=["Lion","Zebra","Deer","Buffalow"];

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

  function handleClick(url){
    window.location.href=url;
  }

  return (
    <>
    <p> Count is {count}</p>
    <button onClick={Incre}>Increment</button>
    <button onClick={Decre}>Decrement</button>
    <Proopss name="sagar" age={25}/>
    <Button onClick={()=> handleClick("https://www.google.com")}/>
    <Animal animals={animals}/>
    </>
  )
}

export default App
