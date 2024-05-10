"use client"

import { useState, useEffect } from "react";
import { SideBar, SideBarItem } from "./SideBar"
import { LayoutDashboard, LifeBuoy, Settings, ScanBarcode, Receipt, BarChart3, LogOut } from "lucide-react";

export default async function Dashboard() {
    
    const [currentPage, setCurrentPage] = useState('overview')
    
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
        <SideBarItem icon={<LogOut size={20}/>} text="Sign Out"/>
      </SideBar>
    )
  }