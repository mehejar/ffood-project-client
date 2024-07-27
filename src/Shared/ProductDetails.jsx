import { useLoaderData } from "react-router-dom"
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import { AuthContex } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


const ProductDetails = () => {
    const product = useLoaderData()
    const { user } = useContext(AuthContex);

    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const [quantities, setQuantity] = useState(1)

    const setDecrease = () => {
        quantities > 1 ? setQuantity(quantities - 1) : setQuantity(quantity)


    }
    const setIncrease = () => {
        quantities < 99 ? setQuantity(quantities + 1) : setQuantity(99)

    }

    const subtotal = quantities 

    const { name,
        _id,
        category,
        image,
        price,
        description,
        sub_category,
        weight, } = product;

    const handlecart = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                weight,
                quantity: quantities,
                subtotal: quantities*price,

            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)

                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: "top",
                            icon: "Added Successfully",
                            title: "Your item added to the card",
                            showConfirmButton: false,
                            timer: 1500
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

    return (
        <div className="my-16">
            <div className="flex flex-col my-8 px-4 lg:w-2/3 mx-auto lg:flex-row">
                <div className="lg:w-1/2">
                    <img className="max-w-[400px] max-h-[400px] mx-auto" src={image} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-5xl my-2 lg:my-8 font-bold">{name}</h2>
                    <h2 className="text-2xl my-2 lg:my-8 text-orange-500 font-semibold">${price}</h2>
                    <div className="flex my-2 lg:my-8 items-center">
                        <h2 className="border-2 p-3">Quantity</h2>
                        <h2 className="border-2 p-3">{weight}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex w-[150px] my-8 items-center gap-4">
                            <button className="font-semibold  text-4xl" onClick={() => setDecrease()}>-</button>
                            <h2 className=" px-8 border-2">{quantities}</h2>
                            <button className="font-semibold text-2xl" onClick={() => setIncrease()}>+</button>
                        </div>
                        <button
                            onClick={() => handlecart(product)}
                            className="bg-[#649C25]  hover: py-2 h-[45px] w-1/4 rounded-md hover:bg-orange-500 font-semibold text-white ">Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="lg:w-2/3 p-4 mx-auto">
                <h2 className="font-semibold text-xl">Description:</h2>
                <h2>{description}</h2>

            </div>
        </div>
    )
}

export default ProductDetails