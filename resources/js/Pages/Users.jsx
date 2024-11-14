import Layout from "@/Layouts/Layout"
import { MessageCircle } from "lucide-react"
import { Link } from "@inertiajs/react"
import BgPattern from "@/Components/BgPattern"

function EditProfile({ users }) {
    return (
        <>
            <BgPattern />
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-100 mb-6">Available Users</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map(user => (
                        <div key={user.id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                            <div className="flex items-center space-x-4">
                                <div className="relative w-12 h-12">
                                    {user.avatar ? (
                                        <img 
                                            src={user.avatar} 
                                            alt={user.name} 
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                                            <span className="text-xl font-bold text-gray-300">
                                                {user.name[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-100 font-semibold">{user.name}</h3>
                                    <p className="text-gray-400 text-sm">{user.email}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Link 
                                
                                href={route('chat.new',user.id)}    
                                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Send Message
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

EditProfile.layout = page => <Layout children={page} />
export default EditProfile
