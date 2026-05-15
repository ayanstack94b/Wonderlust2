
import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destinations')
    const destinations = await res.json()
    return (
        <div>
            <h1 className="container mx-auto text-xl font-bold">All Destinations</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 my-10 container mx-auto">
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