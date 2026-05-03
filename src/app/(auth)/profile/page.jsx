'use client'
import { authClient } from '@/lib/auth-client';
import { refresh } from 'next/cache';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaChartLine, FaPencilAlt, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProfileDashboard = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { name, photo } = data;

        const { data: res, error } = await authClient.updateUser({
            name: name || session.user.name,
            image: photo || session.user.image,
        });

        if (error) {
            toast.error('Failed to update profile. Please try again.' + error.message);
            return;
        }

        if (res) {
            toast.success('Profile updated successfully!');
            document.getElementById('my_modal_5').close();
            
        }
    };

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

                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                            <FaPencilAlt className="text-xs" /> Update Profile
                        </button>
                    </div>
                </div>

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Your Info</h3>
                        <div className="modal-action">
                            <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
                                {/* if there is a button in form, it will close the modal */}
                                <fieldset className="fieldset w-full ">
                                    <legend className="fieldset-legend text-sm text-gray-700">Enter your name</legend>
                                    <input type="text" className="input w-full" placeholder="John Doe" {...register("name")} />
                                    {
                                        errors.name && (
                                            <p className='text-red-500 text-xs mt-1'>
                                                {errors.name.message}
                                            </p>
                                        )
                                    }
                                </fieldset>

                                <fieldset className="fieldset w-full ">
                                    <legend className="fieldset-legend text-sm text-gray-700">Enter your image URL</legend>
                                    <input type="text" className="input w-full" placeholder="https://example.com/image.jpg" {...register("photo", {
                                        pattern: {
                                            value: /^https?:\/\/.+/i,
                                            message: "Please enter a valid URL starting with http:// or https://"
                                        }
                                    })} />
                                    {
                                        errors.photo && (
                                            <p className='text-red-500 text-xs mt-1'>
                                                {errors.photo.message}
                                            </p>
                                        )
                                    }
                                </fieldset>
                                <button className="w-full my-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors">
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                        <div className="flex items-center gap-2 mb-6 text-slate-800">
                            <FaUser className="text-emerald-600" />
                            <h3 className="text-lg font-bold">Information</h3>
                        </div>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Full Name</h4>
                                    <p className="text-lg font-medium text-slate-800">{session.user.name}</p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</h4>
                                    <p className="text-lg font-medium text-slate-800">{session.user.email}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Image URL</h4>
                                <p className="text-sm text-slate-600 break-all bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    {session.user.image}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Short Bio</h4>
                                <p className="text-slate-600 leading-relaxed italic">
                                    "Passionate learner focusing on advanced UI design systems."
                                </p>
                            </div>
                        </div>

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
            </div >
        </div >
    );
};

export default ProfileDashboard;