import Card from "./Card"

function App() {

  const arr=[{name:"Sagar Pillania",age:18},
              {name:"Trivid Garg",age:28},
              {name:"Sumit Kumar",age:25},
            ];

  return (
    <>
      <div className="parent">
        {/* <Card name="Sagar Pillania" age={18}/>
        <Card name="Sumit Kumar" age={28}/>
        <Card name="Trivid Garg" age={30}/> */}
        {arr.map((idx)=>{
          return <Card name={idx.name} age={idx.age}/>
        })};
      </div>
    </>
  )
}

export default App



// Parent se child mei jayega data vice versa not allowed. hmne upr example mei props bheje hai App(parent) se to child(card). 

// Hum mostly data rkhte hai App mei and app ke through hm baki child mei bhejte hai data.
// Card is like a tag toh props bhi ek attribute hai name and uski value hai "data" and equal to krke pass kiya.
// number, array, avriable can be send like age={18}, arr={....} etc.