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
  function increaseVal(){
    setVal(val+1);
    // console.log(val); // will show 0
    
  }
  return (
    <>
    <h1 className="m-4">{val}</h1>
    <button onClick={increaseVal} className="ml-4 px-4 text-center py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">click</button>
    </>
  )
}

export default App


// setVal is  an async function so if we do setVal(val+1); and do console.log(val); it will show 0 only both the time. ass