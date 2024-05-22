import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import UserCard from "./UserCard"

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')

            // console.log(res.data)
            return res.data
        }
    })

    return (
        <div className="bg-white p-8 rounded-lg">

            {/* Table top */}
            <div className="py-8">
                <img className="w-[100px] text-left" src="" alt="" />
                <div className="flex gap-10 lg:gap-36">
                    <div className="w-[200px] text-left">
                        <h2 className="text-xl font-semibold">Name</h2>

                    </div>

                    <div className="w-[100px] lg:ml-64 text-left">
                        <h2>Email</h2>
                    </div>
                    <div className="w-[100px] lg:-ml-36  text-left">
                        <h2>Role</h2>
                    </div>
                    <div className="w-[100px] text-left">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            {/* --------------- */}
            <div>
                {
                    users.map(user => <UserCard user={user}></UserCard>)
                }
            </div>
        </div>
    )
}

export default AllUsers