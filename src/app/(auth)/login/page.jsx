'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';

const LoginPage = () => {


    const [isShowPassword, setIsShowPassword] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const { name, email, password, photo } = data
        console.log("Form Data:", { name, email, password, photo })

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });

        if (error) {
            toast.error('Login failed. Please check your credentials and try again.' + error.message);
            return;
        }

        if (res) {
            toast.success('Login successful!');
            setTimeout(() => router.push("/"), 2000);
        }

    }
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-100">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800">Welcome Back</h2>
                    <p className="text-sm text-slate-500 mt-1">Enter your details to access your learning dashboard.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset w-full  relative">
                        <legend className="fieldset-legend text-sm text-gray-700">Enter your email</legend>
                        <input type="email" className="input w-full" placeholder="name@company.com" {...register("email", { required: "Email is required" })} />
                    </fieldset>

                    <fieldset className="fieldset w-full relative">
                        <legend className="fieldset-legend text-sm text-gray-700">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="••••••••" {...register("password", { required: "Password is required" })} />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer text-sm text-gray-500" >{
                            isShowPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }</span>
                    </fieldset>


                    <button className="w-full my-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors">
                        Login
                    </button>
                </form>
                <div className="divider">OR</div>

                <div className='flex justify-center items-center gap-3 border border-gray-200 rounded py-2 text-green-600 hover:text-emerald-700 transition-colors cursor-pointer'>
                    <GrGoogle></GrGoogle> <span>Login with Google</span>
                </div>

                <div className="text-center my-3">
                    <p className="text-sm text-slate-500">
                        Don't have an account?{' '}
                        <a href="/register" className="font-medium text-emerald-600 hover:text-emerald-700">
                            Sign up
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;