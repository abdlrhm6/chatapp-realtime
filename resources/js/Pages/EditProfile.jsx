import Layout from "@/Layouts/Layout"
import { User, Phone, FileText, Camera, Save } from 'lucide-react'
import Input from "@/Components/Input"
import { useForm } from "@inertiajs/react"
import { useState } from "react"
import Spinner from "@/Components/Spinner"

 function EditProfile({ user }) {

    const [avatarUrl, setAvatarUrl] = useState(user.avatar)

    const { data, setData, post, processing, errors } = useForm({
        name: user.name,
        phone: user.phone,
        avatar: user.avatar,
        bio: user.bio
    })


    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            setData('avatar', file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setAvatarUrl(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('auth.update', user.id))
    }

    return (
        <form onSubmit={handleSubmit} className=" m-9 p-6 bg-gray-900 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-100">Edit Profile</h2>

            <div className="mb-6 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                    <img
                        src={avatarUrl}
                        alt=""
                        className="w-full h-full object-cover rounded-full border-2 border-gray-700"
                    />
                    <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                        <Camera className="w-5 h-5 text-gray-100" />
                        <input
                            id="avatar-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>

            <div className="space-y-4">
                <Input label="Name" name="name" type="text" placeholder="Your name" value={data.name} onChange={(e) => setData("name", e.target.value)} Icon={User} error={errors?.name} />

                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">
                        Bio
                    </label>
                    <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                        <textarea
                            id="bio"
                            value={data.bio}
                            onChange={(e) => setData("bio", e.target.value)}
                            rows={3}
                            className="pl-10 w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                            placeholder="Tell us about yourself"
                        ></textarea>
                        {errors?.bio && <p className="text-red-500 text-xs mt-1">{errors?.bio}</p>}
                    </div>
                </div>
                <Input label="Phone" name="phone" type="text" placeholder="Your phone number" value={data.phone} onChange={(e) => setData("phone", e.target.value)} Icon={Phone} error={errors?.phone} />
            </div>

            <button
                type="submit"
                disabled={processing}
                className="mt-6 w-full bg-blue-600 text-gray-100 py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors flex items-center justify-center"
            >
                {processing ? (
                    <Spinner/>
                ) : (
                    <>
                    <Save className="mr-2" size={18} />
                    Save Changes</>
                )}
            </button>
        </form>
    )
}

EditProfile.layout = page => <Layout children={page} />

export default EditProfile
