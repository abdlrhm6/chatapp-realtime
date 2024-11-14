import { useForm } from "@inertiajs/react"
import { PlusCircleIcon, SendIcon } from "lucide-react"
import Spinner from "./Spinner"

export default function MessageInput({ user }) {


    const {data,setData,post,processing,errors} = useForm({
        content:''
    })

    const sendMessage = (e) => {
        e.preventDefault()
        post(route('chat.send', {
            to: user.id,
            content: data.content
        }), {
            preserveScroll: true,
            onSuccess: () => {
                setData('content', '');
            }
        })
     }

    return (
        <div className="bg-gray-900 p-2 sm:p-4 border-t border-gray-800">
            <form className="flex items-center space-x-1 sm:space-x-2" onSubmit={sendMessage}>
                <button type="button" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <PlusCircleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <input
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                    type="text" placeholder="Type a message..."
                    className="flex-1 bg-gray-800 text-white rounded-full py-1.5 sm:py-2 px-3 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base" />

                <button 
                    type="submit" 
                    disabled={processing || !data.content.trim()}
                    className="bg-blue-700 text-white rounded-full p-1.5 sm:p-2 hover:bg-blue-800 transition-colors duration-200 disabled:opacity-50"
                >
                    {processing ? <Spinner/> : <SendIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
            </form>
            {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
        </div>
    )
}
