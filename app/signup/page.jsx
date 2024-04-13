"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function SignUp(){
    return (
        <>
            <div>Sign Up Page</div>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <Image 
                        src="/assets/images/logo.svg" 
                        alt="Pail Logo" 
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-blue-50 rounded-xl space-y-12 w-[500px]">
                        <h1 className="text-2xl font-palanquin text-center">Create Account</h1>
                        <form>
                            <div>
                                <h2>Email</h2>
                                <input name="email"></input>   
                            </div>
                            <div>
                                <h2>Password</h2>
                                <input name="password"></input> 
                            </div>
                            <div>
                                <h2>Confirm Password</h2>
                                <input name="confirmPassword"></input> 
                            </div>
                        </form> 
                        <button
                            type="button"
                            onClick = {() => {}}
                            className="black_btn my-10">
                            Register
                        </button> 
                        <p>Already have an account? <Link href="/" className="">Sign In</Link></p>
                    </div>
                </div>
                
            </div>
        </>
    )
}


export default SignUp