import { Link } from "react-router-dom"
import useCart from "../../Hooks/useCart"
import CartItem from "./CartItem"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import { useContext } from "react"
import { AuthContex } from "../../Provider/AuthProvider"

const Cart = () => {



    const [cart] = useCart()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice)






    return (
        <div className="">
            <div className="bg-green-600 min-h-48">
                <h2 className="text-white py-10 font-medium text-center text-5xl">Shopping cart</h2>
                <p className="text-center text-white">Happy Shopping</p>
            </div>
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
            <div>
                <div className="w-2/3 mx-auto my-4">
                    <h2 className="text-lg font-semibold">Total Orders: {cart.length}</h2>
                    <h2 className="text-lg font-semibold">Total Price ${totalPrice}</h2>
                    {
                        <Link to="/checkout"><button className="p-2 text-white bg-orange-400 rounded">Check Out</button></Link>
                    }
                </div>
            </div>
        </div>
    )


}

export default Cart