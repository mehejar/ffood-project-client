import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const SignUp = () => {

    const { createuser } = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const from = location.state?.from?.pathname || '/';
    console.log('state in the location login page', location.state)

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password)

        createuser(email, password)
            .then(result => {

                const userInfo = {
                    email,
                    password,
                    name,

                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log(result.user)
                            navigate(from, { replace: true })
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })



            })
    }

    return (
        <div className="flex flex-col md:flex-row-reverse login-bg lg:justify-center items-center lg:gap-x-28 lg:mx-auto">
            <div className="py-20 lg:py-60">
                <div>
                    <h2 className="text-3xl font-bold mb-8">SignUp Now</h2>
                </div>
                <form onSubmit={handleSignUp} className="flex flex-col gap-5">

                    <input className="border-2 border-gray-400 px-4 w-[300px] py-2 rounded-md" type="text" placeholder="Enter Your Name" name="name" />

                    <input className="border-2 border-gray-400 px-4 w-[300px] py-2 rounded-md" type="email" placeholder="Enter Email" name="email" />

                    <input className="border-2 border-gray-400 px-4 w-[300px] py-2 rounded-md" type="password" placeholder="Enter Password" name="password" />

                    {/* <div>
                        <LoadCanvasTemplate />

                        <input className="border-2 border-gray-400 px-4 w-[300px] py-2 rounded-md" type="text" placeholder="Type captcha" name="captcha" />

                    </div> */}


                    <input className="border-2 text-white font-semibold border-gray-400 px-4 w-[300px] py-2 rounded-md bg-[#BB8506]" type="submit" value="Sign Up" />

                    <div className="">
                        <button className="border-2 text-blue-500 font-semibold border-gray-400 flex items-center justify-center gap-3 px-4 w-[300px] py-2 rounded-md bg-gray-200"><FaGoogle></FaGoogle> Google</button>
                    </div>

                </form>
                <div className="mt-6">
                    <h2>You already have an Account <Link to='/login' className="text-blue-500 font-semibold">Login</Link></h2>
                </div>
            </div>
            <div>
                <img src='' alt="" />
            </div>


        </div>
    )
}

export default SignUp