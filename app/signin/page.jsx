"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { hash } from "bcryptjs-react";

function SignIn(){
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false)
    
    const [invalidLoginError, setinvalidLoginError] = useState(false);

    const resetStates = async () => {
        setinvalidLoginError(false);
    }

    const handleSignIn = async (e) => {
        // Set submitting to true to disable button so form cannot be submitted multiple times
        setSubmitting(true)

        // reset all the error messages
        resetStates()

        // Grab supplier inputs
        const email = e.get('email').toLowerCase(); // Password needs to be hashed
        const password = e.get('password');

        if (isValid){ 
            try { // Need to compare login details with database and return true (valid) or false (invalid)
                console.log("Registration process successful");

            } catch (error) {
                console.log("Error during the registration process: ", error)
            }
        }
        setSubmitting(false)
    }

    return (
        <>
            <div className="w-full flex justify-center items-center py-20">
                <div className="flex flex-col items-center py-20 my-20">
                    {invalidLoginError && (
                        <div>Invalid Login details</div>
                    )}
                    <Link
                    href={"/"}>
                        <Image
                            src="/assets/images/logo.svg"
                            alt="Pail Logo"
                            width={100}
                            height={100}
                            className="object-contain mb-5"
                        />
                    </Link>
                    <div className="shadow-xl p-8 bg-blue-50 rounded-xl w-[450px] font-palanquin">
                        <h1 className="text-3xl text-center mt-1 mb-3">Sign In</h1>
                        <form 
                            className="!m-0 p-0"
                            action={handleSignIn}
                        >
                            <div className="my-4">
                                <h2 className="input_header">Email</h2>
                                <input className="form_input" type="email" placeholder="example@business.com" required name="email"></input>   
                            </div>
                            <div className="my-4">
                                <h2 className="input_header">Password</h2>  
                                <input className="form_input" type="password" placeholder="Must have at least 8 characters" required name="password"></input> 
                            </div>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="black_btn my-6 w-full">
                                {submitting? "Signing In..." : "Sign In"}
                            </button> 
                        </form> 
                        <p className="w-full text-center !m-0" type="hidden">Don't have an account? <Link href="/signup" className=" text-blue-700">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignIn;