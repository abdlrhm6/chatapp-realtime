import Sidebar from "@/Components/SideBar"
import { Head, usePage } from "@inertiajs/react"

export default function Layout({ children }) {

    const { auth,conversations } = usePage().props



    return (
        <div className="flex  bg-gray-950 text-gray-100 relative ">
            <Head title="Chats" />
            <Sidebar auth={auth} conversations={conversations}/>

            <div className="flex-1 flex flex-col bg-gray-950 z-10 min-h-screen">
                {children}
            </div >
        </div>
    )
}
