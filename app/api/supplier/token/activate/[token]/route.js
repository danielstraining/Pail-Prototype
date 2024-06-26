import { connectToDB } from "@utils/database";
import ActivationToken from "@models/activationToken";
import Supplier from "@models/supplier";
import { hoursElapsed } from "@utils/utils";
import { redirect } from "next/navigation";

export const GET = async (request, { params }) => {
    try{
        
        // Connect to the database
        await connectToDB();
        var none = false;
        var expired = false;

        // fetch an array containing all entries with the requested email
        const token = await ActivationToken.findOne({
            token: params.token
        })

        const tokenAge = await hoursElapsed(Date.parse(token.createdAt))

        if (!token) {
            console.log("This token does not exist in the database");
            none = true;
        } else if (tokenAge > 24) {
            console.log("This token does not exist in the database")
            expired = true;
        } else {
            const account = await Supplier.findOne({
                email: token.email
            })

            // Change active to true and save
            account.active = true;
            await account.save();
            console.log("Account activated successfully");
        }

        return new Response({status: 200})
    } catch (error) {
        console.log("Failed to activate token")
        return new Response(error, {status: 500})
    } finally {
        if (none) {
            redirect('/signup/none')
        } else if (expired) {
            redirect('/signup/expired')
        } else {
            redirect('/signup/activated')  
        }
    }
}

