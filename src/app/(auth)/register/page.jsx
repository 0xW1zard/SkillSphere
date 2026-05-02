'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const { name, email, password, photo } = data
        console.log("Form Data:", { name, email, password, photo })

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });

        console.log("Sign Up Response:", { res, error })

        if (error) {
            toast.error('Sign up failed. Please check your credentials and try again.' + error.message);
            return;
        }

        if (res) {
            toast.success('Sign up successful!');
            setTimeout(() => router.push("/"), 1000);
        }
    }

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

                    <fieldset className="fieldset w-full relative">
                        <legend className="fieldset-legend text-sm text-gray-700">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="••••••••" {...register("password", { required: "Password is required" })} />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer text-sm text-gray-500" >{
                            isShowPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }</span>
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