import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"

const ManageOrders = () => {

    const axiosSecure = useAxiosSecure()

    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/orders')

            console.log(res.data)
            return res.data
        }
    })
    


    return (
        <div>
           {
            orders.map(item => <>
            <h2>{item.name}</h2>
            <h2>{item.cartId}</h2>
            </>)
           }
        </div>
    )
}

export default ManageOrders