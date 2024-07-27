import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Info from "../../Shared/Info";

const Main = () => {
    return (
        <div>
            <div className="md:w-3/4 mx-auto">
                
                <Navbar></Navbar>
            </div>
            <div className="divider -mt-1 -mb-2">
            </div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}

export default Main;