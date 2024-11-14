import { useState } from 'react'
import { UserPlus, User, User2, UserCog2Icon, Mail, LockKeyhole } from 'lucide-react'
import { Head, Link } from '@inertiajs/react'
import BgPattern from '@/Components/BgPattern'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/react'
import Spinner from '@/Components/Spinner'


export default function Register() {

    const { data, setData, post, processing ,errors } = useForm()
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('auth.register'))

    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">

            <Head title='register' />
            <BgPattern />
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md relative z-10">
                <div className="flex justify-center mb-8">
                    <User className="h-12 w-12 text-blue-500" />
                </div>
                <h1 className="text-3xl font-bold text-center text-white mb-8">Create an Account</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <Input
                        type="text"
                        placeholder="Enter Your Full Name"
                        name="name" label="Full Name"
                        value={data.name}
                        Icon={User2}
                        onChange={(e) => setData('name', e.target.value)}
                        error={errors?.name}
                    />


                    <Input
                        type="text"
                        placeholder="Enter Your Email Address"
                        name="email"
                        label="Email Address"
                        value={data.email}
                        error={errors?.email}
                        Icon={Mail}
                        onChange={(e) => setData('email', e.target.value)}
                    />


                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Your Password"
                        name="password" label="Password"
                        value={data.password}
                        error={errors?.password}
                        Icon={LockKeyhole}
                        onChange={(e) => setData('password', e.target.value)}
                         />


                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Your Password Confirmation"
                        name="password_confirmation"
                        Icon={LockKeyhole}
                        label="Password Confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                         />

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {
                                processing ? (
                                    <>
                                        <Spinner />
                                        Processing
                                    </>
                                ) : (
                                    <>
                                        <UserPlus className="h-5 w-5 mr-2" />
                                        Create Account</>
                                )
                            }
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-blue-500 hover:text-blue-400">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    )
}



Register.layout = page => <>{page}</>
