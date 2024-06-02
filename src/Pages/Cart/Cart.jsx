import { Link } from "react-router-dom"
import useCart from "../../Hooks/useCart"
import CartItem from "./CartItem"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import { useContext, useState } from "react"
import { AuthContex } from "../../Provider/AuthProvider"
import Lottie from 'lottie-react'
import cartEmptyAnimation from '../../assets/Animation - 1717247878046.json'

const Cart = () => {



    const [cart] = useCart()


    const totalPrice = cart.reduce((total, item) => total + item.subtotal, 0)
    console.log(totalPrice)






    return (
        <div className="">
            <div className="bg-green-600 min-h-48">
                <h2 className="text-white py-10 font-medium text-center text-5xl">My Cart</h2>
                <p className="text-center text-white">Happy Shopping</p>
            </div>
            { !cart.length? <>
            <div>
            
            <Lottie className="w-[400px] mx-auto mt-20  mb-8" animationData={cartEmptyAnimation}></Lottie>
            <h2 className="text-5xl text-gray-500 pb-16 font-semibold text-center">Cart is Empty</h2>
            </div>

            </> :
            <>
                <div className="w-full mx-auto lg:w-2/3">


                    <div className="bg-white p-8 rounded-lg">

                        {/* Table top */}
                        <div className="py-8">
                            <img className="w-[100px] text-left" src="" alt="" />
                            <div className="flex gap-10 lg:gap-36">
                                <div className="w-[200px] text-left">
                                    <h2 className="text-xl font-semibold">Product</h2>

                                </div>

                                <div className="w-[100px] lg:ml-64 text-left">
                                    <h2>Price</h2>
                                </div>
                                <div className="w-[100px] lg:-ml-36  text-left">
                                    <h2>Quantity</h2>
                                </div>
                                <div className="w-[100px] text-left">
                                    <h2></h2>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        {/* --------------- */}
                        <div>
                            {
                                cart.map(item => <CartItem item={item}></CartItem>)
                            }
                        </div>
                    </div>

                </div>
                <div className="mb-10">
                    <div className="w-2/3 mx-auto flex flex-col gap-3 my-4">
                        <div className="flex gap-8">
                            <h2 className="text-lg ">Total Products:</h2>
                            <h2 className="text-lg ">{cart.length}</h2>
                        </div>
                        <div className="flex gap-8">
                            <h2 className="text-lg ">Subtotal:</h2>
                            <h2 className="text-lg  ">${totalPrice}.00</h2>
                        </div>
                        {
                            <Link to="/checkout"><button className="p-2 px-12 text-white bg-green-600 rounded-md">Check Out</button></Link>
                        }
                    </div>
                </div>
            </>
            }
        </div>
    )


}

export default Cart