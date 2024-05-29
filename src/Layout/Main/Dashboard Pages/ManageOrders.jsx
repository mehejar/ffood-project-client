import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import ManageOrderCard from "./ManageOrderCard"
import { FaBoxes } from "react-icons/fa";
import OrdersNav from "./OrdersNav";
import { useState } from "react";


const ManageOrders = () => {

    const axiosSecure = useAxiosSecure()
    const [search, setSearch] = useState('');

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/orders')

            console.log(res.data)
            return res.data
        }
    })

    const confirmedOrders = orders.filter(item => item.status === 'confirm')
    const pendingOrders = orders.filter(item => item.status === 'pending')

    // console.log(confirmedOrders)
    const allOrders = orders.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item._id.toLowerCase().includes(search);
    })

    



    return (
        <div className="bg-[#F7F7FA]">
            <div className="w-5/6 mx-auto">
                <h2 className="text-4xl my-8">Orders</h2>

                <div className="flex gap-8">
                    {/* ===All Orders */}
                    <div className="flex gap-3 w-[250px] bg-white rounded-lg border-2 p-2">
                        <h2 className="p-3 rounded-md text-3xl bg-purple-200 text-purple-700"><FaBoxes></FaBoxes></h2>
                        <div>

                            <h2>All orders</h2>
                            <h2 className="text-3xl">{orders.length}</h2>
                        </div>
                    </div>
                    {/* ===Confirmed Orders */}
                    <div className="flex gap-3 w-[250px] bg-white rounded-lg border-2 p-2">
                        <h2 className="p-3 rounded-md text-3xl bg-green-200 text-green-600"><FaBoxes></FaBoxes></h2>
                        <div>

                            <h2>Confirmed Orders</h2>
                            <h2 className="text-3xl">{confirmedOrders.length}</h2>
                        </div>
                    </div>
                    {/* ===Pendings Orders */}
                    <div className="flex gap-3 w-[250px] bg-white rounded-lg border-2 p-2">
                        <h2 className="p-3 rounded-md text-3xl bg-red-100 text-red-700"><FaBoxes></FaBoxes></h2>
                        <div>

                            <h2>Pending Orders</h2>
                            <h2 className="text-3xl">{pendingOrders.length}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8 mx-auto w-5/6'>
           <input className=" p-3 border-2 rounded-md mx-auto w-full max-w-3xl" onChange={(e) => setSearch(e.target.value)}
                placeholder='Search by Order ID' type="search" />
           </div>


            {/* All Orders ======================================== */}
            <div className="pt-8">
                {
                    allOrders.map(item => <ManageOrderCard item={item}></ManageOrderCard>
                    )
                }
            </div>
        </div>
    )
}

export default ManageOrders