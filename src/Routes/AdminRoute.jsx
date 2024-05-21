import { useContext } from "react"
import useAdmin from "../Hooks/useAdmin"
import { AuthContex } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const AdminRoute = ({children}) =>{
const [isAdmin, isAdminLoading] = useAdmin()
const {user, loading} = useContext(AuthContex)
const location = useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-ring loading-lg flex justify-center"></span>
    }

    if(user && isAdmin){
        return children;
    
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
}

export default AdminRoute