import { FaCalendar, FaHome, FaPalette, FaShoppingCart } from "react-icons/fa"
import { FaCommentAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { RiMenuSearchFill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../../Hooks/useAdmin";
import logo from "../../assets/Logo.png"
import UserDashboard from "../../Pages/UserDashboard/UserDashboard";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    // const isAdmin = true

    
    return (
        <div>
            { isAdmin?
                <div className="flex">
                <div className=" w-[50px] lg:w-1/6 min-h-screen drop-shadow-xl bg-[#ffffff]">
                    <ul className="menu fixed mt-4 ml-8">
                        
                            
                                <>
                                    <li>
                                        <img className="w-[200px]" src={logo} alt="" />
                                        
                                    </li>
                                    <div className="divider"></div>
                                    {/* <li className="flex gap-2 text-left py-4 items-center uppercase" to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</li> */}
    
                                    <li><NavLink className="flex gap-2 my-4 items-center  uppercase" to="/dashboard/addItem"><ImSpoonKnife></ImSpoonKnife>Add Product</NavLink></li>
    
                                    <li><NavLink className="flex gap-2 py-4 items-center  uppercase" to="/dashboard/manageItem"><RiMenuSearchFill></RiMenuSearchFill>Manage Product</NavLink></li>
    
                                    <li><NavLink className="flex gap-2 py-4 items-center  uppercase" to="/dashboard/manageorders"><IoMdListBox></IoMdListBox>Manage Orders</NavLink></li>
    
                                    <li><NavLink className="flex gap-2 py-4 uppercase  items-center" to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink></li>
    
                                </> 
    
                                
                        
    
                        {/* common */}
                        <div className="divider"></div>
    
                        <li><NavLink className="flex gap-2 py-4 uppercase items-center" to="/"><FaHome></FaHome>Home</NavLink></li>
    
                        <li><NavLink className="flex gap-2 py-4 uppercase  items-center" to="/shop"><FaPalette></FaPalette>All Products</NavLink></li>
                    </ul>
    
                </div>
                {/* dashboard content */}
                <div className="bg-gray-100 w-4/5">
                    <Outlet></Outlet>
                </div>
            </div> : <UserDashboard></UserDashboard>
            // <NavLink className="flex gap-2 py-4 uppercase  items-center" to="/dashboard/myOrders"><FaUsers></FaUsers>My Orders</NavLink>
            }
        </div>
    )
}

export default Dashboard