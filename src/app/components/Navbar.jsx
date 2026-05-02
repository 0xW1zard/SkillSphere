'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {


    const link = <>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/courses">Courses</NavLink></li>
        <li><NavLink href="/profile">My Profile</NavLink></li>
    </>

    return (
        <div className='container mx-auto my-3 px-4 md:px-0'>
            <div className="navbar flex justify-between items-center min-h-16 relative">

                <div className="flex-1 lg:flex-none">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="flex flex-col dropdown-content bg-base-100 rounded-box z-20 mt-3 w-40 p-4 space-y-1 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className="w-fit text-xl font-bold">Skill<span className='text-green-600'>Sphere</span></div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
                    <ul className="flex items-center gap-8">
                        {link}
                    </ul>
                </div>

                <div className="flex-1 lg:flex-none flex justify-end">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="btn btn-sm md:btn-md bg-green-600 hover:bg-[#2b2a2a] text-white rounded px-10 font-semibold"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;