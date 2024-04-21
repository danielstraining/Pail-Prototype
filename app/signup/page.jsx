"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { isMatchingPassword, isExistingSupplier, isValidEmailFormat, isValidPasswordFormat } from "@utils/utils";
import { useRouter } from "next/navigation"
import { hash } from "bcryptjs-react";

function SignUp(){
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false)
    
    const [passwordMatchError, setpasswordMatchError] = useState(false);
    const [existingEmailError, setexistingEmailError] = useState(false);
    const [emailFormatError, setEmailFormatError] = useState(false);
    const [passwordFormatError, setPasswordFormatError] = useState(false);

    const resetStates = async () => {
        setpasswordMatchError(false);
        setexistingEmailError(false);
        setEmailFormatError(false);
        setPasswordFormatError(false);
    }

    const validateInput = async (email, password, confirmPassword) => {
        let result = true
        
        // Do the passwords match?
        const passwordMatch = await isMatchingPassword(password, confirmPassword)
        //console.log(`Matching passwords? = ${passwordMatch}`)
        if (!passwordMatch) {
            setpasswordMatchError(true);
            result = false
        }

        // Is the email already registered?
        const supplierExists = await isExistingSupplier(email)
        //console.log(`Valid email? = ${!supplierExists}`)
        if (supplierExists) {
            setexistingEmailError(true);
            result = false
        }

        // Is the email format valid?
        const validEmail = await isValidEmailFormat(email)
        //console.log(`Valid email format? = ${validEmail}`)
        if (!validEmail) {
            setEmailFormatError(true);
            result = false
        }

        // Is the password format valid?
        const validPassword = await isValidPasswordFormat(password)
        //console.log(`Valid password format? = ${validPassword}`)
        if (!validPassword) {
            setPasswordFormatError(true);
            result = false
        }

        console.log(`Form input valid = ${result}`)
        return result
    }

    const addSupplier = async (email, password) => {
        console.log("INSIDE ADD SUPPLIER")
        try {
            const response = await fetch("/api/supplier/new", {
                method: "POST",
                body: JSON.stringify({
                email: email,
                password: password,
                }),
            });

            if (!response.ok){
                throw new Error("Failed to add supplier to database.")
            } 
                
        // Error Handling
        } catch (error) {
            throw new Error(error)
        }
    }

    const sendActivationEmail = async (email) => {
        console.log("INSIDE SEND ACTIVATION EMAIL")
        try {
            let response = await fetch("/api/supplier/sendActivationCode", {
              method: "POST",
              body: JSON.stringify({
                email: email
              }),
            });

            if (!response.ok){
                throw new Error("Something went wrong with send email api endpoint")
            } 

        } catch (error) {
            throw new Error(error)
        }
    }

    const handleSubmit = async (e) => {
        // Set submitting to true to disable button so form cannot be submitted multiple times
        setSubmitting(true)

        // reset all the error messages
        resetStates()

        // Grab supplier inputs
        const email = e.get('email').toLowerCase(); // Password needs to be hashed
        const password = e.get('password');
        const confirmPassword = e.get('confirmPassword');

        // Run input validation
        const isValid = await validateInput(email, password, confirmPassword)

        if (isValid){ 
            try {
                const hashedPassword = await hash(password, 12)
                await addSupplier(email, hashedPassword);
                await sendActivationEmail(email);
                console.log("Supplier added and verification email sent successfully.");

                router.push(`/activating/${email}`)

            } catch (error) {
                console.log("Error uploading supplier details to db or sending verification email.", error)
            }
        }
        setSubmitting(false)
    }

    return (
        <>
            <div className="w-full flex justify-center items-center py-20">
                <div className="flex flex-col items-center py-20 my-20">
                    {passwordMatchError && (
                        <div>Passwords do not match!</div>
                    )}
                    {existingEmailError && (
                        <div>Email already exists!</div>
                    )}
                    {emailFormatError && (
                        <div>Email is not correct format!</div>
                    )}
                    {passwordFormatError && (
                        <div>Password is not correct format!</div>
                    )}
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
                                disabled={submitting}
                                className="black_btn my-6 w-full">
                                {submitting? "Processing..." : "Register"}
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