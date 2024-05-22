import useProducts from "../../../use Componand/useProducts"
import ManageCard from "./ManageCard"

const ManagePorducts = () => {
    const [products] = useProducts()

    

    return (
        <div className="bg-white w-5/6 mt-20 mx-auto p-8 rounded-lg">

            {/* Table top */}
            <div className="py-2">
                
                <div className="flex gap-10 lg:gap-36">
                    <div className="w-[200px] text-left">
                        <h2 className="text-xl font-semibold">Product</h2>

                    </div>

                    <div className="w-[100px] text-left">
                        <h2>Weight</h2>
                    </div>
                    <div className="w-[100px]  text-left">
                        <h2>Category</h2>
                    </div>
                    <div className="w-[100px] text-left">
                        <h2>Price</h2>
                    </div>
                    <div className="w-[100px] text-left">
                        <h2>Action</h2>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            {/* --------------- */}
            <div>
                {
                    products.map((product, index) => <ManageCard index={index} product={product} ></ManageCard>)
                }
            </div>
        </div>
    )
}
export default ManagePorducts