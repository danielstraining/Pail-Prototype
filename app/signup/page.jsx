"use client"
import { useState, useEffect } from "react";

function SignUp(){
    return (
        <>
            <div>Sign Up Page</div>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12 w-[500px]">
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