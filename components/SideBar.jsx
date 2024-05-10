"use client"

import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export const SideBar = ({ children }) => {

    return (
        <aside className="h-screen w-fit">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 my-3 flex justify-center items-center">
                    <Link href="/dashboard">
                        <Image
                            src="/assets/images/logo.svg"
                            alt="Pail Logo"
                            width={100}
                            height={100}
                            className="object-contain" />
                    </Link>
                </div>
                <ul className="flex-1 px-3">{children}</ul>
            </nav>
        </aside>
    )
}

export const SideBarItem = ({ icon, text, active, alert, onClickFunction }) => {
  
    return (
        <li
            className={`
                relative flex items-center py-2 px-3 my-3
                font-medium rounded-md cursor-pointer
                transition-colors group
                ${
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                }
            `}
        >
            <button
                className="flex items-center"
                onClick={onClickFunction}
            >
                {icon}
                <span className="px-7 transition-all">
                    {text}
                </span>
                {alert && (
                    <div
                    className="absolute right-4 w-2 h-2 rounded bg-indigo-400"
                    />
                )}  
            </button>
            
        </li>
    )
}