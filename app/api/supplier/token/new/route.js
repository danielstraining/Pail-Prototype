import { connectToDB } from "@utils/database";
import ActivationToken from "@models/activationToken";

export const POST = async (request) => {
    const { email, token} = await request.json();
    console.log(email, token)

    try {
        await connectToDB();
        const newToken = new ActivationToken({ email: email, token: token});
        console.log("Token to be added: ", newToken)

        await newToken.save();
        
        console.log('Save Successful!')
        return new Response(JSON.stringify(newToken), { status: 201 })
    } catch (error) {
        console.log(`Failed to add token to the database: ${error}`)
        return new Response(error, { status: 500 });
    }
}