import { FaUser } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import Swal from "sweetalert2"
import useCart from "../../../Hooks/useCart"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"

const UserCard = ({user}) =>{
    const {name, email, role, _id} = user
    const [, refetch] = useCart()
    const axiosSecure = useAxiosSecure()

    const userDelete = (_id) => {
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

                axiosSecure.delete(`/user/${_id}`)
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

    const addRole = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user to admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin him/her!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/user/admin/${_id}`)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.modifieddCount > 0){
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
                      
                    </div>
                    <div className="lg:w-[300px] lg:-ml-28 text-left">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        
                    </div>


                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="w-[100px] text-left">
                            <h2>{email}</h2>
                        </div>
                        <div className="lg:ml-36">
                        {
                user.role === 'admin' ? "Admin" : <button onClick={() => addRole(_id)} className="text-xl"><FaUser></FaUser></button>
            }
                        </div>
            {/* ml-24 */}
            
                        
                    </div>
                    <div className="w-[50px] text-left">
                    <button onClick={() => userDelete(_id)} className=" px-2   text-red-600 text-xl">Delete</button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </div>


    )
}

export default UserCard