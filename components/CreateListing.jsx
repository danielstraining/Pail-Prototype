import Image from "next/image"


const CreateListingHeader = ({ images = [] }) => {
    return (
        <section className="my-16">
            <div className="w-full flex justify-between">
                <div className="w-2/3">
                    <h3 className="text-3xl"></h3>
                </div>
                <div className="relative flex justify-end items-end w-1/3">
                    <Image
                        src="/assets/images/ColouredSplash1.svg"
                        alt="Splash graphic"
                        width={0}
                        height={0}
                        className="absolute w-5/6 right-0 bottom-0" />
                </div>
            </div>

            <div className="w-full flex justify-between items-center my-10 h-[450px]">
                <div className="flex flex-col h-full w-1/2 mr-5">
                    <CreateListingImages images={images}/>
                </div>
                <div className="h-full flex flex-col w-1/2 ml-5">
                    <div className="w-full mb-5 p-5">
                        <h1 className="text-2xl mb-5">Product Title</h1>
                        <input onChange={() => { }} className="form_input" required name="Title" />
                    </div>
                    <div className="flex flex-col w-full mt-5 p-5 h-full">
                        <h1 className="text-2xl mb-5">Product Description</h1>
                        <textarea onChange={() => { }} className="form_input h-full resize-none" required name="Description" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const CreateListingVariations = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Variations</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

const CreateListingDynamicPricing = () => {
    return (
        <section className="my-16">
            <h2 className="text-3xl my-10">Dynamic Pricing</h2>
            <div className="w-full h-80 bg-pail_tan rounded-xl my-10"></div>
        </section>
    )
}

const CreateListingImages = ({ images }) => {
    return (
        <>
            {images.length <= 0 ?
                <div className="bg-pail_tan flex flex-col rounded-xl w-full h-full p-16">
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
                            className="black_btn bg-pail_red border-pail_navy cursor-pointer">
                            Add images
                        </button>
                        <p className="text-center px-5">(Images must be in png or jpg format and be between xgb and ygb)</p>
                    </div>
                </div>
                :
                <div>There are some images to display</div>
            }

        </>

    )
}

export const CreateListing = () => {
    return (
        <>
            <CreateListingHeader />
            <CreateListingVariations />
            <CreateListingDynamicPricing />
        </>


    )
}