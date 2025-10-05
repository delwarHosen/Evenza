import RegisterForm from '@/components/auth/RegisterForm'
import Link from 'next/link'

export default function page() {
    return (
        <section className="h-screen grid place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign up</h4>
                <RegisterForm />
                <span className="text-center text-xs text-gray-500">
                    Already have an account?
                    <Link href="/login" className="underline hover:text-indigo-500 mx-1">
                        Login
                    </Link>
                </span>
            </div>

        </section>
    )
}
