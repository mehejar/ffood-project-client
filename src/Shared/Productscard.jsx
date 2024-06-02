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

        <div>
            <div>
                <div className="border-2 p-4 hover:shadow-2xl hover:border-green-500 border-gray-300">
                    <Link to={`product/${_id}`} >
                        <div>
                            <img className="w-[200px] mx-auto" src={image} alt="" />
                            <div className="divider"></div>
                        </div>
                    </Link>
                    <div>
                        <Link to={`product/${_id}`}>
                            <div>
                                <h2 className="text-lg pt-3 px-3 font-semibold text-gray-600 text-left">{name}</h2>
                            </div>
                            <div className="flex py-3 px-3 justify-between">
                                <h2 className=" font-semibold">${price}.00</h2>
                                <h2>{weight}</h2>
                            </div>
                        </Link>
                        <div>
                            <button
                                onClick={() => handlecart(item)}
                                className="bg-green-500 hover: py-2 w-full rounded-md hover:bg-orange-500 text-white  ">Add to Cart
                            </button>
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