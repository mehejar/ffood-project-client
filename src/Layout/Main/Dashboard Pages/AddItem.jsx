import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"

const image_hosting_key = 'e4461ef5124ec2b2f2efc56f53ded9cb'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
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
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            console.log(product)
            const productRes = await axiosSecure.post('/products', product)
            console.log('Added', productRes.data)
            if (productRes.data.insertedId) {
                reset()

            }
        }
    }

    return (
        <div>

            <div className="w-2/4 mx-auto">
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name")}
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <select defaultValue='value' {...register("category")} className=" select select-bordered w-full">
                                <option disabled selected>Choose A Food Category</option>
                                <option value="salad">Rice</option>
                                <option value="pizza">Pulses</option>
                                <option value="dessert">Spicies</option>
                                <option value="soup">Snacks</option>
                                <option value="drinks">Baathroom& Tiletries</option>

                            </select>
                        </div>
                        {/* price */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price")}
                                type="text"
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* Recipe Details */}
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <input {...register("recipe")}
                            type="text"
                            placeholder="Recipe"
                            className="input  input-bordered w-full " />
                    </div>
                    <div className="my-6">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div>
                        <button type="submit" className="flex gap-2 items-center bg-white btn text-xl">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddItem