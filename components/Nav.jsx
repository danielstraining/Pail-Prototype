"use client"

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Nav = () => {
    const router = useRouter();

    const handleSignUp = () => {
        router.push("/signup");
    }

    return (
        <nav className="flex justify-between items-center w-full px-28 py-5">
            <div>
                <Link href="/" className="">
                    <Image 
                        src="/assets/images/logo.svg" 
                        alt="Pail Logo" 
                        width={100}
                        height={100}
                        className="object-contain"/>
                </Link>  
            </div>
            <div className="flex justify-between w-96">
                <button
                    type="button"
                    onClick = {handleSignUp}
                    className="black_btn">
                    Sign Up
                </button>
                <button
                    type="button"
                    onClick = {() => {}}
                    className="black_btn">
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default Nav;