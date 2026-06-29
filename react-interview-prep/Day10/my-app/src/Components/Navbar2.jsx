import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    const navigate=useNavigate();

    return(
        <div className="nav">
            <div>
                <button onClick={()=>{navigate('/')}} >Return to Home</button>
                <button onClick={()=>navigate(-1)} >Previous Page</button>
                <button onClick={()=>navigate(+1)} >Next Page</button>
            </div>
        </div>
    )

}

export default Navbar;