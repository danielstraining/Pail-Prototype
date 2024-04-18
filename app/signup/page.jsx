"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function SignUp(){
    const [submitTimeout, setSubmitTimeout] = useState(false)
    
    const [passwordMatchError, setpasswordMatchError] = useState(false);
    const [existingEmailError, setexistingEmailError] = useState(false);
    const [emailFormatError, setEmailFormatError] = useState(false);
    const [passwordFormatError, setPasswordFormatError] = useState(false);

    const resetStates = async () => {
        // Change this. States are purposefully not in promises. They are batched.
        // This is not a good use of them. 
        setpasswordMatchError(false);
        setexistingEmailError(false);
        setEmailFormatError(false);
        setPasswordFormatError(false);
        console.log("ERROR STATES RESET TO FALSE")
        console.log(`States\npasswordMatchError = ${passwordMatchError}\nexistingEmailError = ${existingEmailError}\nemailFormatError = ${emailFormatError}\npasswordFormatError = ${passwordFormatError}`)

    }

    const isMatchingPassword = async (pw1, pw2) =>{
        return pw1 === pw2
    }

    const isExistingSupplier = async (email) => {
        const data = await fetch(`/api/supplier/${email}/existing`);
        const response = await data.json()
        return response
    }

    const isValidEmailFormat = async (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const isValidPasswordFormat = async (password) => {
    
        // Must contain:
        // At least 8 Characters
        // At least one lowercase and one uppercase character
        // At least one number
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    }


    // Initial Checks to determine if input values are valid
    const runInitialChecks = async (email, password, confirmPassword) => {
        console.log("Beginning 'Initial Checks'...")
        console.log(`States\npasswordMatchError = ${passwordMatchError}\nexistingEmailError = ${existingEmailError}\nemailFormatError = ${emailFormatError}\npasswordFormatError = ${passwordFormatError}`)

        let result = true
        
        // Do the passwords match?
        console.log("\nDo the passwords match?")
        const passwordMatch = await isMatchingPassword(password, confirmPassword)
        console.log(`Verdict = ${passwordMatch}`)
        if (!passwordMatch) {
            console.log("Setting password match error to true...");
            setpasswordMatchError(true);
            result = false
        }
        console.log(`Running result = ${result}`)
        console.log(`States\npasswordMatchError = ${passwordMatchError}\nexistingEmailError = ${existingEmailError}\nemailFormatError = ${emailFormatError}\npasswordFormatError = ${passwordFormatError}`)

        // Is the email already registered?
        console.log("\nDoes the email already exist?")
        const supplierExists = await isExistingSupplier(email)
        console.log(`Verdict = ${supplierExists}`)
        if (supplierExists) {
            console.log("Setting email error to true...");
            setexistingEmailError(true);
            result = false
        }
        console.log(`Running result = ${result}`)
        console.log(`States\npasswordMatchError = ${passwordMatchError}\nexistingEmailError = ${existingEmailError}\nemailFormatError = ${emailFormatError}\npasswordFormatError = ${passwordFormatError}`)

        // Is the email format valid?
        console.log("\nIs the email format valid?")
        const validEmail = await isValidEmailFormat(email)
        console.log(`Verdict = ${validEmail}`)
        if (!validEmail) {
            console.log("Setting valid email error to true...");
            setEmailFormatError(true);
            result = false
        }
        console.log(`Running result = ${result}`)
        console.log(`States\npasswordMatchError = ${passwordMatchError}\nexistingEmailError = ${existingEmailError}\nemailFormatError = ${emailFormatError}\npasswordFormatError = ${passwordFormatError}`)

        // Is the password format valid?
        console.log("\nIs the password format valid?")
        const validPassword = await isValidPasswordFormat(password)
        console.log(`Verdict = ${validPassword}`)
        if (!validPassword) {
            console.log("Setting valid password error to true...");
            setPasswordFormatError(true);
            result = false
        }
        console.log(`Running result = ${result}`)
        console.log(`States\npasswordMatchError = ${passwordMatchError}\nexistingEmailError = ${existingEmailError}\nemailFormatError = ${emailFormatError}\npasswordFormatError = ${passwordFormatError}`)

        console.log(`Final result = ${result}`)
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
        resetStates()
        console.log(e)

        const email = e.get('email').toLowerCase();
        const password = e.get('password');
        const confirmPassword = e.get('confirmPassword');

        const initialChecks = await runInitialChecks(email, password, confirmPassword)
        console.log(initialChecks)


        if (initialChecks){
            console.log("ADD SUPPLIER TRIGGERED")
            //addSupplier(email, password)
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