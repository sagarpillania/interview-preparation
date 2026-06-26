import axios from 'axios';
import { useState } from 'react';

function App() {
  const [datta,setDatta]=useState([]);
// USING FETCH METHOD------------------->>>>>>>
  // async function getData(){
  //   const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   const data =await response.json(); //because async hai ye bhi to change data into json
  //   console.log(data);
  // }
// USING AXIOS METHOD- used because error handling, setup easy,loading easy manage,interceptors---------------->>>>>>>>
const getData=async ()=>{
  // const response=await axios.get("https://jsonplaceholder.typicode.com/todos/1"); // it will give data inbuilt no need to convert
  const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos/1"); //did destructure it and taken out data in one go
  console.log(data);
  setDatta(data);
  // console.log(response.data);
}
  return(
    <>
      <div>App</div>
      <button onClick={getData}>Get Data</button>
      <div className="tableUser">
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {datta.map((elem,key)=>{
              return(
                <tr key={key}>
                  <td>{elem.userId}</td>
                  <td>{elem.title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
