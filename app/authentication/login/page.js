'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';


export default function Component() {
    const { data: session, status } = useSession()
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            {console.log(session.user.email)}
            router.push('/')
        }
    }, [status, router])

    if (status === "loading") {
        return <div className="w-screen container mx-auto h-fit text-slate-700 mt-10 text-[30px]"><div className="flex justify-center items-center">Loading...</div></div>
    }

    // if (session) {
    //     return (
    //         <>
    //             <button onClick={() => {
    //                 signOut()
    //             }}>Sign out</button>
    //         </>
    //     )
    // }

    return (
        <>
            <div className="rounded-lg bg-slate-900 w-fit text-white font-semibold mt-4 container mx-auto p-1">
                <button onClick={() => {
                    signIn('github')
                }}>Sign in with Github</button>
            </div>
            <div className="rounded-lg bg-slate-900 w-fit text-white font-semibold mt-4 container mx-auto p-1">
                <button onClick={() => {
                    signIn('google')
                }}>Sign in with Google</button>
            </div>
            <div className="rounded-lg bg-slate-900 w-fit text-white font-semibold mt-4 container mx-auto p-1">
                <button onClick={() => {
                    signIn('apple')
                }}>Sign in with Apple</button>
            </div>
        </>
    )
}
