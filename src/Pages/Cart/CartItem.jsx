import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const CartItem = ({ item }) => {


    const { name, price, image, weight, _id } = item
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleDelete = (id) =>{
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

                axiosSecure.delete(`/cart/${id}`)
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

                <div className="flex items-center gap-10 lg:gap-36">
                    <div>
                        <img className="w-[100px] rounded-md text-left" src='https://i.ibb.co/Y7HsxNv/Elach-33-08.jpg' alt="" />
                    </div>
                    <div className="lg:w-[300px] lg:-ml-28 text-left">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <h2>Weight: {weight} lbs</h2>
                    </div>


                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="w-[100px] text-left">
                            <h2>$ {price}</h2>
                        </div>
                        <div className="">
                            <input className="border-2 w-[100px] border-gray-400 px-2  py-1 rounded-md" type="password" placeholder="Wuantity" name="password" />
                        </div>
                    </div>
                    <div className="w-[50px] text-left">
                        <button onClick={() => handleDelete(_id)} className="text-xl">x</button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </div>


    )
}

export default CartItem