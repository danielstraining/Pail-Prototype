import Image from "next/image"
import { Plus } from "lucide-react"

export const Listings = ({ children = [], setPage }) => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Your listings</h2>
            <div className="w-full flex justify-center bg-pail_tan rounded-xl my-10 p-5">
                {children?.length === 0 &&
                    <div className="relative flex flex-col w-full items-center my-10">
                        <h1 className="text-3xl mb-10">You have no products listed yet!</h1>
                        <p className="text-xl text-gray-600 mb-10">Start now by listing your first item...</p>
                        <button
                            type="button"
                            onClick={() => { setPage('createListing') }}
                            className="black_btn bg-pail_navy border-pail_navy z-10">
                            <Plus size={50} />
                        </button>
                        <Image
                            src="/assets/images/ColouredSplash2.svg"
                            alt="Splash graphic"
                            width={0}
                            height={0}
                            className="absolute bottom-0 w-2/3" />
                    </div>
                }
            </div>
        </section>
    )
}

export const HomeOverview = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const OrdersOverview = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const BillingsOverview = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const StatisticsOverview = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const SalesSummary = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Sales Summary</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}





const SaveProgress = () => {
    return (
        <div>
            <div className="w-full">
                <h1 className="text-7xl my-10">Create Listing</h1>
                <h3 className="text-2xl my-10">List, remove and edit your products</h3>
            </div>
            <section className="m-0">
                <div className="w-full flex justify-between mb-10">
                    <div className="w-2/3">
                        <h3 className="text-3xl my-10">Product Header</h3>
                    </div>
                    <div className="relative flex justify-end items-end w-1/3">
                        <Image
                            src="/assets/images/splash2.svg"
                            alt="Splash graphic"
                            width={0}
                            height={0}
                            className="absolute w-5/6 right-0 bottom-0" />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center my-10 h-[450px]">
                    <div className="flex flex-col h-full w-1/2 mr-5">
                        <div className="bg-blue-50 flex flex-col rounded-xl w-full h-full p-5">
                            <h1 className="text-2xl mb-5">Product Pictures</h1>
                            <div className="w-full h-full flex flex-col justify-between items-center">
                                <Image
                                    src="/assets/icons/ImageIcon.svg"
                                    alt="Splash graphic"
                                    width={0}
                                    height={0}
                                    className="w-44" />
                                <button
                                    type="button"
                                    onClick={() => { }}
                                    className="black_btn cursor-pointer">
                                    Add images
                                </button>
                                <p className="text-center px-5">(Images must be in png or jpg format and be between xgb and ygb)</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex flex-col w-1/2 ml-5">
                        <div className="bg-blue-50 rounded-xl w-full mb-5 p-5">
                            <h1 className="text-2xl mb-5">Product Title</h1>
                            <input onChange={() => { }} className="form_input" required name="Title" />
                        </div>
                        <div className="bg-blue-50 flex flex-col rounded-xl w-full mt-5 p-5 h-full">
                            <h1 className="text-2xl mb-5">Product Description</h1>
                            <textarea onChange={() => { }} className="form_input h-full resize-none" required name="Description" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-0">
                <div className="w-full flex justify-between mb-10">
                    <h3 className="text-2xl mt-10">Variations</h3>
                </div>
                <div className="w-full flex justify-between items-center my-10 h-[450px]">
                    <div className="flex flex-col h-full w-1/2 mr-5">
                        <div className="bg-blue-50 flex flex-col rounded-xl w-full h-full p-5">
                            <h1 className="text-2xl mb-5">Product Pictures</h1>
                            <div className="w-full h-full flex flex-col justify-between items-center">
                                <Image
                                    src="/assets/icons/ImageIcon.svg"
                                    alt="Splash graphic"
                                    width={0}
                                    height={0}
                                    className="w-44" />
                                <button
                                    type="button"
                                    onClick={() => { }}
                                    className="black_btn cursor-pointer">
                                    Add images
                                </button>
                                <p className="text-center px-5">(Images must be in png or jpg format and be between xgb and ygb)</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex flex-col w-1/2 ml-5">
                        <div className="bg-blue-50 rounded-xl w-full mb-5 p-5">
                            <h1 className="text-2xl mb-5">Product Title</h1>
                            <input onChange={() => { }} className="form_input" required name="Title" />
                        </div>
                        <div className="bg-blue-50 flex flex-col rounded-xl w-full mt-5 p-5 h-full">
                            <h1 className="text-2xl mb-5">Product Description</h1>
                            <textarea onChange={() => { }} className="form_input h-full resize-none" required name="Description" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-0">
                <div className="w-full flex justify-between mb-10">
                    <h3 className="text-2xl mt-10">Dynamic Pricing</h3>
                </div>
                <div className="w-full flex justify-between items-center my-10 h-[450px]">
                    <div className="flex flex-col h-full w-1/2 mr-5">
                        <div className="bg-blue-50 flex flex-col rounded-xl w-full h-full p-5">
                            <h1 className="text-2xl mb-5">Product Pictures</h1>
                            <div className="w-full h-full flex flex-col justify-between items-center">
                                <Image
                                    src="/assets/icons/ImageIcon.svg"
                                    alt="Splash graphic"
                                    width={0}
                                    height={0}
                                    className="w-44" />
                                <button
                                    type="button"
                                    onClick={() => { }}
                                    className="black_btn cursor-pointer">
                                    Add images
                                </button>
                                <p className="text-center px-5">(Images must be in png or jpg format and be between xgb and ygb)</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex flex-col w-1/2 ml-5">
                        <div className="bg-blue-50 rounded-xl w-full mb-5 p-5">
                            <h1 className="text-2xl mb-5">Product Title</h1>
                            <input onChange={() => { }} className="form_input" required name="Title" />
                        </div>
                        <div className="bg-blue-50 flex flex-col rounded-xl w-full mt-5 p-5 h-full">
                            <h1 className="text-2xl mb-5">Product Description</h1>
                            <textarea onChange={() => { }} className="form_input h-full resize-none" required name="Description" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}