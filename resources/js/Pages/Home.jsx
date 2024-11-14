import BgPattern from "@/Components/BgPattern";
import { Head } from "@inertiajs/react";


function Home() {
    return (
        <>
            <Head title="My chats" />
            <BgPattern />
            <div className="h-full flex items-center justify-center">
                Select A User To Start Chating.
            </div>
        </ >
    )
}


export default Home
