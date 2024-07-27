import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContex } from "../Provider/AuthProvider"
import Swal from "sweetalert2"
import useAxiosSecure from "../Hooks/useAxiosSecure"
import useCart from "../Hooks/useCart"

const ProductsCard = ({ item }) => {
    const { name, image, price, weight, description, _id } = item

    const { user } = useContext(AuthContex);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handlecart = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                weight,
                quantity: 1,
                subtotal: price,

            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)

                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: "Added to the cart ",
                            text: `${name}Added`,
                            icon: "success"
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        console.log(item, user.email);
    }
    // to={`product/${_id}`
    return (

        <div className="">
            <div>
                <div className=" flex bg-gray-100 flex-col rounded-xl hover:border-green-500 hover:border-2 p-2 border-[#649C25] border-opacity-20 lg:w-[260px] ">
                    <Link to={`product/${_id}`} >
                        <div className="bg-white rounded-lg lg:min-w-[240px]">
                            <img className="lg:max-w-[240px] bg-white rounded-lg lg:max-h-[200px] max-w-[140px] lg:p-4 p-2 max-h-[150px] mx-auto" src={image} alt="" />
                            {/* <div className="divider"></div> */}
                        </div>
                    </Link>
                    <div className="py-3">
                        <Link to={`product/${_id}`}>

                            <div className="flex-col py-0 px-3 justify-between">
                                <div>
                                    {
                                        name.length > 15 ? <p className="font-semibold">{name.slice(0, 15)} ...</p> : <p className="font-semibold">{name}</p>
                                    }

                                </div>
                                <h2 className=" text-xl font-semibold text-orange-500">${price}</h2>
                                
                                <h2 className="pb-3 "><span className="text-gray-400 "></span> {weight}</h2>
                            </div>
                        </Link>
                        <div>
                            {/* <button
                                onClick={() => handlecart(item)}
                                className="bg-[#649C25] font-semibold flex-grow  hover: py-2 w-full rounded-md hover:bg-orange-500 text-white  ">Add to Cart
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=" bg-white border-2 border-green-200">
                <div className="w-[300px] mx-auto">
                    <img src={image} alt="Image" className="rounded-xl w-[300px] mx-auto" />
                </div>
                <div className="divider"></div>
                <div className=" px-7 pb-4 items-center text-center">
                    <h2 className="font-semibold">{name}</h2>
                    <p>{description}</p>
                    <div className="flex font-semibold px-3 py-4 justify-between">
                        <p className="pr-10 font-bold py-2 text-2xl ">${price}</p>
                        <p className="py-2">{weight}</p>
                    </div>
                    <div className="">
                        <button
                            onClick={() => handlecart(item)}
                            className="bg-green-500 py-2 px-20 rounded-md text-white  ">Add to Cart
                        </button>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default ProductsCard