import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () =>{

    const {login} = useContext(AuthContex)

    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    console.log('state in the location login page', location.state)

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        login(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
               
            })
            .catch(error => {
                console.log(error.message)
            })

        // login(email, password)
        // .then(result =>{
        //     const user = result.user;
            
        //     console.log(user)
        // })
    }

    return(
        <div className="flex flex-col md:flex-row-reverse login-bg lg:justify-center items-center lg:gap-x-28 lg:mx-auto">
            <div className="py-20 lg:py-60">
                <div>
                    <h2 className="text-3xl font-bold mb-8">Login Now</h2>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-5">

                    <input className="border-2 border-gray-400 px-4 w-[300px] py-2 rounded-md" type="email" placeholder="Enter Email" name="email" />

                    <input className="border-2 border-gray-400 px-4 w-[300px] py-2 rounded-md" type="password" placeholder="Enter Password" name="password" />

                    {/* <div>
                        <LoadCanvasTemplate />

                        <input className="border-2 border-gray-400 px-4 w-[300px] py-2 rounded-md" type="text" placeholder="Type captcha" name="captcha" />

                    </div> */}


                    <input className="border-2 text-white font-semibold border-gray-400 px-4 w-[300px] py-2 rounded-md bg-[#BB8506]" type="submit" value="Login" />

                    <div className="">
                        <button className="border-2 text-blue-500 font-semibold border-gray-400 flex items-center justify-center gap-3 px-4 w-[300px] py-2 rounded-md bg-gray-200"><FaGoogle></FaGoogle> Google</button>
                    </div>

                </form>
                <div className="mt-6">
                    <h2>You Have No Account <Link to='/signup' className="text-blue-500 font-semibold">Sign Up</Link></h2>
                </div>
            </div>
            <div>
                <img src='' alt="" />
            </div>


        </div>
    )
}

export default Login