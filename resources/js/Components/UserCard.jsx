import { Link } from "@inertiajs/react"
import { LogOut, Settings } from "lucide-react"

export default function UserCard({user}) {

    return (
        <div className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-md">
            <div className="flex items-center justify-between p-2 sm:p-4">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden bg-gray-600 rounded-full">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-xs sm:text-sm font-semibold">{user.name}</h2>
                        <p className="text-xs text-gray-400">{user.email.slice(0, 18)}</p>
                    </div>
                </div>
                <div className="flex space-x-1 sm:space-x-2">
                    <button className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
                        <Link href={route('auth.edit', user?.id)} method="get">
                            <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Link>
                    </button>
                    <button className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
                        <Link href={route('auth.logout')} method="post" as="button">
                            <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
