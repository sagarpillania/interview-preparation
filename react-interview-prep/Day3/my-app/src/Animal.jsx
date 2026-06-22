export default function Animal({animals}){

    if(!animals){
        return <div>Loading...</div>
    }
    if(animals.length===0){
        return <div>There is no Animal in the List.</div>
    }
    const animalList=animals.map((animal)=>{
        // return animal.startsWith("L")?<li key={animal}>{animal}</li>:null;  //condiitional Rendering
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;  //if result is true then execute second function after &&
    })

    return(
        <>
            <h1>Animals:</h1>
            {/* <ul>
                {animals.map((animal)=>{
                    return <li key={animal}>{animal}</li>
                })}
            </ul> */}
            <ul>{animalList}</ul>
        </>
    )
}