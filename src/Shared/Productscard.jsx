import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContex } from "../Provider/AuthProvider"
import Swal from "sweetalert2"
import useAxiosSecure from "../Hooks/useAxiosSecure"
import useCart from "../Hooks/useCart"

const ProductsCard = ({ item }) => {
    const { name, image, price, weight, description, _id} = item
      
    const {user} = useContext(AuthContex);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handlecart = (item) => {
        if( user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                weight

            }
            axiosSecure.post('/cart', cartItem)
            .then(res =>{
                console.log(res.data)
                
                if(res.data.insertedId){
                    refetch()
                    Swal.fire({
                        position: "top",
                        icon: "Added Successfully",
                        title: "Your item added to the card",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not login",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              });
        }
        console.log(item, user.email);
    }

    return (
        <div>
            <div className="card  bg-base-100 border-2 border-gray-100">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <p className="pr-10 ">${price}</p>
                        <p>{weight} lbs</p>
                    </div>
                    <div className="card-actions">
                        <button
                            onClick={() => handlecart(item)}
                            className="btn btn-primary">Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard