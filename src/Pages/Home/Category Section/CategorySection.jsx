import Title from "../../../Shared/Title"

const CategorySection = () =>{
    return(
        <div className="lg:w-4/5 px-8 my-28 mx-auto">
            <div className="mb-8">
                <Title
                    title={'Category'}
                    subTitle={'Choose best for your family and loved one'}
                ></Title>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/2 rounded-lg h-[200px] bg-black">
                    {/* image 1 */}
                </div>
                <div className="lg:w-1/2 flex gap-4">
                    <div className="w-1/2 rounded-lg bg-black h-[200px]">
                        {/* image 2 */}
                    </div>
                    <div className="w-1/2 rounded-lg bg-black h-[200px]">
                        {/* image 3 */}
                    </div>
                    
                </div>
            </div>
            {/* second style */}
            <div className="flex flex-col lg:flex-row-reverse mb-8 mt-4 gap-4">
                <div className="lg:w-1/2 rounded-lg h-[200px] bg-black">
                    {/* image 1 */}
                </div>
                <div className="lg:w-1/2 flex gap-4">
                    <div className="w-1/2 rounded-lg bg-black h-[200px]">
                        {/* image 2 */}
                    </div>
                    <div className="w-1/2 rounded-lg bg-black h-[200px]">
                        {/* image 3 */}
                    </div>
                    
                </div>
            </div>
            <div className="text-center">
                <button className="btn">See all category</button>
            </div>
            

        </div>
    )
}

export default CategorySection