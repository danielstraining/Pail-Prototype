import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import LandingPage from "@components/LandingPage";
import Nav from "@components/Nav";

const Home = async () => {

    const session = await getServerSession(authOptions)
    if (session) redirect("/dashboard")

    return (
        <>
            <Nav/>
            <LandingPage/>
        </>
    )
}

export default Home