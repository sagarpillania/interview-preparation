import { useState } from "react";
import { useEffect } from "react";

function App() {
  // localStorage.setItem("user","Sagar"); // to set the data in local storage
  // const user=localStorage.getItem("user"); // to use the stored value
  // console.log(user);
  // localStorage.removeItem("user"); // will remove the value
  // localStorage.clear(); to clear all in one go
  // const user={
  //   name:'Sagar',
  //   age:27
  // };
  // localStorage.setItem("user",JSON.stringify(user));
  // let user=localStorage.getItem("user");
  // user=JSON.parse(user);
  // console.log(typeof(user));
  // console.log(user);

// Use Effect HOOK usage- Most Important used

  const [num,setNum]=useState(0);
  const [num2,setNum2]=useState(10);
  function random(){
    const a=Math.random()*10; //so it is in main process any changes in main app will generate new number as it will render to show new things added but we want ki na chle jb hm chae tb ye chale
    console.log('Hello');
    console.log(a);
  }
  function mouseEnter(){
    setNum(num+1);
  }
  function mouseLeaves(){
    setNum2(num2+1);
  }
  useEffect(()=>{
    console.log("useEffect is running");
  },[num]);
  
  return (
    <>
    <div>App</div>
    <h2>{num}</h2>
    <h2>{num2}</h2>
    <button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeaves}
    >Hover Me</button>
    </>
  )
  
}

export default App
