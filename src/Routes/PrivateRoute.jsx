import { useContext } from "react"

import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) =>{
    const {user, loading} = useContext(AuthContex)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-ring loading-lg flex justify-center"></span>
    }

    if(user){
        return children;
    
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
}

export default PrivateRoute;