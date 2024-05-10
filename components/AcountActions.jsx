"use client"
import { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

export function AccountActions( {children} ){

    return (
        <section className="w-full flex justify-center my-10 bg-slate-50">
            <div className="w-full bg-blue-300">
                <Carousel>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
                    <AccountActionsCard/>
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
        <div className="relative w-full h-52 overflow-hidden bg-red-300">
            <div 
                className="absolute left-10 top-0 bottom-0 flex overflow-x-auto items-center transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${slide * 100/children.length}%)` }}
            >
                {children}
            </div>
            <div className="absolute left-0 right-0 top-0 h-full flex items-center justify-between p-4">
                {slide !== 0 ?
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-black hover:bg-white">
                    <ChevronLeft size={20}/>
                </button>
                :
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-black hover:bg-white invisible">
                    <ChevronLeft size={20}/>
                </button>
                }
                {slide !== children.length-1 ?
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-black hover:bg-white">
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

export function AccountActionsCard(){
    return (
        <div className=" w-52 h-36 my-5 bg-blue-200 mr-10"></div>
    )
}