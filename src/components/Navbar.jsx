"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const {data: session} = authClient.useSession()

    const user = session?.user


    const handleLogout=async()=>{
        await authClient.signOut();
    }

    return (
        <nav className='flex justify-between items-center sticky top-0 z-50 bg-white/90 backdrop-blur-md p-5 border-b border-gray-200'>
            {/* left menu */}
            <ul className='flex gap-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/add-destination'}>Add Destinations</Link></li>
            </ul>

            {/* logo div */}
            <div className="">
                <h1 className="text-5xl font-bold text-cyan-500">Wanderlust</h1>
            </div>

            {/* right menu */}
            <div className="">
                <ul className='flex items-center gap-3'>
                   {user ? (<>
                   <li>
                            <Avatar>
                                <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
                                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                   </li>
                   <li>
                            <Button onClick={handleLogout} className={'rounded-none'} variant='danger'>Logout</Button>
                   </li>
                   </>) : <>
                        <li><Link href={'/login'}>Login</Link></li>
                        <li><Link href={'/signup'}>Signup</Link></li>
                            <li><Link href={'/my-bookings'}>My-Bookings</Link></li>
                   </>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;