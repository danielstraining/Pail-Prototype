
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import Dashboard from "@components/Dashboard";

export default async function DashboardPage() {
  
  const session = await getServerSession(authOptions)
  if (!session) redirect("/signin")

  return (
    <Dashboard/>
  )
}