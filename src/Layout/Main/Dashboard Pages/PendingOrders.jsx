import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import ManageOrderCard from "./ManageOrderCard"
import { defer } from "react-router-dom"

const PendingsOrder = () =>{
    const axiosSecure = useAxiosSecure()

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/orders')

            console.log(res.data)
            return res.data
        }
    })

    const pendings = orders.filter(item => item.status === 'pending')
    return(
        <div>
            <div>
                <h2>Pending Orders</h2>
            </div>
            <div>
            {
                pendings.map(item => <ManageOrderCard item={item}></ManageOrderCard>)
            }
        </div>
        </div>

    )
}

export default PendingsOrder