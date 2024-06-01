import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdPending } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";





const ManageOrderCard = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const { cartItem, _id, status, name,quantity, cartQty, cartWeight, date, address, phone, email } = item

    const orderStatus = (_id) => {
        console.log('status')
        if(status === "cancel"){
            console.log('you cannot confirm the order')
        }
        else{
            axiosSecure.patch(`/orders/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifieddCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Confirmed Order!",
                        text: `Order Id${_id}`,
                        icon: "success"
                    });
                }
            })
        }
    }


    return (
        <div className="">
            <div className="bg-white items-center hover:bg-blue-50 flex p-6 w-5/6 mx-auto">

                <div className="w-4/5">
                    <div className="flex gap-10">
                        <div className="w-[300px]">

                            <h2 className="flex text-lg font-semibold items-center gap-2">#{_id}</h2>
                        </div>
                        <div className="w-[200px]">
                            <h2 className="flex text-lg items-center gap-2"><FaUserCircle></FaUserCircle>{name}</h2>

                            <h2 className="flex text-lg  items-center gap-2"
                            ><FaLocationDot></FaLocationDot>{address}</h2>
                        </div>
                        <div className="w-[200px]">
                            
                            <h2 className="text-lg ">{phone}</h2>
                            <h2 className="text-lg ">{email}</h2>
                        </div>

                    </div>

                    <div className="mt-4">
                        <h2><span className="font-semibold">Products:</span> {cartItem}</h2>
                        <h2><span className="font-semibold">Weight:</span> {cartWeight}</h2>
                        <h2><span className="font-semibold">Quantity:</span> {cartQty}</h2>
                    </div>
                </div>
                <div className="w-1/5">
                   
                    {
                        status === 'confirm' ? <button className="py-1 px-2 text-white font-semibold bg-green-500 rounded-md flex items-center gap-2"><RiVerifiedBadgeFill></RiVerifiedBadgeFill> Confirmed</button> : <button onClick={() => orderStatus(_id)} className="py-1 px-2 text-white font-semibold bg-red-600 rounded-md flex items-center gap-2"><MdPending></MdPending> Pending</button>
                    }

                </div>
                <div>
                    <button onClick={() => document.getElementById('my_modal_4').showModal()} className="py-1 px-2 text-gray-700 border-2 font-semibold bg-gray-50 rounded-md flex items-center gap-2">Details</button>
                    {/* ============================ modal ======================= */}
                    <dialog id="my_modal_4" className="modal w-2/3 mx-auto">
                        <div className="modal-box w-2/3 max-w-5xl">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-bold text-lg">#{_id}</h3>
                                    <h3 className=" text-lg flex items-center gap-2"><FaUserCircle></FaUserCircle>{name}</h3>
                                </div>
                                <h2><span className="font-semibold">Date and Time:</span> {date}</h2>
                            </div>
                            <div className="divider"></div>
                            <h2><span className="font-semibold">Address:</span> {address}</h2>
                            <h2><span className="font-semibold">Contact:</span> {phone}</h2>
                            <h2><span className="font-semibold">Email:</span> {email}</h2>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>


            </div>
            <div className="divider -my-3 w-5/6 mx-auto"></div>
        </div>

    )
}

export default ManageOrderCard