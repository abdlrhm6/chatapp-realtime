import { Link, usePage } from "@inertiajs/react";

export default function UserList({ conversation, isSidebarCollapsed }) {

    const {auth} = usePage().props

    const conversationInfo = conversation.part1 == auth.user.id ? conversation.user_part2 : conversation.user_part1


    return (

        <Link href={route('chat.message', conversation.id)}>

            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
               >
                <div className="relative">
                    <img src={conversationInfo.avatar} alt="user.name" className="w-10 h-10 rounded-full" />
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${conversationInfo.online ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                </div>
                {
                    !isSidebarCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-200 truncate">{conversationInfo.name}</p>
                            <p className="text-xs text-gray-400 truncate">{conversationInfo.email}</p>
                        </div>
                    )
                }
            </li >
        </Link>

    )
}
