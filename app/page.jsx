"use client"

import '@styles/globals.css'
import Nav from '@components/Nav'
import Image from "next/image";

const Home = () => {
  return (
    <div>
        <Nav/>
        <section>
            <div className='flex justify-between px-36 py-10 bg-green-200'>
                <div className='w-1/2'>
                   <h1 className='text-7xl font-palanquin my-10'>Become a seller on Pail</h1>
                    <p className='text-3xl font-palanquin my-10'>Reach more customers than ever before</p>
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
            <div className='text-white bg-black px-36 py-10'>
                <h1 className='text-7xl font-palanquin w-100 bg-red-200 text-center'>Sell more with Pail</h1>
                <div className='flex justify-between align-middle'>
                    <div>
                        <h2>Reach Millions</h2>
                        <p>Enjoy the reach of our platform, bringing your products to a larger market.</p>
                    </div>
                    <div>
                        <h2>Streamline your Operation</h2>
                        <p>Our platform groups buyers into large scale orders, so you can streamline your operation.</p>
                    </div>
                    <div>
                        <h2>Enhance Brand Exposure</h2>
                        <p>Joining our platform grants you exposure to your target audience, offering a unique opportunity to showcase your products and expand your brand presence.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home