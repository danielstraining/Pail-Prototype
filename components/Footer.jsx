import Image from "next/image"


export const Footer = () => {
    return (
        <footer>
            <div className="w-full px-28 bg-pail_blue flex justify-start items-center py-7">
                <div className="flex justify-between items-center">
                    <Image
                        src="/assets/images/PailTextLogo_White.svg"
                        alt="Pail text logo"
                        width={0}
                        height={0}
                        className="w-20" 
                    />
                    <p className="text-2xl font-palanquin text-white mx-7">A drop begins an ocean</p>
                    <Image
                        src="/assets/images/WaterDrop_White.svg"
                        alt="Water Drop"
                        width={0}
                        height={0}
                        className="w-5" 
                    />
                </div>
            </div>
        </footer>
    )
}