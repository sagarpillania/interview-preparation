
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
  let user=localStorage.getItem("user");
  user=JSON.parse(user);
  console.log(typeof(user));
  console.log(user);
  
  
  

  return (

    <div>App</div>
  )
  
}

export default App
