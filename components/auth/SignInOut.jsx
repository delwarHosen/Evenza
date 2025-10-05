"use client"

import { useAuth } from "@/app/hooks/useAuth"
import Link from "next/link";
import { useRouter } from "next/navigation";;


export default function SignInOut() {
    const { auth, setAuth } = useAuth();

    const router = useRouter()

    const handleLogout = () => {
        setAuth(null);
        router.push("/login")

    }

    return (
        <div>
            {
                auth ? (
                    <>
                        <span className="mx-2">{auth.name}</span>
                        <span className="mx-1"> | </span>
                        <a onClick={handleLogout} className="cursor-pointer">Logout</a>
                    </>
                ) : (
                    <Link href="/login">Login</Link>
                )
            }
        </div>
    )
}
