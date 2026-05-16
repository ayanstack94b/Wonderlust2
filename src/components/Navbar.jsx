import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-white top-0 sticky p-5'>
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
                <ul className='flex gap-3'>
                    <li><Link href={'/login'}>Login</Link></li>
                    <li><Link href={'/signup'}>Signup</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;