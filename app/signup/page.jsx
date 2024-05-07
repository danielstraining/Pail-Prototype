import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import SignupForm from "@components/SignupForm";

async function SignUp() {

    const session = await getServerSession(authOptions)
    if (session) redirect("/dashboard")

    return (
        <SignupForm/>
    )
}


export default SignUp;