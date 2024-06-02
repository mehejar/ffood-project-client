import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";


const CartItem = ({ item }) => {




    const { name, price, image, weight, _id, quantity } = item
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const [quantities, setQuantity] = useState(quantity)

    const setDecrease = () => {
        quantities > 1 ? setQuantity(quantities - 1) : setQuantity(quantity)
        const amount = {
            totalQuantity: quantities,
            subtotal: quantities * price,

        }
        axiosSecure.patch(`/cart/${_id}`, amount)
            .then(res => {
                refetch()
                // Swal.fire({
                //     title: "Added Products!",
                //     text: "You added a new product",
                //     icon: "success"
                //   });
                
                console.log(res.data)
            })
    }
    const setIncrease = () => {
        quantities < 99 ? setQuantity(quantities + 1) : setQuantity(99)
        const amount = {
            totalQuantity: quantities,
            subtotal: quantities * price,
        }
        axiosSecure.patch(`/cart/${_id}`, amount)
            .then(res => {
                refetch()
                console.log(res.data)
            })
    }

    console.log(quantity)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }

    return (


        <div>


            <div className="py-8">

                <div className="flex items-center gap-10 lg:gap-36">
                    <div>
                        <img className="w-[100px] rounded-md text-left" src={image} alt="" />
                    </div>
                    <div className="lg:w-[300px] lg:-ml-28 text-left">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <h2>Weight: {weight}</h2>
                    </div>


                    <div className="flex flex-col items-center gap-5 lg:flex-row">
                        <div className="w-[100px] text-left">
                            <h2>${price}</h2>
                        </div>
                        <div className="flex w-[150px] items-center gap-4">
                            <button className="font-semibold text-4xl" onClick={() => setDecrease()}>-</button>
                            <h2>{quantities}</h2>
                            <button className="font-semibold text-2xl" onClick={() => setIncrease()}>+</button>
                        </div>
                        <div className="w-[100px] text-left">
                            <h2>${quantities * price}</h2>
                        </div>
                    </div>
                    <div className="w-[50px] text-left">
                        <button onClick={() => handleDelete(_id)} className="text-xl"><RiDeleteBack2Line></RiDeleteBack2Line></button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </div>


    )
}

export default CartItem