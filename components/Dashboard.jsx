"use client"

import { useState, useEffect } from "react";
import { SideBar, SideBarItem } from "./SideBar"
import { LayoutDashboard, LifeBuoy, Settings, ScanBarcode, Receipt, BarChart3, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Dashboard() {
    
    const [currentPage, setCurrentPage] = useState('overview')
    
    return (
        <>
            <SideBar>
                <SideBarItem icon={<LayoutDashboard size={20}/>} text="Overview" onClickFunction={() => {setCurrentPage('overview')}}/>
                <SideBarItem icon={<ScanBarcode size={20}/>} text="Products" onClickFunction={() => {setCurrentPage('products')}}/>
                <SideBarItem icon={<LayoutDashboard size={20}/>} text="Orders" onClickFunction={() => {setCurrentPage('orders')}} alert/>
                <SideBarItem icon={<Receipt size={20}/>} text="Billings" onClickFunction={() => {setCurrentPage('billings')}} alert/>
                <SideBarItem icon={<BarChart3 size={20}/>} text="Statistics" onClickFunction={() => {setCurrentPage('statistics')}}/>
                <hr className="my-3"></hr>
                <SideBarItem icon={<Settings size={20}/>} text="Settings" onClickFunction={() => {setCurrentPage('settings')}}/>
                <SideBarItem icon={<LifeBuoy size={20}/>} text="Help" onClickFunction={() => {setCurrentPage('help')}}/>
                <SideBarItem icon={<LogOut size={20}/>} text="Sign Out" onClickFunction={signOut}/>
            </SideBar>
            <div>{currentPage}</div>
        </>
      
    )
  }