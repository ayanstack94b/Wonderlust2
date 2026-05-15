import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";

const DestinationDetailPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destinations/${id}`)
    const destination = await res.json()
    const {
        destinationName,
        country,
        category,
        price,
        duration,
        departureDate,
        imageUrl,
        description
    } = destination;

    return (
        <div className="bg-gray-50 min-h-screen py-12">

            <div className="max-w-7xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* Left Side Image */}
                    <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white">
                        <Image
                            src={imageUrl}
                            alt={destinationName}
                            width={1200}
                            height={800}
                            className="w-full h-[550px] object-cover"
                        />
                    </div>

                    {/* Right Side Content */}
                    <div className="space-y-8">

                        {/* Category */}
                        <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                            <MdOutlineCategory />
                            {category}
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-5xl font-black text-gray-900 leading-tight">
                                {destinationName}
                            </h1>

                            <div className="flex items-center gap-2 mt-4 text-gray-500 text-lg">
                                <LuMapPin className="text-xl" />
                                <span>{country}</span>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-3 gap-5">

                            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5">
                                <p className="text-sm text-gray-500 mb-2">
                                    Duration
                                </p>

                                <div className="flex items-center gap-2 font-semibold text-gray-800">
                                    <FaRegCalendar />
                                    <span>{duration}</span>
                                </div>
                            </div>

                            <div className="bg-black text-white rounded-3xl p-5 shadow-sm">
                                <p className="text-sm text-gray-300 mb-2">
                                    Price
                                </p>

                                <h2 className="text-3xl font-bold">
                                    ${price}
                                </h2>
                            </div>

                            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5">
                                <p className="text-sm text-gray-500 mb-2">
                                    Departure
                                </p>

                                <h2 className="font-semibold text-gray-800">
                                    {departureDate}
                                </h2>
                            </div>

                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-200 space-y-4">

                            <h2 className="text-2xl font-bold text-gray-900">
                                About This Destination
                            </h2>

                            <p className="text-gray-600 leading-8">
                                {description}
                            </p>

                        </div>

                        {/* CTA */}
                        <div className="flex gap-4">

                            <button className="bg-black hover:bg-gray-800 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold">
                                Book Now
                            </button>

                            <button className="border border-gray-300 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                                Save Trip
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default DestinationDetailPage;