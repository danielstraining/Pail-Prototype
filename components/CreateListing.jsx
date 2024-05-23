import Image from "next/image"
import Plot from 'react-plotly.js';
import { useState, useEffect } from "react";

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
    const [minOrderQuantity, setMinOrderQuantity] = useState()
    const [maxOrderQuantity, setMaxOrderQuantity] = useState()
    const [minUnitPrice, setMinUnitPrice] = useState()
    const [maxUnitPrice, setMaxUnitPrice] = useState()
    const [x, setX] = useState([])
    const [y, setY] = useState([])

    useEffect(() => {
        const xValues = []
        const yValues = []

        const m = ((minUnitPrice - maxUnitPrice) / (maxOrderQuantity - minOrderQuantity))
        const c = maxUnitPrice - (m * minOrderQuantity)

        for (let x = minOrderQuantity; x <= maxOrderQuantity; x++) {
            xValues.push(x)
            yValues.push((m * x) + c)
        }
        setX(xValues)
        setY(yValues)
        console.log(xValues)

    }, [minOrderQuantity, maxOrderQuantity, minUnitPrice, maxUnitPrice]);


    return (
        <section>
            <div className="w-full bg-pail_tan rounded-xl p-5">
                <h2 className="text-2xl mb-5">Dynamic Pricing</h2>
                <div className="text-xl mb-5">
                    <p className="my-5">
                        The minimum order quantity is
                        <input onChange={(e) => setMinOrderQuantity(e.target.value)} className="form_input w-20 mx-2" required name="MinOrderQuantity" />
                        units costing $
                        <input onChange={(e) => setMaxUnitPrice(e.target.value)} className="form_input w-20 mx-2" required name="MaxUnitPrice" />
                        per unit.
                    </p>
                    <p className="my-5">
                        The lowest unit price is $
                        <input onChange={(e) => setMinUnitPrice(e.target.value)} className="form_input w-20 mx-2" required name="MinOrderQuantity" />
                        per unit occuring from
                        <input onChange={(e) => setMaxOrderQuantity(e.target.value)} className="form_input w-20 mx-2" required name="MaxUnitPrice" />
                        units.
                    </p>
                </div>
                <div className="flex justify-center items-center w-full h-auto bg-white rounded-xl my-10 pb-5">
                    <Plot
                        className="w-[90%] h-auto"
                        data={[
                            {
                                x: x,
                                y: y,
                                mode: 'lines',
                                marker: { color: '#3a68ca' },
                            },
                        ]}
                        layout={{
                            autosize: true, 
                            title: 'Dynamic Pricing', 
                            titlefont: {size: 24, color: '12204A', family: 'Palanquin Dark, sans-serif'},
                            xaxis: {
                                title: "Order Quantity",
                                titlefont: {
                                    family: 'Palanquin Dark, sans-serif',
                                    size: 20,
                                    color: '#12204A'
                                }
                            },
                            yaxis: {
                                title: "Unit Price ($)",
                                titlefont: {
                                    family: "Palanquin Dark, sans-serif",
                                    size: 20,
                                    color: '#12204A'
                                }
                            },
                        }}
                        useResizeHandler={true}
                    />
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
        <section>
            <div className="flex gap-5 mb-5">
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
            </div>

        </section>



    )
}
