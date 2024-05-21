import { FaCalendar, FaHome, FaPalette, FaShoppingCart } from "react-icons/fa"
import { FaCommentAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { RiMenuSearchFill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () =>{
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-1/5 min-h-screen bg-[#D1A054]">
                <ul className="menu mt-16 ml-8">
                    {
                        isAdmin ?
                         <>
                            <li><NavLink className="flex gap-2 py-2 items-center font-serif uppercase" to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink></li>

                            <li><NavLink className="flex gap-2 my-2 items-center font-serif uppercase" to="/dashboard/addItem"><ImSpoonKnife></ImSpoonKnife>Add Product</NavLink></li>

                            <li><NavLink className="flex gap-2 py-2 items-center font-serif uppercase" to="/dashboard/manageItem"><RiMenuSearchFill></RiMenuSearchFill>Manage Product</NavLink></li>

                            <li><NavLink className="flex gap-2 py-2 items-center font-serif uppercase" to="/dashboard/manageBookings"><IoMdListBox></IoMdListBox>Manage Orders</NavLink></li>

                            <li><NavLink className="flex gap-2 py-2 uppercase font-serif items-center" to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink></li>
                        
                            </> :

                            <>
                            <h2> You are not admin</h2>
                            </>
                    }

                    {/* common */}
                    <div className="divider"></div>

                    <li><NavLink className="flex gap-2 py-2 uppercase font-serif items-center" to="/"><FaHome></FaHome>Home</NavLink></li>

                    <li><NavLink className="flex gap-2 py-2 uppercase font-serif items-center" to="/"><FaPalette></FaPalette> Menu</NavLink></li>
                </ul>

            </div>
            {/* dashboard content */}
            <div className="bg-gray-100 w-4/5">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard