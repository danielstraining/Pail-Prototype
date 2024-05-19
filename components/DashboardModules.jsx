import Image from "next/image"
import { Plus } from "lucide-react"

export const Listings = ({ children = [], setPage }) => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10 text-pail_blue">Your listings</h2>
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
            <h2 className="text-3xl my-10 text-pail_blue">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const OrdersOverview = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10 text-pail_blue">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const BillingsOverview = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10 text-pail_blue">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const StatisticsOverview = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10 text-pail_blue">Overview</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

export const SalesSummary = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10 text-pail_blue">Sales Summary</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

