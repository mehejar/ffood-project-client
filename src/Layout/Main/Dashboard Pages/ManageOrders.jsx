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
        <h2>{orders.length}</h2>
    )
}

export default ManageOrders