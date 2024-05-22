import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useProducts = () =>{
    const axiosSecure = useAxiosSecure()
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products')
            return res.data
        },

    })

    return [products,  refetch]

}

export default useProducts