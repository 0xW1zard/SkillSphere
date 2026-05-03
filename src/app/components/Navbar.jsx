'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { BsArrowRight } from 'react-icons/bs';
import { LuLogOut } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { data: session } = authClient.useSession()
    const router = useRouter();

    const link = <>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/courses">Courses</NavLink></li>
        <li><NavLink href="/profile">My Profile</NavLink></li>
    </>

    const handleLogout = async () => {
        toast.success("Logged out successfully!");
        await authClient.signOut();
        router.push("/");
    }

    return (
        <div className='border-b border-green-600 sticky top-0 z-30 bg-white'>
            <div className='container mx-auto px-4'>
                <div className="navbar flex justify-between items-center min-h-16">

                    <div className="flex items-center gap-2">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow bg-base-100 rounded-box w-30">
                                {link}
                            </ul>
                        </div>
                        <div className="text-xl font-bold whitespace-nowrap">
                            Skill<span className='text-green-600'>Sphere</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex">
                        <ul className="flex items-center gap-8">
                            {link}
                        </ul>
                    </div>

                    <div className="flex items-center justify-end">
                        {session ? (
                            <div className='flex items-center gap-2 md:gap-4'>
                                <h2 className="hidden sm:block text-sm font-medium">{session.user.name}</h2>
                                <Image src={session.user.image || "https://i.pravatar.cc/300"} alt="User Avatar" width={36} height={36} className="rounded-full border border-slate-200" />
                                <button onClick={handleLogout} className='p-2 hover:text-red-600 transition-colors'>
                                    <LuLogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 md:gap-4">
                                <Link href="/login" className="btn btn-xs sm:btn-sm md:btn-md bg-green-600 hover:bg-slate-800 text-white border-none rounded px-4 md:px-8">
                                    Login
                                </Link>
                                <Link href="/register" className="hidden sm:flex items-center gap-1 text-green-700 text-sm font-semibold hover:underline">
                                    Register <BsArrowRight />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;