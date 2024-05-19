"use client"
import { useState } from "react"

import { ChevronLeft, ChevronRight, CreditCard, ALargeSmall, Target, Star } from "lucide-react"

export function AccountActions( {children} ){

    return (
        <section className="w-full my-16">
            <h2 className="text-3xl my-10">Account Actions</h2>
            <div className="w-full">
                <Carousel>
                    <AccountActionsCard 
                        title="Give your business a name" 
                        description="Make your business stand out with a unique name to make your brand stand out"
                        icon={<ALargeSmall size={60}/>}
                        onClickFunction={() => {}}
                    
                    />
                    <AccountActionsCard
                        title="Add payment information" 
                        description="Register your payment information to be able to list products on Pail"
                        icon={<CreditCard size={60}/>}
                        onClickFunction={() => {}}
                    />
                    <AccountActionsCard
                        title="List your first product" 
                        description="Get started on your Pail journey by listing your first product"
                        icon={<Target size={60}/>}
                        onClickFunction={() => {}}
                    />
                    <AccountActionsCard
                        title="Rate the app" 
                        description="We appreciate your feedback to improve the Pail experience"
                        icon={<Star size={60}/>}
                        onClickFunction={() => {}}
                    />
                </Carousel>
            </div>
        </section>
    )
}

export function Carousel( {children} ){
    const [slide, setSlide] = useState(0);

    const next = () => {setSlide((slide) => (slide === children.length - 1 ? 0 : slide + 1))}
    const prev = () => {setSlide((slide) => (slide === 0 ? children.length - 1 : slide - 1))}

    return(
        <div className="relative w-full h-96 overflow-hidden">
            <ul 
                className="absolute left-10 top-0 bottom-0 flex overflow-x-auto items-center transition-transform ease-out duration-500 z-10"
                style={{ transform: `translateX(-${slide * 100/children.length}%)` }}
            >
                {children}
            </ul>
            <div className="absolute left-0 right-0 top-0 h-full flex items-center justify-between p-4">
                {slide !== 0 ?
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-black hover:bg-white z-20">
                    <ChevronLeft size={20}/>
                </button>
                :
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-black hover:bg-white invisible">
                    <ChevronLeft size={20}/>
                </button>
                }
                {slide !== children.length-1 ?
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-black hover:bg-white z-20">
                    <ChevronRight size={20}/>
                </button>
                :
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-black hover:bg-white invisible">
                    <ChevronRight size={20}/>
                </button>
                }
            </div>
            <div className="absolute left-0 bottom-0 m-3 text-center">{slide}</div>
        </div>
    )
}

export function AccountActionsCard({ title, description, icon, onClickFunction }){
    return (
        <li className="w-72 p-5 my-5 bg-pail_tan rounded-xl mr-10">
            <div className="flex justify-between items-center mb-5 pr-3">
                <h1 className="text-pail_blue text-2xl">{title}</h1>  
                {icon}
            </div>
            <p className="mb-5 text-xl text-pail_navy">{description}</p>
            <button
                type="button"
                onClick = {onClickFunction}
                className="black_btn bg-pail_navy border-pail_navy cursor-pointer">
                Complete now
            </button> 
        </li>
    )
}