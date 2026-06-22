
function Card({name,age}){

    return (
        <>
            <div className="card">
                <img src="https://plus.unsplash.com/premium_photo-1709399200520-89f2f5d46dbd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
                <h1>{name}, {age}</h1>
                <p>Hi, I am a Front End Developer</p>
                <button> Click to Know More</button>
            </div>
        </>
    )
}

export default Card;