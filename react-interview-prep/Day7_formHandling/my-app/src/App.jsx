
import { useState } from "react"

// }
function App() {
  const [title,setTitle]=useState("");
  function handleForm(e){
    e.preventDefault();
    console.log('Form submitted');
    console.log(title);
    
  }
  return(
    <>
      <form onSubmit={(e)=>handleForm(e)}>
        <input type="text" placeholder="Enter your name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App


// setVal is  an async function so if we do setVal(val+1); and do console.log(val); it will show 0 only both the time. ass