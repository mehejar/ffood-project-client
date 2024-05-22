import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useProducts from "../../../use Componand/useProducts";
import { Link } from "react-router-dom";



const ManageCard = ({ product, index }) => {

    const {_id, name, weight, image, price, category } = product
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useProducts()

    const removeProduct = (_id) => {
        console.log('clicked')
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/products/${_id}`)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
                
              
            }
          });
    }
    return (
        <div>


            <div className="py-8">

            <div className="flex gap-10 items-center lg:gap-36">
                    <div className="w-[200px] flex items-center gap-3 text-left">
                        <h2>{index + 1}.</h2>
                        <img className="w-[75px]" src={image} alt="" />
                        <h2 className="text-base font-semibold">{name}</h2>

                    </div>

                    <div className="w-[100px] text-left">
                        <h2>{weight}</h2>
                    </div>
                    <div className="w-[100px]  text-left">
                        <h2>{category}</h2>
                    </div>
                    <div className="w-[100px] text-left">
                        <h2>{price}</h2>
                    </div>
                    <div className="w-[100px] flex gap-4 text-left">
                        {/* actions button */}
                        <Link to={`/dashboard/updateproduct/${_id}`}><button className="w-[40px] text-lg"><RiEdit2Fill></RiEdit2Fill></button></Link>
                        <button onClick={() => removeProduct(_id)} className="w-[40px] text-lg text-red-700"><RiDeleteBin2Fill></RiDeleteBin2Fill></button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </div>
    )
}

export default ManageCard