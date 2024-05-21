// export const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5000'
// })

import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () =>{

    const { logOut } = useContext(AuthContex)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('stopped by interseptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)


    });
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in interseptors', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })
    
    return axiosSecure;
}

export default useAxiosSecure