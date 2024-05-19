"use client"

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Nav = () => {
    const router = useRouter();


    return (
        <nav className="flex justify-between items-center w-full px-28 py-5">
            <div>
                <Link href="/" className="">
                    <Image 
                        src="/assets/images/PailLogo_Navy.svg" 
                        alt="Pail Logo" 
                        width={100}
                        height={100}
                        className="object-contain"/>
                </Link>  
            </div>
            <div className="flex justify-between w-96">
                <button
                    type="button"
                    onClick = {() => {router.push("/signup")}}
                    className="black_btn bg-pail_navy border-pail_navy my-10">
                    Sign Up
                </button>
                <button
                    type="button"
                    onClick = {() => {router.push("/signin")}}
                    className="black_btn bg-pail_navy border-pail_navy my-10">
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default Nav;