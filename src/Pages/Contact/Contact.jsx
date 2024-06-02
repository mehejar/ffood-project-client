import { useForm } from "react-hook-form"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import Swal from "sweetalert2"
import cover from '../../assets/cart-14.jpg'

const Contact = () => {
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {

        const contact = {
            name: data.name,
            category: data.category,

            description: data.recipe,
            sub_category: data.sub_category,
        }

        const res = await axiosPublic.post(contact, '/contacts')
        console.log('Contact Details send', res.data)
        if (res.data.insertedId) {
            reset()
            Swal.fire({
                position: "top",
                icon: "Added Successfully",
                title: "Your item added to the card",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <div>
                <img src={cover} alt="" />
            </div>
            <div className="w-2/3 my-16 flex flex-col lg:flex-row gap-16 mx-auto">




                <div className=" lg:w-1/2">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col lg:flex-row lg:gap-6">
                            {/* Name */}
                            <div className="my-2 lg:w-1/2">

                                <input {...register("name")}
                                    type="text"
                                    placeholder="john Butler"
                                    className="input input-bordered w-full " />
                            </div>
                            <div className="my-2 lg:w-1/2">

                                <input {...register("email")}
                                    type="email"
                                    placeholder="john@gmail.com"
                                    className="input input-bordered  w-full" />
                            </div>
                        </div>
                        <div className="my-2">

                            <input {...register("message")}
                                type="text"
                                placeholder=" I want to know..."
                                className="input input-bordered w-full min-h-20 " />
                        </div>




                        <div>
                            <button type="submit mt-4" className="flex gap-2 items-center bg-white btn text-xl">Submit Now</button>
                        </div>





                    </form>
                </div >
                {/* ======================Info====== */}
                <div>
                    <div>
                        <h2 className="text-xl font-semibold">Address:</h2>
                        <p>1101 Flushing Avenue, Brooklyn 11237.</p>
                        <h2 className="text-xl mt-8 font-semibold">Information:</h2>
                        <p>
                            Call (09:00 AM to 10:00 PM) to contact us or for any information.</p>
                        <p>
                            +1 929-471-5485,  +1 347-844-9037
                        </p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Contact