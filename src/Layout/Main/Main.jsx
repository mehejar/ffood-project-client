import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const Main = () =>{
    return(
        <div>
            <div className="md:w-3/4 mx-auto">
                
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
           
        </div>
    )
}

export default Main;