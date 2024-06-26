"use client"

import Image from "next/image"
import Link from "next/link"

export const SideBar = ({ children }) => {

    return (
        <aside className="h-screen w-fit sticky top-0 left-0 z-30">
            <nav className="h-full flex flex-col bg-pail_tan border-r shadow-sm">
                <div className="p-4 pb-2 my-3 flex justify-center items-center">
                    <Link href="/dashboard">
                        <Image
                            src="/assets/images/PailLogo_Navy.svg"
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

export const SideBarItem = ({ icon, text, active, alert, selected, onClickFunction }) => {
  
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