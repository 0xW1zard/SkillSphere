'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaUserEdit, FaChartLine, FaPencilAlt } from 'react-icons/fa';

const ProfileDashboard = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push('/login');
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <span className="loading loading-spinner loading-lg text-emerald-500"></span>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 text-center">
                        <div className="relative inline-block">
                            <div className="relative w-32 h-32 mx-auto">
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name}
                                    fill
                                    sizes="128px"
                                    priority
                                    className="rounded-full object-cover border-4 border-emerald-500 p-1"
                                />
                            </div>
                            <div className="absolute bottom-1 right-1 bg-emerald-600 text-white rounded-full p-1 border-2 border-white z-10">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mt-4">{session.user.name}</h2>
                        <p className="text-slate-500 text-sm">{session.user.email}</p>

                        <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Courses Completed</span>
                                <span className="font-semibold text-emerald-600">12</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Learning Hours</span>
                                <span className="font-semibold text-emerald-600">48h</span>
                            </div>
                        </div>

                        <button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                            <FaPencilAlt className="text-xs" /> Update Profile
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                        <div className="flex items-center gap-2 mb-6 text-slate-800">
                            <FaUserEdit className="text-emerald-600" />
                            <h3 className="text-lg font-bold">Edit Information</h3>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Full Name</label>
                                    <input type="text" defaultValue={session.user.name} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Email Address</label>
                                    <input type="email" defaultValue={session.user.email} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Image URL</label>
                                <input type="text" defaultValue={session.user.image} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">Short Bio</label>
                                <textarea rows="4" defaultValue={session.user.bio || "Passionate learner focusing on advanced UI design systems."} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button type="button" className="bg-[#00684a] hover:bg-[#00563d] text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
                                    Update Information
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                        <div className="flex items-center gap-2 mb-8 text-slate-800">
                            <FaChartLine className="text-emerald-600" />
                            <h3 className="text-lg font-bold">Learning Progress</h3>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2 text-sm font-medium">
                                    <span className="text-slate-700">Advanced Tailwind Masterclass</span>
                                    <span className="text-emerald-600">85%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-[#00684a] h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2 text-sm font-medium">
                                    <span className="text-slate-700">System Architecture Fundamentals</span>
                                    <span className="text-emerald-600">42%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-[#00684a] h-2 rounded-full" style={{ width: '42%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;