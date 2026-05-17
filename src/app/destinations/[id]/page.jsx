import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import BookingCard from "@/components/BookingCard";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const DestinationDetailPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
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

        <div className="bg-[#f5f7fb] min-h-screen py-14">

            <div className="max-w-7xl mx-auto px-4">

                {/* Main Layout */}
                <div className="grid lg:grid-cols-3 gap-10 items-start">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Hero Image */}
                        <div className="relative overflow-hidden rounded-[32px] shadow-xl">

                            <Image
                                src={imageUrl}
                                alt={destinationName}
                                width={1400}
                                height={900}
                                className="w-full h-[550px] object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                            {/* Category */}
                            <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-gray-800 px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                                <MdOutlineCategory />
                                {category}
                            </div>

                            {/* Bottom Info */}
                            <div className="absolute bottom-8 left-8 text-white space-y-4">

                                <h1 className="text-5xl font-black leading-tight max-w-2xl">
                                    {destinationName}
                                </h1>

                                <div className="flex items-center gap-3 text-lg text-gray-200">
                                    <LuMapPin className="text-2xl" />
                                    <span>{country}</span>
                                </div>

                            </div>

                        </div>

                        {/* Info Cards */}
                        <div className="grid md:grid-cols-3 gap-5">

                            {/* Duration */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">

                                <p className="text-sm text-gray-500 mb-3">
                                    Duration
                                </p>

                                <div className="flex items-center gap-3 text-gray-900 font-semibold text-lg">
                                    <FaRegCalendar className="text-cyan-600" />
                                    <span>{duration}</span>
                                </div>

                            </div>

                            {/* Price */}
                            <div className="bg-black text-white rounded-3xl p-6 shadow-md">

                                <p className="text-sm text-gray-300 mb-3">
                                    Starting Price
                                </p>

                                <h2 className="text-4xl font-black">
                                    ${price}
                                </h2>

                            </div>

                            {/* Departure */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">

                                <p className="text-sm text-gray-500 mb-3">
                                    Departure Date
                                </p>

                                <h2 className="font-semibold text-lg text-gray-900">
                                    {departureDate}
                                </h2>

                            </div>

                        </div>

                        {/* About Section */}
                        <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm space-y-5">

                            <div className="space-y-2">
                                <h2 className="text-3xl font-black text-gray-900">
                                    About This Journey
                                </h2>

                                <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
                            </div>

                            <p className="text-gray-600 leading-9 text-lg">
                                {description}
                            </p>

                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-5">

                            <button className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg">
                                Book Your Trip
                            </button>

                            <button className="bg-white border border-gray-300 hover:bg-gray-100 transition-all duration-300 px-10 py-4 rounded-2xl font-semibold">
                                Save For Later
                            </button>

                        </div>

                    </div>

                    {/* Right Sidebar */}
                    <div className="sticky top-10">

                        <BookingCard destination={destination} />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default DestinationDetailPage;