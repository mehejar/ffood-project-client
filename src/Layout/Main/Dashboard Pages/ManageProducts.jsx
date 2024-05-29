import { useState } from "react";
import useProducts from "../../../use Componand/useProducts"
import ManageCard from "./ManageCard"

const ManagePorducts = () => {
    const [products] = useProducts()
    const [search, setSearch] = useState('');
    const allProducts = products.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
    })



    return (
        <div className=" w-5/6 mt-20 mx-auto rounded-lg">
            <h2 className="my-16 text-4xl">Manage Products</h2>
            <div className='my-8'>
                <input className=" p-3 border-2 rounded-md mx-auto w-full max-w-3xl" onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search by Order ID' type="search" />
            </div>
            <div className="bg-white p-8 rounded-lg">



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
                        allProducts.map((product, index) => <ManageCard index={index} product={product} ></ManageCard>)
                    }
                </div>
            </div>
        </div>
    )
}
export default ManagePorducts