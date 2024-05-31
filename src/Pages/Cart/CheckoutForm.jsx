import { useForm } from "react-hook-form";
import useCart from "../../Hooks/useCart";
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CheckOutForm = () => {

    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(AuthContex)
    const axiosSecure = useAxiosSecure()

    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.subtotal, 0)

    const onSubmit = async (data) => {

        // console.log(res.data);

        const order = {
            email: user.email,
            price: totalPrice,
            date: new Date(),
            cartId: cart.map(item => item._id),
            cartItem: cart.map(item => item.name),
            cartWeight: cart.map(item => item.weight),
            menuItemId: cart.map(item => item.menuId),
            name: data.name,
            address: data.address,
            phone: data.phone,

            status: 'pending'
        }
        // console.log(order)
        const orderRes = await axiosSecure.post('/orders', order)
        console.log('Added', orderRes.data)
        if (orderRes.data.result.insertedId) {
            reset()
            Swal.fire({
                position: "top",
                icon: "Order Placed Successfully",
                title: "Your order is placed, be patient for delivery",
                showConfirmButton: false,
                timer: 1500
            });


        }

    }

    return (

        <div>
            <div className="bg-green-600 min-h-48">
                <h2 className="text-white py-10 font-medium text-center text-5xl">Shopping cart</h2>
                <p className="text-center text-white">Happy Shopping</p>
            </div>
            <div className="w-1/3 mx-auto">
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Full Name*</span>
                        </label>
                        <input {...register("name")}
                            type="text"
                            placeholder="Write product name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input {...register("phone")}
                                type="email"
                                defaultValue={user.email}
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>
                        {/* price */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Phone*</span>
                            </label>
                            <input {...register("phone")}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>
                    </div>



                    {/* Recipe Details */}
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Full Address*</span>
                        </label>
                        <input {...register("address")}
                            type="text"
                            placeholder="Write your full address"
                            className="input  input-bordered w-full " />
                    </div>


                    <div>
                        <button type="submit" className="flex gap-2 items-center bg-white btn text-xl">Confirm Order</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckOutForm