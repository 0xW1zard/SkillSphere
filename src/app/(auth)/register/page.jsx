'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { GrGoogle } from 'react-icons/gr';

const RegisterPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = data => console.log(data);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-100">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800">Create Account</h2>
                    <p className="text-sm text-slate-500 mt-1">Fill in the details to get started.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset w-full ">
                        <legend className="fieldset-legend text-sm text-gray-700">Enter your name</legend>
                        <input type="text" className="input w-full" placeholder="John Doe" {...register("name", { required: "Name is required" })} />
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
                            // pattern: {
                            //     value: /^https?:\/\/.+/i,
                            //     message: "Please enter a valid URL starting with http:// or https://"
                            // }
                        })} />
                        {
                            errors.photo && (
                                <p className='text-red-500 text-xs mt-1'>
                                    {errors.photo.message}
                                </p>
                            )
                        }
                    </fieldset>

                    <fieldset className="fieldset w-full ">
                        <legend className="fieldset-legend text-sm text-gray-700">Enter your email</legend>
                        <input type="email" className="input w-full" placeholder="name@company.com" {...register("email", { required: "Email is required" })} />
                        {
                            errors.email && (
                                <p className='text-red-500 text-xs mt-1'>
                                    {errors.email.message}
                                </p>
                            )
                        }
                    </fieldset>

                    <fieldset className="fieldset w-full ">
                        <legend className="fieldset-legend text-sm text-gray-700">Password</legend>
                        <input type="password" className="input w-full" placeholder="••••••••" {...register("password", { required: "Password is required" })} />
                        {
                            errors.password && (
                                <p className='text-red-500 text-xs mt-1'>
                                    {errors.password.message}
                                </p>
                            )
                        }
                    </fieldset>


                    <button className="w-full my-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors">
                        Register
                    </button>
                </form>
                <div className="divider">OR</div>

                <div className='flex justify-center items-center gap-3 border border-gray-200 rounded py-2 text-green-600 hover:text-emerald-700 transition-colors cursor-pointer'>
                    <GrGoogle></GrGoogle> <span>Register with Google</span>
                </div>

                <div className="text-center my-3">
                    <p className="text-sm text-slate-500">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-emerald-600 hover:text-emerald-700">
                            Sign in
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;