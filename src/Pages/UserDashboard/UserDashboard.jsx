import { useContext, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContex } from "../../Provider/AuthProvider";
import ManageOrderCard from "../../Layout/Main/Dashboard Pages/ManageOrderCard";
import { FaBoxes } from "react-icons/fa";
import UserOrderCard from "./UserOrder";
import { NavLink } from "react-router-dom";
import Navbar from '../../Shared/Navbar'
import Info from '../../Shared/Info'

const UserDashboard = () => {


    const axiosSecure = useAxiosSecure()
    const [search, setSearch] = useState('');
    const { user } = useContext(AuthContex)

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders/${user.email}`)

            console.log(res.data)
            return res.data
        }
    })

    // const confirmedOrders = orders.filter(item => item.status === 'confirm')
    // const pendingOrders = orders.filter(item => item.status === 'pending')

    // console.log(confirmedOrders)
    const allOrders = orders.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item._id.toLowerCase().includes(search);
    })





    return (
        <div className="bg-[#F7F7FA]">
            <div>
                <div className=" bg-white">
                    <Info></Info>
                    <div className="lg:w-3/4 mx-auto">

                        <Navbar></Navbar>
                    </div>
                </div>
                <div className="bg-green-600 min-h-48">
                    <h2 className="text-white py-10 font-medium text-center text-5xl">My Orders</h2>
                    <p className="text-center text-white">Manage my orders</p>
                </div>
            </div>

            {/* All Orders ======================================== */}
            <div className="pt-8">
                {
                    allOrders.map(item => <UserOrderCard item={item}></UserOrderCard>
                    )
                }
            </div>
        </div>
    )

}

export default UserDashboard