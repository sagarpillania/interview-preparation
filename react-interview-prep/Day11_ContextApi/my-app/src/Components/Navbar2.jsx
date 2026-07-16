// import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { themeDatacontext } from "../Context/ThemeContext";

function Navbar2(){
    // const navigate=useNavigate();
    function changeTheme(){
        (theme==="light")?setTheme("dark"):setTheme("light");
    }
    const [theme,setTheme] = useContext(themeDatacontext);
    return(
        <div className={theme,"nav"}>
            <div>
                {/* <button onClick={()=>{navigate('/')}} >Return to Home</button>
                <button onClick={()=>navigate(-1)} >Previous Page</button>
                <button onClick={()=>navigate(+1)} >Next Page</button> */}
                <button onClick={changeTheme}>Click to change</button>
                <h4 className={theme}>{theme}</h4>
            </div>
        </div>
    )

}

export default Navbar2;