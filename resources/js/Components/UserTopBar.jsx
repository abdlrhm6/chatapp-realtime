import { MoreVerticalIcon, PhoneIcon, VideoIcon } from "lucide-react";

export default function UserTopNav({user}){

    return  user && (

                <div className="bg-gray-900 p-2 sm:p-4 flex items-center justify-between border-b border-gray-800">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <img src={user.avatar} alt={user.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                        <div>
                            <h2 className="text-base sm:text-lg font-semibold">{user?.name}</h2>
                            <p className="text-xs sm:text-sm text-gray-400">{user?.online ? 'Online' : 'Offline'}</p>
                        </div>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2">
                        <button className="text-gray-400 hover:text-white transition-colors duration-200">
                            <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors duration-200">
                            <VideoIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors duration-200">
                            <MoreVerticalIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </div>
                </div>
            )
}
