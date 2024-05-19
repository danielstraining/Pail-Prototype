"use client"

import '@styles/globals.css'
import Image from "next/image";
import { useRouter } from "next/navigation"

const LandingPage = () => {
    const router = useRouter();

    const handleSignUp = () => {
        router.push("/signup");
    }

    return (
        <div>
            <section>
                <div className="flex justify-between px-28 pb-20 pt-10">
                    <div className='w-1/2'>
                    <h1 className={`text-7xl font-palanquin my-10 text-pail_green`}>Become a seller on Pail</h1>
                        <p className='text-2xl font-palanquin my-10 text-pail_green'>Reach more customers than ever before</p>
                        <button
                            type="button"
                            onClick = {handleSignUp}
                            className="black_btn bg-pail_navy border-pail_navy my-10">
                            Sign Up
                        </button> 
                    </div>
                    <div className='w-1/2 relative'>
                        <Image 
                            src="/assets/images/ColouredSplash1.svg" 
                            alt="Splash graphic" 
                            width={0}
                            height={0}
                            className="absolute bottom-0 left-0 w-[800px]"/>
                    </div>
                </div>
            </section>
            <section>
                <div className='text-pail_navy bg-pail_tan px-28 py-20'>
                    <h1 className='text-7xl font-palanquin text-pail_red w-100 text-center mt-10 mb-20'>Sell More with Pail</h1>
                    <div className='grid grid-cols-3 gap-10 mt-20 mb-10'>
                        <div>
                            <div className='flex justify-between align-middle'>
                                <h2 className='text-5xl text-pail_green font-palanquin my-5 w-4/5'>Reach Millions</h2>
                                <Image 
                                    src="/assets/icons/globe.svg"
                                    alt="globe" 
                                    width={60}
                                    height={60}
                                    className=""/>    
                            </div>
                            <p className='text-2xl font-palanquin'>Enjoy the reach of our platform, bringing your products to a larger market.</p>
                        </div>
                        <div>
                            <div className='flex justify-between align-middle'>
                                <h2 className='text-5xl text-pail_green font-palanquin my-5 w-4/5'>Streamline your Operation</h2>
                                <Image 
                                    src="/assets/icons/cog.svg" 
                                    alt="globe" 
                                    width={60}
                                    height={60}
                                    className=""/>    
                            </div>
                            <p className='text-2xl font-palanquin'>Our platform groups buyers into large scale orders, so you can streamline your operation.</p>
                        </div>
                        <div>
                            <div className='flex justify-between align-middle'>
                                <h2 className='text-5xl text-pail_green font-palanquin my-5 w-4/5'>Enhance Brand Exposure</h2>
                                <Image 
                                    src="/assets/icons/flash.svg" 
                                    alt="globe" 
                                    width={60}
                                    height={60}
                                    className=""/>    
                            </div>
                            <p className='text-2xl font-palanquin'>Joining our platform grants you exposure to your target audience, offering a unique opportunity to showcase your products and expand your brand presence.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='px-28 py-20'>
                    <h1 className='text-7xl text-pail_blue font-palanquin w-100 text-center mt-10 mb-20'>Sign Up Today!</h1>
                    <div className='relative'>
                        <div className='w-full h-full flex justify-center align-middle'>
                            <button
                                type="button"
                                onClick = {handleSignUp}
                                className="black_btn border-pail_navy bg-pail_navy my-20 z-10">
                                Sign Up
                            </button> 
                        </div>
                        <Image 
                            src="/assets/images/ColouredSplash2.svg" 
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

export default LandingPage