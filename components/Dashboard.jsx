"use client"

import { useState, useEffect } from "react";
import { SideBar, SideBarItem } from "./SideBar"
import { LayoutDashboard, LifeBuoy, Settings, ScanBarcode, Receipt, BarChart3, LogOut, Plus, Paintbrush, CircleDollarSign } from "lucide-react";
import { signOut } from "next-auth/react";
import { AccountActions } from "./AcountActions";
import Image from "next/image";
import { Listings, HomeOverview, SalesSummary, OrdersOverview, StatisticsOverview, BillingsOverview } from "./DashboardModules";
import { CreateListing } from "./CreateListing";

export function Dashboard() {

    const [currentPage, setCurrentPage] = useState('Home')

    return (
        <div className="flex justify-between">
            <SideBar>
                <SideBarItem icon={<LayoutDashboard size={20} />} text="Home" onClickFunction={() => { setCurrentPage('Home') }} />
                <SideBarItem icon={<ScanBarcode size={20} />} text="Products" onClickFunction={() => { setCurrentPage('products') }} />
                <SideBarItem icon={<LayoutDashboard size={20} />} text="Orders" onClickFunction={() => { setCurrentPage('orders') }} alert />
                <SideBarItem icon={<Receipt size={20} />} text="Billings" onClickFunction={() => { setCurrentPage('billings') }} alert />
                <SideBarItem icon={<BarChart3 size={20} />} text="Statistics" onClickFunction={() => { setCurrentPage('statistics') }} />
                <hr className="my-3"></hr>
                <SideBarItem icon={<Settings size={20} />} text="Settings" onClickFunction={() => { setCurrentPage('settings') }} />
                <SideBarItem icon={<LifeBuoy size={20} />} text="Help" onClickFunction={() => { setCurrentPage('help') }} />
                <SideBarItem icon={<LogOut size={20} />} text="Sign Out" onClickFunction={signOut} />
            </SideBar>
            <div className=" w-full">
                <DashBoardContent currentPage={currentPage} setPage={setCurrentPage} />
            </div>
        </div>

    )
}

export function DashBoardContent({ currentPage, setPage }) {

    const [listings, setListings] = useState([])

    return (
        <div className="m-8 font-palanquin">

            {currentPage === "Home" && // Overview
                <>
                    <h1 className="text-7xl my-10 text-pail_green">Welcome to Pail</h1>
                    <h3 className="text-2xl my-10 text-pail_green">Your business at a glance</h3>
                    <HomeOverview />
                    <SalesSummary />
                    <AccountActions />
                </>
            }

            {currentPage === "products" && // Products
                <>
                    <h1 className="text-7xl my-10 text-pail_green">Products</h1>
                    <h3 className="text-2xl my-10 text-pail_green">List, remove and edit your products</h3>
                    <Listings setPage={setPage} />
                    <AccountActions />
                </>
            }

            {currentPage === "createListing" && // List item
                <>
                    <h1 className="text-7xl my-10 text-pail_green">Create Listing</h1>
                    <h3 className="text-2xl my-10 text-pail_green">Add a product to your store. Add pictures, tags and define pools</h3>
                    <CreateListing />
                </>
            }

            {currentPage === "orders" && // Orders
                <>
                    <h1 className="text-7xl font-palanquin my-10 text-pail_green">Orders</h1>
                    <h3 className="text-2xl font-palanquin my-10 text-pail_green">Keep track of your orders</h3>
                    <OrdersOverview />
                </>
            }

            {currentPage === "billings" && // Billings
                <>
                    <h1 className="text-7xl font-palanquin my-10 text-pail_green">Billings</h1>
                    <h3 className="text-2xl font-palanquin my-10 text-pail_green">Keep track of your inflows</h3>
                    <BillingsOverview />
                </>
            }

            {currentPage === "statistics" && // Statistics
                <>
                    <h1 className="text-7xl font-palanquin my-10 text-pail_green">Statistics</h1>
                    <h3 className="text-2xl font-palanquin my-10 text-pail_green">See your business in numbers</h3>
                    <StatisticsOverview />
                </>
            }

            {currentPage === "settings" && // Settings
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10 text-pail_green">Settings</h1>
                    <h3 className="text-2xl font-palanquin my-10 text-pail_green">Customise your Pail experience</h3>
                    <StatisticsOverview />
                </div>
            }

            {currentPage === "help" && // Help
                <div className="w-full">
                    <h1 className="text-7xl font-palanquin my-10 text-pail_green">Help</h1>
                    <h3 className="text-2xl font-palanquin my-10 text-pail_green">Stuck? We're here to help</h3>
                    <StatisticsOverview />
                </div>
            }
        </div>
    )
}
