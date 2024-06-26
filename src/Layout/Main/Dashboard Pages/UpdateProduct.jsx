import { useLoaderData } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import Swal from "sweetalert2"


const image_hosting_key = 'e4461ef5124ec2b2f2efc56f53ded9cb'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProduct = () =>{

    const product = useLoaderData()
    const {name,
        _id,
        category,
        price,
        description,
        sub_category,
        weight,} = product;

    const { register, handleSubmit, reset } = useForm()
    console.log(product)
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
   
    const onSubmit = async (data) => {
        // console.log(data)
        // image hosting api
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            const product = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                description: data.recipe,
                sub_category: data.sub_category,
                weight: data.weight,
                image: res.data.data.display_url
            }
            console.log(product)
            const productRes = await axiosSecure.patch(`/products/${_id}`, product)
            console.log('Added', productRes.data)
            if (productRes.data.modifiedCount > 0) {
                reset()
                Swal.fire({
                    position: "top",
                    icon: "Update Successfully",
                    title: "Your item updated to the list",
                    showConfirmButton: false,
                    timer: 1500
                });


            }
        }
    }

    return(
        <div>
            <div className="w-2/4 mx-auto">
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Product Title*</span>
                        </label>
                        <input {...register("name")}
                            type="text"
                            defaultValue={name}
                            placeholder="Write product name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category")} className=" select select-bordered w-full">
                                <option disabled selected>Choose A Food Category</option>
                                <option value="rice">Rice</option>
                                <option value="flour">Flour</option>
                                <option value="pulses">Pulses</option>
                                <option value="oilGhee">Oil & Ghee</option>
                                <option value="noodleSoup">Noodles & Soup</option>
                                <option value="tea">Tea</option>
                                <option value="Spices">Spices</option>
                                <option value="Snacks">Snacks</option>
                                <option value="bathroomKitchen">Bathroom, Laundry & Kitchen </option>
                                <option value="plasticBag">Plastic Bag</option>
                                <option value="nuts">Nuts & Dry Fruits</option>
                                <option value="biscuits">BISCUITS/COOKIES/ CRACKERS</option>
                                <option value="houshold">Household</option>
                                <option value="chips">Chips</option>

                            </select>
                        </div>
                        {/* price */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price")}
                                type="text"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* Recipe Details */}
                    <div className="flex gap-6">
                        {/* sub category */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Product Type*</span>
                            </label>
                            <select defaultValue={sub_category} {...register("sub_category")} className=" select select-bordered w-full">
                                <option disabled selected>Choose A Product Type</option>
                                <option value="general">General</option>
                                <option value="popular">Popular</option>


                            </select>
                        </div>
                        {/*weight*/}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Weight*</span>
                            </label>
                            <select defaultValue={weight} {...register("weight")} className=" select select-bordered w-full">
                                <option disabled selected>Choose A Food Category</option>
                                <option value="2lbs">2 lbs</option>
                                <option value="4lbs">4 lbs</option>


                            </select>
                        </div>

                    </div>

                    {/* Recipe Details */}
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Product Details*</span>
                        </label>
                        <input {...register("recipe")}
                            type="text"
                            defaultValue={description}
                            placeholder="details"
                            className="input  input-bordered w-full " />
                    </div>
                    <div className="my-6">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div>
                        <button type="submit" className="flex gap-2 items-center bg-white btn text-xl">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct