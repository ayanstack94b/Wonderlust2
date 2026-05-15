import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/destinations'}><li>Destinations</li></Link>
            </ul>
{/* logo div */}
            <div className="">

            </div>
        </nav>
    );
};

export default Navbar;