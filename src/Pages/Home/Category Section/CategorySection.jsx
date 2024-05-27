import { Link } from "react-router-dom"
import Title from "../../../Shared/Title"
import catImage1 from '../../../assets/cat--08.png'
import catImage2 from '../../../assets/cat--09.png'
import catImage3 from '../../../assets/cat--10.png'
import catImage4 from '../../../assets/cat--11.png'
import catImage5 from '../../../assets/cat--12.png'
import catImage6 from '../../../assets/cat--13.png'

const CategorySection = () => {
    return (
        <div className="lg:w-3/4 px-8 my-28 mx-auto">
            <div className="mb-8">
                <Title
                    title={'Category'}
                    subTitle={'Choose best for your family and loved one'}
                ></Title>
            </div>
            <div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                    <img className="w-full rounded-lg lg:w-2/4 ml-1 lg:ml-0" src={catImage1} alt="" />

                    <div className="flex gap-2 lg:gap-5">
                        <img className="w-1/2 rounded-lg" src={catImage3} alt="" />
                        <img className="w-1/2 rounded-lg" src={catImage4} alt="" />
                    </div>

                </div>
                <div className="flex flex-col mt-2 lg:mt-5 lg:flex-row gap-2 lg:gap-5">
                    <div className="flex gap-2 lg:gap-5">
                        <img className="w-2/4 rounded-lg" src={catImage5} alt="" />

                        <img className="w-2/4 rounded-lg" src={catImage6} alt="" />
                    </div>
                    <img className="w-full rounded-lg ml-1 lg:ml-5 lg:w-2/4" src={catImage2} alt="" />

                </div>
            </div>

            <div className="text-center mt-8">
            <Link to={'/shop/category'}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
            </div>


        </div>
    )
}

export default CategorySection