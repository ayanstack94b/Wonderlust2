import Image from 'next/image';
import React from 'react';

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;
    return (
        <div>
            <Image className='' src={imageUrl} height={400} width={400} alt='destination'></Image>

            <div className="">
                
            </div>
        </div>
    );
};

export default DestinationCard;