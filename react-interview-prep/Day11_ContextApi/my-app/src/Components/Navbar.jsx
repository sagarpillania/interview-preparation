import { Link } from "react-router-dom";
function Navbar(){

    return(
        <div className="nav">
            <h3>Sagar'S Website</h3>
            <div>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/about'><h3>About</h3></Link>
                <Link to='/courses'><h3>Courses</h3></Link>
                <Link to='/contact'><h3>Contact</h3></Link>
            </div>
        </div>
    )

}

export default Navbar;