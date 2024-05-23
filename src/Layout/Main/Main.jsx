import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const Main = () =>{
    return(
        <div>
            <div className="md:w-3/4 mx-auto">
                
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    )
}

export default Main;