import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { SideBar, SideBarItem } from "@components/SideBar";
import { LayoutDashboard, LifeBuoy, Settings, ScanBarcode, Receipt, BarChart3 } from "lucide-react";

export default async function Dashboard() {
  
  const session = await getServerSession(authOptions)
  if (!session) redirect("/signin")

  return (
    <SideBar>
      <SideBarItem icon={<LayoutDashboard size={20}/>} text="Overview"/>
      <SideBarItem icon={<ScanBarcode size={20}/>} text="Products"/>
      <SideBarItem icon={<LayoutDashboard size={20}/>} text="Orders" alert/>
      <SideBarItem icon={<Receipt size={20}/>} text="Billings" alert/>
      <SideBarItem icon={<BarChart3 size={20}/>} text="Statistics"/>
      <hr className="my-3"></hr>
      <SideBarItem icon={<Settings size={20}/>} text="Settings"/>
      <SideBarItem icon={<LifeBuoy size={20}/>} text="Help"/>
    </SideBar>
  )
}