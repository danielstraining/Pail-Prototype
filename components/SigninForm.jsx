"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react";

function SigninForm() {
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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

        console.log(`Login details:\n${email.toLowerCase()}\n${password}`)

        try {
            const res = await signIn("credentials", {
                email: email.toLowerCase(),
                password: password,
                redirect: false,
            });

            if (res.error) {
                setinvalidLoginError(true);
                return;
            }

            router.replace("/dashboard");
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <>
            <aside className="w-fit min-h-screen top-0 left-0 -z-10">
                <div className="shadow-xl h-full p-8 bg-pail_tan font-palanquin">
                    {invalidLoginError && (
                        <div>Invalid Login details</div>
                    )}
                    <h1 className="text-3xl text-center my-10">Log in to your account</h1>
                    <div className="relative flex justify-center items-center w-full my-10">
                        <Link
                            href={"/"}>
                            <Image
                                src="/assets/images/PailLogo_Navy.svg"
                                alt="Pail Logo"
                                width={100}
                                height={100}
                                className="object-contain mb-5"
                            />
                        </Link>
                        <Image
                            src="/assets/images/ColouredSplash2.svg"
                            alt="Splash graphic"
                            width={0}
                            height={0}
                            className="absolute w-full" />
                    </div>

                    <form
                        className="!m-0 p-0"
                        action={handleSignIn}
                    >
                        <div className="my-5">
                            <h2 className="input_header">Email</h2>
                            <input onChange={(e) => setEmail(e.target.value)} className="form_input" type="email" placeholder="example@business.com" required name="email"></input>
                        </div>
                        <div className="my-5">
                            <h2 className="input_header">Password</h2>
                            <input onChange={(e) => setPassword(e.target.value)} className="form_input" type="password" placeholder="Password" required name="password"></input>
                        </div>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="black_btn bg-pail_navy border-pail_navy my-10 w-full">
                            {submitting ? "Signing In..." : "Sign In"}
                        </button>
                    </form>
                    <p className="w-full text-center my-10" type="hidden">Don't have an account? <Link href="/signup" className="hover:underline text-pail_blue">Sign Up</Link></p>
                </div>
            </aside>
        </>
    )
}


export default SigninForm;