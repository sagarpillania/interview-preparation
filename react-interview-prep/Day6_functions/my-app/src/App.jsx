// function App() {
//   function inputChange(e){
//     console.log(e.target.value);
//   }
//   return (
//     <>
//       <h1>App</h1>
//       <input 
//         onChange={(e)=>{inputChange(e)}}
//         type="text" placeholder="Enter Name" 
//       />
//     </>
//   )

import { useState } from "react"

// }
function App() {
  const [val,setVal]=useState(0);
  const [user,setUser]=useState({name:"Sagar",age:27});
  function increaseVal(){
    setVal(val+1);
    // setVal(val+1);
    // setVal(val+1); this is batch update we can fix that using setVal(prev=()=>prev+1) so it will run like function and wait to get executed
    // console.log(val); // will show 0
    const newUser={...user};  //if array used then [...user]
    newUser.name="Divyajit";
    newUser.age=23;
    // console.log(newUser);
    setUser(newUser);
  }
  return (
    <>
    <h1 className="m-4">{val}</h1>
    <h2>{user.name},{user.age}</h2>
    <button onClick={increaseVal} className="ml-4 px-4 text-center py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">click</button>
    </>
  )
}

export default App


// setVal is  an async function so if we do setVal(val+1); and do console.log(val); it will show 0 only both the time. ass