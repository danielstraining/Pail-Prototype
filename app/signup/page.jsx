import Image from "next/image";
import Link from "next/link";
import { connectToDB } from "@utils/database";
import Supplier from "@models/supplier";


function SignUp(){

    async function registerSeller(event){ // Might need to put this into an api endpoint 
        "use server"
        console.log("beginning registration")
        console.log("connecting to db")
        await connectToDB();
        console.log("adding suppler")
        await Supplier.create({
            email: event.get('email'),
            password: event.get('password'),
        })
        console.log('user added to database')


        console.log(event.get('email'))
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
                            action={registerSeller}
                        >
                            <div className="my-4">
                                <h2 className="input_header">Email</h2>
                                <input className="form_input" placeholder="example@business.com" required name="email"></input>   
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


export default SignUp