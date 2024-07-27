import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";



const Info = () => {
    return (
        <div className=" bg-blue-500 px-5">
            <div className="lg:w-2/3 mx-auto flex gap-4 justify-between p-2 px-4">
                <div className="flex flex-col lg:flex-row">
                    <h2 className="flex gap-2 text-sm items-center text-white"><FaPhone></FaPhone>929-471-5485, <span> </span></h2>
                    <h2 className="text-white text-sm">347-844-9037</h2>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <h2 className="flex gap-2 text-sm items-center text-white"><FaLocationDot></FaLocationDot>1101 Flushing Avenue,<span> </span> </h2>
                    <h2 className="text-white text-sm">Brooklyn 11237.</h2>

                </div>
            </div>

        </div>
    )
}

export default Info