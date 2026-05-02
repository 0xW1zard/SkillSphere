'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { BsArrowRight } from 'react-icons/bs';
import { LuLogOut } from 'react-icons/lu';

const Navbar = () => {

    const { data: session } = authClient.useSession()


    const link = <>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/courses">Courses</NavLink></li>
        <li><NavLink href="/profile">My Profile</NavLink></li>
    </>

    return (
        <div className='border-b border-green-600 sticky top-0 z-30 bg-white'>
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
                        {
                            session ?
                                <div className='flex items-center justify-center gap-2'>
                                    <h2 className="">{session.user.name}</h2>
                                    <Image
                                        src={session.user.image || "/default-avatar.png"}
                                        alt="User Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <span onClick={async () => await authClient.signOut()} className='btn bg-transparent'> <LuLogOut></LuLogOut>
                                    </span>
                                </div> :

                                <div className="flex items-center gap-3">
                                    <Link
                                        href="/login"
                                        className="btn btn-sm md:btn-md bg-green-600 hover:bg-[#2b2a2a] text-white rounded px-10 font-semibold"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="text-green-700 px-3 flex items-center justify-center gap-1 underline transition-colors hover:text-green-900 "
                                    >
                                        Register <BsArrowRight></BsArrowRight>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;