import { useParams } from "react-router-dom"

function DynamicRouting(){
    const params=useParams();
    return(
        <h2>{params.id} is Dynamic Routing</h2>
    )
}

export default DynamicRouting