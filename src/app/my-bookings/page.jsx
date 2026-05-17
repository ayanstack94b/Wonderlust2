import React from 'react';

import { headers } from "next/headers";
import { auth } from '@/lib/auth';
import Image from 'next/image';
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { BookingCancelAlert } from '@/components/BookingCancelAlert';
import { Button } from '@heroui/react';


const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const bookings = await res.json()
    // console.log(bookings);

    return (
        <div className="bg-[#f5f7fb] min-h-screen py-12">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="mb-10 flex items-center justify-between flex-wrap gap-4">

                    <div>
                        <h1 className="text-4xl font-black text-gray-900">
                            My Bookings
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage all your booked destinations in one place.
                        </p>
                    </div>

                    <div className="bg-cyan-500 text-white px-6 py-3 rounded-2xl shadow-md font-semibold">
                        Total Trips: {bookings.length}
                    </div>

                </div>

                {/* Empty State */}
                {
                    bookings.length === 0 && (
                        <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-200">

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                No bookings yet
                            </h2>

                            <p className="text-gray-500">
                                Your booked trips will appear here.
                            </p>

                        </div>
                    )
                }

                {/* Cards */}
                <div className="grid lg:grid-cols-2 gap-8">

                    {
                        bookings.map((booking) => (

                            <div
                                key={booking._id}
                                className="bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                            >

                                {/* Image */}
                                <div className="relative">

                                    <Image
                                        src={booking.imageUrl}
                                        height={600}
                                        width={800}
                                        alt={booking.destinationName}
                                        className="w-full h-72 object-cover"
                                    />

                                    {/* Status */}
                                    <div className="absolute top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                                        <FaCheckCircle />
                                        Confirmed
                                    </div>

                                </div>

                                {/* Content */}
                                <div className="p-7 space-y-5">

                                    {/* Title */}
                                    <div>

                                        <h2 className="text-3xl font-black text-gray-900 leading-tight">
                                            {booking.destinationName}
                                        </h2>

                                        <div className="flex items-center gap-2 text-gray-500 mt-3">
                                            <LuMapPin className="text-lg" />
                                            <span>{booking.country}</span>
                                        </div>

                                    </div>

                                    {/* Info */}
                                    <div className="grid sm:grid-cols-2 gap-4">

                                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">

                                            <p className="text-sm text-gray-500 mb-2">
                                                Departure Date
                                            </p>

                                            <div className="flex items-center gap-2 text-gray-800 font-semibold">
                                                <FaCalendarAlt />
                                                <span>
                                                    {booking.departureDate}
                                                </span>
                                            </div>

                                        </div>

                                        <div className="bg-black text-white rounded-2xl p-5">

                                            <p className="text-sm text-gray-300 mb-2">
                                                Total Price
                                            </p>

                                            <h2 className="text-3xl font-black">
                                                ${booking.price}
                                            </h2>

                                        </div>

                                    </div>

                                    {/* User */}
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-5">

                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Booked By
                                            </p>

                                            <h3 className="font-semibold text-gray-800">
                                                {booking.userName}
                                            </h3>
                                        </div>

                                        <Image
                                            src={booking.userImage}
                                            height={50}
                                            width={50}
                                            alt={booking.userName}
                                            className="w-14 h-14 rounded-full object-cover border"
                                        />

                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-4 pt-2">

                                        <Button className="border bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold w-full">
                                            View Details
                                        </Button>

                                        <BookingCancelAlert bookingId={booking._id}></BookingCancelAlert>


                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default MyBookingsPage;