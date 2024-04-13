"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

function SignUp(){
    return (
        <>
            <div>Sign Up Page</div>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12 w-[500px]">
                    <Image 
                        src="/assets/images/logo.svg" 
                        alt="Pail Logo" 
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <h1 className="text-2xl font-palanquin text-center">Create Account</h1>
                    <form>
                        <input name="email"></input>
                        <input name="password"></input>
                    </form> 
                </div>
            </div>
        </>
    )
}


export default SignUp