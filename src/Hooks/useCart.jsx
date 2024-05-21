import { useContext } from "react"
import { AuthContex } from "../Provider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"


const useCart = () =>{
    //Tan stack query
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContex)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`)
            return res.data
        },

    })

    return [cart,  refetch]
}

export default useCart

