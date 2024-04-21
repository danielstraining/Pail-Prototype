import { connectToDB } from "@utils/database";
import ActivationToken from "@models/activationToken";
import { hoursElapsed } from "@utils/utils";

export const GET = async (request, { params }) => {
    try{
        console.log("ACTIVATING TOKEN ENDPOINT")
        // Connect to the database
        await connectToDB();

        console.log("Params: ", params)

        // fetch an array containing all entries with the requested email
        const token = await ActivationToken.find({
            token: params.token
        })

        const tokenAge = await hoursElapsed(Date.parse(token[0].createdAt))

        if (token) {
            console.log(`Token found! Hours since creation: ${tokenAge}`)
        }
    
        return new Response({status: 200})
    } catch (error) {
        console.log("Failed to activate token")
        return new Response(error, {status: 500})
    }
}

