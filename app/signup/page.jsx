"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function SignUp(){
    // email in use
    const [existingEmailError, setexistingEmailError] = useState(false);
    // non-matching passwords
    const [passwordMatchError, setpasswordMatchError] = useState(false);
    // button timeout

    const passwordMatching = (pw1, pw2) =>{
        if (pw1 !== pw2){
            setpasswordMatchError(true)
        }
    }

    const runInitialChecks = async (email, password, confirmPassword) => {
        let result = true
        if (passwordMatching(password, confirmPassword)) {
            setNoPasswordMatch(true)
            result = false
        }

        return result
    }

    const addSupplier = async (email, password) => {
        try {
            const response = await fetch("/api/supplier/new", {
                method: "POST",
                body: JSON.stringify({
                email: email,
                password: password,
                }),
            });
        
            if (response.ok) {
                console.log("API RESPONSE OK")
            }

        } catch (error) {
            console.log("API RESPONSE ERROR")
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        console.log(e)
        
        const email = e.get('email')
        const password = e.get('password')
        const confirmPassword = e.get('confirmPassword')

        const initialChecks = await runInitialChecks()

        if (initialChecks){
            addSupplier(email, password)
        }
    }

    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <Image 
                        src="/assets/images/logo.svg" 
                        alt="Pail Logo" 
                        width={100}
                        height={100}
                        className="object-contain mb-5"
                    />
                    <div className="shadow-xl p-8 bg-blue-50 rounded-xl w-[450px] font-palanquin">
                        <h1 className="text-3xl text-center mt-1 mb-3">Create Account</h1>
                        <form 
                            className="!m-0 p-0"
                            action={handleSubmit}
                        >
                            <div className="my-4">
                                <h2 className="input_header">Email</h2>
                                <input className="form_input" type="email" placeholder="example@business.com" required name="email"></input>   
                            </div>
                            <div className="my-4">
                                <h2 className="input_header">Password</h2>
                                <input className="form_input" type="password" placeholder="Must have at least 8 characters" required name="password"></input> 
                            </div>
                            <div className="my-4">
                                <h2 className="input_header">Confirm Password</h2>
                                <input className="form_input" type="password" required name="confirmPassword"></input> 
                            </div>
                            <button
                                type="submit"
                                className="black_btn my-6 w-full">
                                Register
                            </button> 
                        </form> 
                        <p className="w-full text-center !m-0" type="hidden">Already have an account? <Link href="/" className=" text-blue-700">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignUp;