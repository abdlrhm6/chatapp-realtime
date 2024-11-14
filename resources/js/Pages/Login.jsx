import { useState } from 'react'
import { LockKeyhole, LogIn, Mail, User } from 'lucide-react'
import { Head, Link } from '@inertiajs/react'
import BgPattern from '@/Components/BgPattern'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/react'
import Spinner from '@/Components/Spinner'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('auth.login'))
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
            <Head title='login' />
            <BgPattern />
            <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md relative z-10">
                <div className="flex justify-center mb-8">
                    <User className="h-12 w-12 text-blue-500" />
                </div>
                <h1 className="text-3xl font-bold text-center text-white mb-8">Login to Your Account</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <Input
                        type="text"
                        placeholder="Enter Your Email Address"
                        name="email" label="Email Address"
                        value={data.email}
                        Icon={Mail}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}

                    />


                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Your Password" name="password"
                        label="Password"
                        value={data.password}
                        Icon={LockKeyhole}
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}

                    />
                    <div className="flex items-center justify-between">

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-500 hover:text-blue-400">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {
                                processing ? (<Spinner />) : (
                                    <>
                                        <LogIn className="h-5 w-5 mr-2" />
                                        Sign in
                                    </>
                                )
                            }
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link href="/register" className="font-medium text-blue-500 hover:text-blue-400">
                        Register here
                    </Link>
                </p>
            </div>

        </div>
    )
}

Login.layout = page => <>{page}</>
