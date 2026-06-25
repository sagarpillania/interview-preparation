import { useState } from "react";


function App(){

  const [title,setTitle]=useState("");
  const [details,setDetails]=useState("");
  const [task,setTask]=useState([]);

  const submitForm=(e)=>{
    e.preventDefault();
    // console.log("submit form");
    const copyTask=[...task];
    copyTask.push({title,details});
    setTask(copyTask);
    setTitle('');
    setDetails('');
  }
  function deleteNode(idx){
    const copyTaks=[...task];
    copyTaks.splice(idx,1);
    setTask(copyTaks);
  }
  return (
    <>
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
      <form onSubmit={(e)=>submitForm(e)} className='flex gap-4 lg:w-1/2  flex-col items-start p-10'>
        <div className="flex flex-col gap-4 lg:w-full p-10 items-start">
        <h1 className="text-4xl font-bold">Add notes</h1>
          <input className="px-5 w-full py-2 font-medium border-2 outline-none rounded"
          type="text" placeholder="Enter Notes Title" value={title} onChange={(e)=>setTitle(e.target.value)}
          />
          <textarea className="px-5 w-full h-30 font-medium py-2 border-2 rounded"
          type="text" placeholder="Enter Details" value={details} onChange={(e)=>setDetails(e.target.value)}
          />
          <button className="bg-white text-black active:scale-90 font-medium px-5 w-full py-2 border-2 rounded">Submit Notes</button>
        </div>
      </form>
      <div className="lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className=" flex flex-wrap gap-5 mt-5 lg:h-[90%] overflow-auto">
            {task.map((item,idx)=>{
              return (
                <div key={idx} className="flex flex-col justify-between items-start relative h-42 w-34 text-black py-2 px-2 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeigVqx1Lfyb0l2i1Z34B4Z2EbtMIMKNBRPg&s')] rounded-2xl">
                  <div>
                    <h3 className="leading-tight text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 leading-tight font-medium text-gray-700">{item.details}</p>
                  </div>
                  <button className="ml-5 bg-black text-white rounded px-2 py-1" onClick={()=>deleteNode(idx)}>Delete</button>
                </div>
              )
            })}
        </div>
      </div>
    </div>
    </>
  )
}

export default App;