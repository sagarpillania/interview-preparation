import { Link, Outlet } from "react-router-dom"
function Courses(){

    return(
        <>
        <div className="courses">
            <Link to='/courses/java'>Java</Link>
            <Link to='/courses/python'>Python</Link>
        </div>
        <Outlet/>
        </>
    )
}

export default Courses