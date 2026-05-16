import React from 'react';

import { headers } from "next/headers";
import { auth } from '@/lib/auth';

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() 
    })
    const user = session?.user



    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)

    const data = await res.json()
    console.log(data);

    return (
        <div>
            <h1 className="text-3xl font-bold max-w-7xl mx-auto p-4">Bookings</h1>
        </div>
    );
};

export default MyBookingsPage;