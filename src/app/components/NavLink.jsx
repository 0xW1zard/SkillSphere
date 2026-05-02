'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    function isActive() {
        if (href === pathname) return true;
        return false;
    }

    return (
        <div>
            <Link href={href} className={` block w-full h-full ${isActive() ? 'border-b-2 border-green-600' : ''}`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;