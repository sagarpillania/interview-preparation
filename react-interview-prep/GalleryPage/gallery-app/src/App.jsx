import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [dataa,setDataa]=useState([]);
  const [page,setPage]=useState(2);

  async function getData(page){
    const response=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=27`);
    const data=response.data;
    setDataa(data);
    console.log(data);
    
  }
  let printUserData="No user Data Available";
  if(dataa.length>0){
    printUserData=dataa.map((elem,idx)=>{
            return(
              <a href={elem.url} target='_blank'>
                <div key={idx}>
                  <img className='w-40 h-40 rounded '
                    src={elem.download_url} alt="image" />
                  <h3 className='text-center font-bold'>{elem.author}</h3>
                </div>
              </a>
            )
          })
  }
  function nextData(){
    setPage(page+1);
  }
  function prevData(){
    if(page>2){
      setPage(page-1);
    }
  }
  useEffect(()=>{
    getData(page);
  },[page]);
  return (
    <>
      <div className="bg-black min-h-screen text-white p-4">
        {/* <button onClick={getData}
          className="bg-green-600 text-white active:scale-95 p-3 m-3 rounded">Get Data</button> */}
        <div className='overflow-auto flex flex-wrap gap-2'>
          {printUserData}
        </div>
        <div className='flex justify-center items-center gap-2 mt-2'>
          <button onClick={nextData} className='bg-amber-400 text-black py-1 px-2 rounded '>Next</button>
          <span>{page}</span>
          <button onClick={prevData} className='bg-amber-400 text-black py-1 px-2 rounded '>Prev</button>
        </div>
      </div>
    </>
  )
}

export default App
