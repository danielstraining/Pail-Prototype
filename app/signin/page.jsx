import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import SigninForm from "@components/SigninForm";

async function SignIn() {

    const session = await getServerSession(authOptions)
    if (session) redirect("/dashboard")

    return (
        <SigninForm />
    )
}

export default SignIn;