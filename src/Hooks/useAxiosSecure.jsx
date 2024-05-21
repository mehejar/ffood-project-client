// export const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5000'
// })

import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () =>{
    return axiosSecure;
}

export default useAxiosSecure