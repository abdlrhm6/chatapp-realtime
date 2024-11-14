import { MenuIcon, XIcon } from "lucide-react";
import UserList from "./userList";
import UserCard from "./UserCard";
import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";


export default function Sidebar({auth,conversations}) {


    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

    const [selectedUser, setSelectedUser] = useState(null)
    const toggleSidebar = () => {
        setIsSidebarCollapsed(prev => !prev)
    }

    return (

        <div className={`flex-shrink-0 bg-gray-900 overflow-y-auto transition-all duration-300 ease-in-out z-10 border-r border-gray-800 ${isSidebarCollapsed ? 'w-16 sm:w-20' : 'w-64 sm:w-72'}`}>
            <div className="p-2 sm:p-4">
                <button onClick={toggleSidebar} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {
                        isSidebarCollapsed ? (
                            <MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                            <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                        )
                    }
                </button>
            </div>
            <div className="flex flex-col gap-6 sm:gap-10">
                <div className={`mx-4 sm:mx-6 ${isSidebarCollapsed ? 'hidden' : ''}`}>
                    <UserCard user={auth.user}/>
                </div>
                <div className="px-2 sm:px-4 py-1 sm:py-2">
                    <h2 className={`text-base sm:text-lg font-semibold text-gray-300 mb-2 sm:mb-4 ${isSidebarCollapsed ? 'hidden' :''}`}>
                        My Chats
                    </h2>
                    {
                        conversations.length > 0 ? (
                            <ul className="space-y-2">
                            {conversations?.map((conversation) => (
                                <UserList conversation={conversation} key={conversation.id} isSidebarCollapsed={isSidebarCollapsed} setSelectedUser={setSelectedUser} />
                            ))}
                        </ul >
                        ):(
                            <>
                                <p className="text-sm my-2">No Conversations Yet.</p>
                                <Link href={route('chat.users')}>
                                <p className="text-xs underline text-blue-800">find users to chat with.</p>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div >
    )
}
