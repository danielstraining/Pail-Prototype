
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

        console.log("creating transporter")
        // Transporter for sending the activation token
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD,
            },
        });
        console.log("Transporter created successfully")

        console.log("Creating message data")
        // Create the message data to be sent
        const messageData = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Account Activation',
            text: `Hello,\nThis is a test email.\nYour activation token is: ${token}`,
        };
        console.log("message data created successfully")

        // Send the email
        console.log("Sending message")
        await transporter.sendMail(messageData);
        console.log("Message sent!")

        return new Response("Activation email sent successfully", { status: 201 })
    } catch (error) {
        return new Response(error, { status: 500 });
    }
}