"use client"

import '@styles/globals.css'
import Nav from '@components/Nav'
import Image from "next/image";

const Home = () => {
  return (
    <div>
        <Nav/>
        <section>
            <div className='flex justify-between px-36 pb-20 pt-10'>
                <div className='w-1/2'>
                   <h1 className='text-7xl font-palanquin my-10'>Become a seller on Pail</h1>
                    <p className='text-2xl font-palanquin my-10'>Reach more customers than ever before</p>
                    <button
                        type="button"
                        onClick = {() => {}}
                        className="black_btn my-10">
                        Sign Up
                    </button> 
                </div>
                <div className='w-1/2 relative'>
                    <Image 
                        src="/assets/images/splash.svg" 
                        alt="Splash graphic" 
                        width={0}
                        height={0}
                        className="absolute bottom-0 left-0 w-[800px]"/>
                </div>
            </div>
        </section>
        <section>
            <div className='text-white bg-black px-36 py-20'>
                <h1 className='text-7xl font-palanquin w-100 text-center'>Sell More with Pail</h1>
                <div className='grid grid-cols-3 gap-10 my-10'>
                    <div>
                        <h2 className='text-5xl font-palanquin my-5'>Reach Millions</h2>
                        <p className='text-2xl font-palanquin'>Enjoy the reach of our platform, bringing your products to a larger market.</p>
                    </div>
                    <div>
                        <h2 className='text-5xl font-palanquin my-5'>Streamline your Operation</h2>
                        <p className='text-2xl font-palanquin'>Our platform groups buyers into large scale orders, so you can streamline your operation.</p>
                    </div>
                    <div>
                        <h2 className='text-5xl font-palanquin my-5'>Enhance Brand Exposure</h2>
                        <p className='text-2xl font-palanquin'>Joining our platform grants you exposure to your target audience, offering a unique opportunity to showcase your products and expand your brand presence.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='px-36 py-20'>
                <h1 className='text-7xl font-palanquin w-100 text-center'>Sign Up Today!</h1>
                <div className='relative'>
                    <div className='w-full h-full flex justify-center align-middle'>
                        <button
                            type="button"
                            onClick = {() => {}}
                            className="black_btn my-20">
                            Sign Up
                        </button> 
                    </div>
                    <Image 
                        src="/assets/images/splash2.svg" 
                        alt="Splash graphic" 
                        width={0}
                        height={0}
                        className="absolute bottom-0 left-0 right-0 ml-auto mr-auto w-[800px]"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home