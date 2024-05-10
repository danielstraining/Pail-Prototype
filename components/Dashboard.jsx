"use client"

import { useState, useEffect } from "react";
import { SideBar, SideBarItem } from "./SideBar"
import { LayoutDashboard, LifeBuoy, Settings, ScanBarcode, Receipt, BarChart3, LogOut, Paintbrush, CircleDollarSign } from "lucide-react";
import { signOut } from "next-auth/react";
import { AccountActions } from "./AcountActions";


const accountActionsData = [
    {
        title: 'Choose a company name',
        description: 'Choose a company name that will represent your business on Pail',
        icon: <Paintbrush size={20}/>,
        link: () => {},
    }, 
    {
        title: 'Add payment information',
        description: 'Register your payment information to be able to list products on Pail',
        icon: <CircleDollarSign size={20}/>,
        link: () => {},
    }, 
]

export function Dashboard() {
    
    const [currentPage, setCurrentPage] = useState('overview')
    
    return (
        <div className="flex justify-between">
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
            <div className=" w-full">
                <DashBoardContent currentPage={currentPage}/>
            </div>
        </div>
      
    )
}

export function DashBoardContent( {currentPage} ){

    return(
        <div className="m-8">{currentPage}
            {currentPage === "overview" && // Overview
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10">Welcome to Pail</h1>
                    <h3 className="text-2xl font-palanquin my-10">Your business at a glance</h3>
                    <div>
                       <h2 className="text-3xl font-palanquin my-10">Overview</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div> 
                    </div>
                    <div>
                        <h2 className="text-3xl font-palanquin my-10">Sales Summary</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div>
                    </div>
                    <AccountActions></AccountActions>
                </div>
            }

        </div>
    )
}