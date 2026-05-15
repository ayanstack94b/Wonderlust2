import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlineCategory } from 'react-icons/md';

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 group">

            {/* Image */}
            <div className="overflow-hidden relative">
                <Image
                    className="w-full h-72 object-cover group-hover:scale-105 transition-all duration-500"
                    src={imageUrl}
                    height={500}
                    width={500}
                    alt={destinationName}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <MdOutlineCategory />
                    {category}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-2xl font-bold shadow-lg">
                    ${price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">

                {/* Country */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <LuMapPin className="text-lg" />
                    <span>{country}</span>
                </div>

                {/* Title */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 leading-tight line-clamp-1">
                        {destinationName}
                    </h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7 line-clamp-3">
                    {description}
                </p>

                {/* Bottom Info */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">

                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FaRegCalendar />
                        <span>{duration}</span>
                    </div>

                    <div className="text-sm text-gray-500">
                        {departureDate}
                    </div>

                </div>

                {/* Button */}
                <Link href={`/destinations/${_id}`}>
                    
                        <Button variant='ghost' className="text-cyan-500">
                            Book now <FiExternalLink></FiExternalLink>
                        </Button>
                    
                </Link>

            </div>

        </div>
    );
};

export default DestinationCard;