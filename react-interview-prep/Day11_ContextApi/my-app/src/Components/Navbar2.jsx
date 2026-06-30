import { Link, useNavigate } from "react-router-dom";

function Navbar(props){
    const navigate=useNavigate();
    function changeTheme(){
        props.setTheme("dark");
    }
    return(
        <div className="nav">
            <div>
                <button onClick={()=>{navigate('/')}} >Return to Home</button>
                <button onClick={()=>navigate(-1)} >Previous Page</button>
                <button onClick={()=>navigate(+1)} >Next Page</button>
                <button onClick={changeTheme}>Change Theme</button>
                <h3>{props.theme}</h3>
            </div>
        </div>
    )

}

export default Navbar;