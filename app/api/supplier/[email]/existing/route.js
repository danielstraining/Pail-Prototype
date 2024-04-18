import { connectToDB } from "@utils/database";
import Supplier from "@models/supplier";

export const GET = async (request, { params }) => {
    try{
        // Connect to the database
        await connectToDB();

        // fetch an array containing all entries with the requested email
        const suppliers = await Supplier.find({
            email: params.email
        })

        // set to true if the supplier exists (length of the returned list is greater than 0)
        // set to false if the supplier does not exist (length of returned list is 0)
        const supplierExists = suppliers.length > 0

        return new Response(supplierExists, {status: 200})
    } catch (error) {
        return new Response("Failed to verify if account exists.", {status: 500})
    }
}