import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryHeading = ({ title }) => {
    return (
        <div className="bg-[#80ff9e] bg-opacity-10 rounded-lg lg:w-4/5 mx-auto">
            <div className="flex  px-4 lg:px-8 py-4  justify-between">
                <h2 className="font-bold text-3xl">{title}</h2>
                <Link to={'/shop'}><button className="py-1 flex gap-2 items-center px-3 rounded-md bg-white">View All<FaArrowRight></FaArrowRight></button></Link>
            </div>
        </div>
    )
}

export default CategoryHeading