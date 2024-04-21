
import nodemailer from 'nodemailer';
import ActivationToken from "@models/activationToken";
import { connectToDB } from "@utils/database";
import { generateActivationToken } from "@utils/utils";

export const POST = async (request) => {
    console.log("AT ACTIVATION EMAIL API ENDPOINT")

    const { email } = await request.json();

    try {
        await connectToDB();

        // Generate an activation token and save to the database.
        const token = await generateActivationToken()
        const newToken = new ActivationToken({ email: email, token: token});
        await newToken.save();

        // Transporter for sending the activation token
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Create the message data to be sent
        const messageData = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Account Activation',
            html:`
                <html>
                    <head>
                        <style>
                            /* Include Tailwind CSS styles here */
                            @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
                        </style>
                    </head>
                    <body>
                        <div class="p-4 bg-gray-100">
                            <h1 class="text-2xl font-bold mb-4">Account Activation</h1>
                            <p>Hello,</p>
                            <p>This is a test email.</p>
                            <p>Your activation token is: http://localhost:3000/activate/${token}</p>
                            <p><a href="http://localhost:3000/activate/${token}">Click here!</a><p>
                        </div>
                    </body>
                </html>
            `,
        };

        // Send the email
        await transporter.sendMail(messageData);
        console.log("Message sent!")

        return new Response("Activation email sent successfully", { status: 201 })
    } catch (error) {
        console.log("API CATCH BLOCK")
        return new Response(error, { status: 500 });
    }
}