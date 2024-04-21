import { connectToDB } from "@utils/database";
import ActivationToken from "@models/activationToken";
import { v4 } from "uuid"


const generateActivationToken = async () => {
    try {
        const token = `${v4()}${v4()}`
        return token
    } catch (error) {
        console.log("Failed to generate activation token.")
        throw new Error(error)
    }
}

export const GET = async (request) => {
    try{
        // Connect to the database
        await connectToDB();
        
        // Set validToken initially to false. 
        // This will be true once a valid activation token has been generated.
        let validToken = false;
        let generationAttempts = 0;
        let maxAttempts = 5;
        let activationToken = "";

        while (!validToken && generationAttempts < maxAttempts) {
            // Generate a token
            activationToken = await generateActivationToken();
            console.log('Token generated successfully')
            console.log("token: ", activationToken)
            
            // Check in the db if the token already exists.
            const tokens = await ActivationToken.find({
                token: activationToken
            })

            if (tokens.length <= 0) {
                console.log("Valid token created")
                validToken = true
            } else {
                console.log("A token was generated that already exists")
            }
            generationAttempts ++
        }
        
        if (generationAttempts >= maxAttempts){
            throw new Error("Could not generate token within max attempts.")
        }

        if (activationToken === ""){
            throw new Error("No activation code generated.")
        }

        return new Response(JSON.stringify(activationToken), {status: 200})

    } catch (error) {
        console.log("Failed to generate token.")
        return new Response(error, {status: 500})
    }
}