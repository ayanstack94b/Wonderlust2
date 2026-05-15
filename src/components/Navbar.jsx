import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-white top-0 sticky p-5'>
            {/* left menu */}
            <ul className='flex gap-3'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/destinations'}><li>Destinations</li></Link>
            </ul>

            {/* logo div */}
            <div className="">
                <Image
                    src={'/assets/Wanderlast.png'}
                    alt='logo'
                    height={200}
                    width={200}>

                </Image>
            </div>

            {/* right menu */}
            <div className="">
                <ul className='flex gap-3'>
                    <Link href={'/login'}><li>Login</li></Link>
                    <Link href={'/signup'}><li>Signup</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;