"use client"
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import toast, { Toaster } from "react-hot-toast";
const BookingCard = ({ destination }) => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const { destinationName, country, category, price, duration, departureDates, imageUrl, description } = destination;

    const [departureDate, setDepartureDate] = useState(null)

    const handleBooking = async () => {
        if (!user) {
            alert("Please login first");
            return;
        }
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: destination?._id,
            destinationName,
            price,
            imageUrl,
            departureDate: new Date(departureDate)
        }
        console.log(bookingData);

        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()
        console.log(data);
        toast.success('Booking done')
    }

    return (
        <div className="bg-white rounded-[28px] shadow-xl border border-gray-200 p-7 space-y-7">

            {/* Price */}
            <div className="space-y-2 border-b border-gray-100 pb-6">

                <p className="text-gray-500 text-sm uppercase tracking-wide">
                    Starting From
                </p>

                <div className="flex items-end gap-2">

                    <h2 className="text-5xl font-black text-cyan-500">
                        ${price}
                    </h2>

                    <span className="text-gray-500 mb-1">
                        /person
                    </span>

                </div>

            </div>

            {/* Destination */}
            <div className="space-y-4">

                <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                    {destinationName}
                </h3>

                <div className="flex items-center gap-3 text-gray-600">
                    <LuMapPin className="text-lg text-cyan-500" />
                    <span>{country}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                    <IoTimeOutline className="text-lg text-cyan-500" />
                    <span>{duration}</span>
                </div>

            </div>

            {/* Features */}
            <div className="space-y-4 border-t border-b border-gray-100 py-6">

                <div className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-cyan-500" />
                    <span>Free cancellation available</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-cyan-500" />
                    <span>Instant booking confirmation</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-cyan-500" />
                    <span>Breakfast included</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-cyan-500" />
                    <span>Guided local tours</span>
                </div>

            </div>

            {/* Date Picker */}
            <div className="space-y-3">

                <DateField onChange={departureDate} className="w-[256px]" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>

            </div>

            {/* CTA */}
            <Button onClick={handleBooking}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded h-14 text-lg font-semibold"
            >
                Book Now
            </Button>

            {/* Small Note */}
            <p className="text-center text-sm text-gray-400 leading-6">
                No payment required today. Reserve your spot now and pay later.
            </p>

        </div>
    );
};

export default BookingCard;