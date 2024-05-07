"use client"

import Image from "next/image"
import Link from "next/link"

export const SideBar = ({ children }) => {

    return (
        <aside className="h-screen w-fit">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 mb-2 flex justify-center items-center">
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

export const SideBarItem = ({ icon, text, active, alert }) => {
  
    return (
        <li
            className={`
                relative flex justify-between items-center py-2 px-3 my-2
                font-medium rounded-md cursor-pointer
                transition-colors group
                ${
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                }
            `}
        >
            {icon}
            <span className="overflow-hidden px-3 transition-all">
                {text}
            </span>
            {alert && (
                <div
                className="w-2 h-2 rounded bg-indigo-400"
                />
            )}
        </li>
    )
}