import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useOrders = () =>{
    const axiosSecure = useAxiosSecure()
    const {data: orders } = useQuery({
        queryKey: ['orders'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/orders')
            console.log(res.data)
            return res.data
            
        }
    })
    return [orders]
}

export default useOrders