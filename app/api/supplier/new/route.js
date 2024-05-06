import { connectToDB } from "@utils/database";
import Supplier from "@models/supplier";
import bcryptjs from "bcryptjs-react";

export const POST = async (request) => {
    console.log("--- BEGINNING OF POST REQUEST ---")
    const { email, password} = await request.json();
    console.log(email, password)

    // const salt = await bcryptjs.genSalt(12);
    // const hashedPassword = await bcryptjs.hash(password, salt);
    // console.log(hashedPassword)

    try {
        await connectToDB();
        const newSupplier = new Supplier({ email: email, password: password});
        console.log("new supplier...")
        console.log(newSupplier)

        await newSupplier.save();
        
        console.log('Save Successful!')
        return new Response(JSON.stringify(newSupplier), { status: 201 })
    } catch (error) {
        return new Response(`Failed to add a new supplier to the database: ${error}`, { status: 500 });
    }
}