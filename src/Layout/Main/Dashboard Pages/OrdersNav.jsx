import { NavLink } from "react-router-dom"

const OrdersNav = () =>{
    return(
        <div className="w-5/6 mx-auto mt-16">
            <div className="flex gap-8">
            <NavLink to={'pendings'}>Pending</NavLink>
            
            <NavLink to={'dashboard/manageorders/confirmed'}>Conmfirmed</NavLink>
        </div>
        <div className="divider"></div>
        </div>
    )
}

export default OrdersNav