
import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json()
    return (
        <div>
            <h1 className="">All Destinations</h1>

            <div className="">
                {
                    destinations.map((destination)=> <DestinationCard
                    key={destination._id}
                        destination={destination}
                    ></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;