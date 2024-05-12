"use client"

import { useState, useEffect } from "react";
import { SideBar, SideBarItem } from "./SideBar"
import { LayoutDashboard, LifeBuoy, Settings, ScanBarcode, Receipt, BarChart3, LogOut, Plus, Paintbrush, CircleDollarSign } from "lucide-react";
import { signOut } from "next-auth/react";
import { AccountActions } from "./AcountActions";
import Image from "next/image";

export function Dashboard() {
    
    const [currentPage, setCurrentPage] = useState('overview')
    
    return (
        <div className="flex justify-between">
            <SideBar>
                <SideBarItem icon={<LayoutDashboard size={20}/>} text="Overview" selected={currentPage==='overview'} onClickFunction={() => {setCurrentPage('overview')}}/>
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
                <DashBoardContent currentPage={currentPage} setPage={setCurrentPage}/>
            </div>
        </div>
      
    )
}

export function DashBoardContent( {currentPage, setPage} ){

    const [listings, setListings] = useState([])

    return(
        <div className="m-8 font-palanquin">

            {currentPage === "overview" && // Overview
                <div className="w-full">
                    <h1 className="text-7xl my-10">Welcome to Pail</h1>
                    <h3 className="text-2xl my-10">Your business at a glance</h3>
                    <div>
                       <h2 className="text-3xl my-10">Overview</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div> 
                    </div>
                    <div>
                        <h2 className="text-3xl my-10">Sales Summary</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div>
                    </div>
                    <AccountActions></AccountActions>
                </div>
            }

            {currentPage === "products" && // Products
                <div className="w-full">
                    <h1 className="text-7xl my-10">Products</h1>
                    <h3 className="text-2xl my-10">List, remove and edit your products</h3>
                    <div>
                        <h2 className="text-3xl my-10">Your listings</h2>
                        <div className="w-full flex justify-center bg-blue-50 rounded-xl my-10 p-5">
                            {listings.length === 0 &&
                                <div className="relative flex flex-col w-full items-center my-10">
                                    <h1 className="text-3xl mb-10">You have no products listed yet!</h1>
                                    <p className="text-xl text-gray-600 mb-10">Start now by listing your first item...</p>
                                    <button
                                        type="button"
                                        onClick = {() => {setPage('createListing')}}
                                        className="black_btn z-10">
                                        <Plus size={50}/>
                                    </button> 
                                    <Image 
                                    src="/assets/images/splash2.svg" 
                                    alt="Splash graphic" 
                                    width={0}
                                    height={0}
                                    className="absolute bottom-0 w-2/3"/>
                                </div>
                            }
                        </div> 
                        <AccountActions></AccountActions>
                    </div>
                </div>
            }

            {currentPage === "createListing" && // List item
                <div className="w-full">
                    <h1 className="text-7xl my-10">Create listing</h1>
                    <h3 className="text-2xl my-10">Add a product to your store. Add pictures, tags and define pools</h3>
                </div>
            }

            {currentPage === "orders" && // Orders
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10">Orders</h1>
                    <h3 className="text-2xl font-palanquin my-10">Keep track of your orders</h3>
                    <div>
                       <h2 className="text-3xl font-palanquin my-10">Overview</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div> 
                    </div>
                </div>
            }

            {currentPage === "billings" && // Billings
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10">Billings</h1>
                    <h3 className="text-2xl font-palanquin my-10">Keep track of your inflows</h3>
                    <div>
                       <h2 className="text-3xl font-palanquin my-10">Overview</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div> 
                    </div>
                </div>
            }

            {currentPage === "statistics" && // Statistics
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10">Statistics</h1>
                    <h3 className="text-2xl font-palanquin my-10">See your business in numbers</h3>
                    <div>
                       <h2 className="text-3xl font-palanquin my-10">Overview</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div> 
                    </div>
                </div>
            }

            {currentPage === "settings" && // Settings
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10">Settings</h1>
                    <h3 className="text-2xl font-palanquin my-10">Customise your Pail experience</h3>
                    <div>
                       <h2 className="text-3xl font-palanquin my-10">Overview</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div> 
                    </div>
                </div>
            }

            {currentPage === "help" && // Help
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10">Help</h1>
                    <h3 className="text-2xl font-palanquin my-10">Stuck? We're here to help</h3>
                    <div>
                       <h2 className="text-3xl font-palanquin my-10">Overview</h2>
                        <div className="w-full h-80 bg-blue-50 rounded-xl my-10"></div> 
                    </div>
                </div>
            }
        </div>
    )
}
