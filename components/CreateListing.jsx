import Image from "next/image"


const CreateListingTitle = () => {
    return (
        <div className="w-full bg-pail_tan rounded-xl p-5">
            <h1 className="text-2xl mb-5">Product Title</h1>
            <input onChange={() => { }} className="form_input w-full" required name="Title" />
        </div>
    )
}

const CreateListingDescription = () => {
    return (
        <div className="w-full bg-pail_tan rounded-xl p-5">
            <h1 className="text-2xl mb-5">Product Description</h1>
            <textarea onChange={() => { }} className="form_input w-full min-h-80 resize-none" required name="Description" />
        </div>
    )
}

const CreateListingVariations = () => {
    return (
        <section>
            <div className="bg-pail_tan flex flex-col items-center rounded-xl w-full p-5">
                <Image
                    src="/assets/icons/Shapes.svg"
                    alt="Splash graphic"
                    width={0}
                    height={0}
                    className="w-1/2 max-w-52 my-3" />
                <button
                    type="button"
                    onClick={() => { }}
                    className="black_btn bg-pail_green border-pail_green cursor-pointer my-5">
                    Add variations
                </button>
                <p className="text-center px-5 my-3 text-xl">(Size, colour, flavour...)</p>
            </div>
        </section>
    )
}

const CreateListingDynamicPricing = () => {
    return (
        <section>
            <div className="w-full h-80 bg-pail_tan rounded-xl p-5">
                <h2 className="text-2xl mb-5">Dynamic Pricing</h2>
                <div className="text-xl mb-5">
                    <p className="my-5"> 
                        The minimum order quantity is
                        <input onChange={() => { }} className="form_input w-20 mx-2" required name="MinOrderQuantity"/>
                        units costing $
                        <input onChange={() => { }} className="form_input w-20 mx-2" required name="MaxUnitPrice"/>
                        per unit.
                    </p>
                    <p className="my-5"> 
                        The lowest unit price is $
                        <input onChange={() => { }} className="form_input w-20 mx-2" required name="MinOrderQuantity"/>
                        per unit occuring at
                        <input onChange={() => { }} className="form_input w-20 mx-2" required name="MaxUnitPrice"/>
                        units.
                    </p>
                </div>
            </div>
        </section>
    )
}

const CreateListingImages = ({ images = [] }) => {
    return (
        <>
            {images.length <= 0 ?
                <div className="bg-pail_tan flex flex-col items-center rounded-xl w-full p-5">
                    <Image
                        src="/assets/icons/ImageIcon.svg"
                        alt="Splash graphic"
                        width={0}
                        height={0}
                        className="w-1/2 max-w-52 my-3" />
                    <button
                        type="button"
                        onClick={() => { }}
                        className="black_btn bg-pail_red border-pail_red cursor-pointer my-5">
                        Add images
                    </button>
                    <p className="text-center px-5 my-3 text-xl">(Images must be in png or jpg format and be between xgb and ygb)</p>
                </div>
                :
                <div>There are some images to display</div>
            }

        </>

    )
}

export const CreateListing = () => {
    return (
        <section className="flex gap-5">
            <div className="w-3/5 flex flex-col gap-5">
                <CreateListingImages />
                <CreateListingDynamicPricing />
            </div>
            <div className="w-2/5 flex flex-col gap-5">
                <CreateListingTitle />
                <CreateListingDescription />
                <CreateListingVariations />
                <button
                    type="button"
                    onClick={() => { }}
                    className="black_btn bg-pail_blue border-pail_blue mx-auto cursor-pointer my-5 w-full">
                    Preview listing
                </button>
            </div>
        </section>


    )
}
