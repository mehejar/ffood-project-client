import { Link, NavLink } from "react-router-dom"
import logo from "../../src/assets/Logo.png"
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import useCart from "../Hooks/useCart";
import { RiLoginBoxLine } from "react-icons/ri";



const Navbar = () => {

    const { logOut, user } = useContext(AuthContex)
    const [cart] = useCart()

    const handleSignOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log(error)
                // An error happened.
            });
    }

    const navLinks = <>

        <NavLink to='/'><li className="text-lg font-semibold"><a>Home</a></li></NavLink>
        <NavLink to='/shop'><li className="text-lg  font-semibold"><a>All Category</a></li></NavLink>
        <NavLink to='/aboutus'><li className="text-lg font-semibold"><a>About Us</a></li></NavLink>
        <NavLink to='/contact'><li className="text-lg font-semibold"><a>Contact</a></li></NavLink>

        {
            user ? <>
                <button onClick={handleSignOut} className="flex gap-2 items-center text-lg font-semibold"><RiLoginBoxLine></RiLoginBoxLine>Sign Out</button>
                
        <NavLink to='/dashboard'><li className="text-lg font-semibold"><a>Dashboard</a></li></NavLink>
            </> :
                <NavLink className={'flex items-center'} to={'/login'}><button className="flex gap-2 text-lg font-semibold  items-center"><RiLoginBoxLine></RiLoginBoxLine>Login</button></NavLink>
        }
        
    </>
    return (
        <div className="navbar z-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        
                    </ul>
                </div>
                <a className=""><div>
                    <Link><img className="w-36 lg:w-3/5" src={logo} alt="" /></Link>
                </div></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/cart'><div className="indicator mr-10">
                    <span className="indicator-item badge badge-secondary">{cart.length}</span>
                    
                    <button className="text-2xl"><MdShoppingCart></MdShoppingCart></button>
                </div></NavLink>
                
            </div>
            
        </div>
    )
}

export default Navbar