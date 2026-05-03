'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const RegisterPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleGoogleLogin = async () => {
        if (session) {
            toast.info("You are already logged in.");
            return;
        }
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    const onSubmit = async (data) => {
        const { name, email, password, photo } = data;
        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image: photo,
            callbackURL: "/",
        });

        if (error) {
            toast.error('Sign up failed: ' + error.message);
            return;
        }

        if (res) {
            toast.success('Sign up successful!');
            setTimeout(() => router.push("/"), 1000);
        }
    }

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            {/* 2. Wrap the card in motion.div for an entry fade-up */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-100"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800">Create Account</h2>
                    <p className="text-sm text-slate-500 mt-1">Fill in the details to get started.</p>
                </motion.div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <motion.fieldset variants={itemVariants} className="fieldset w-full">
                        <legend className="fieldset-legend text-sm text-gray-700">Enter your name</legend>
                        <input type="text" className="input w-full" placeholder="John Doe" {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
                    </motion.fieldset>

                    <motion.fieldset variants={itemVariants} className="fieldset w-full">
                        <legend className="fieldset-legend text-sm text-gray-700">Enter your image URL</legend>
                        <input type="text" className="input w-full" placeholder="https://example.com/image.jpg" {...register("photo", {
                            pattern: {
                                value: /^https?:\/\/.+/i,
                                message: "Please enter a valid URL starting with http:// or https://"
                            }
                        })} />
                        {errors.photo && <p className='text-red-500 text-xs mt-1'>{errors.photo.message}</p>}
                    </motion.fieldset>

                    <motion.fieldset variants={itemVariants} className="fieldset w-full">
                        <legend className="fieldset-legend text-sm text-gray-700">Enter your email</legend>
                        <input type="email" className="input w-full" placeholder="name@company.com" {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                    </motion.fieldset>

                    <motion.fieldset variants={itemVariants} className="fieldset w-full relative">
                        <legend className="fieldset-legend text-sm text-gray-700">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="••••••••" {...register("password", { required: "Password is required" })} />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer text-sm text-gray-500" >
                            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                    </motion.fieldset>

                    {/* 3. Add hover and tap animations to the main button */}
                    <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full my-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors"
                    >
                        Register
                    </motion.button>
                </form>

                <motion.div variants={itemVariants} className="divider">OR</motion.div>

                {/* 4. Google Login micro-interaction */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "#f8fafc" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGoogleLogin} 
                    className='flex justify-center items-center gap-3 border border-gray-200 rounded py-2 text-green-600 hover:text-emerald-700 transition-colors cursor-pointer'
                >
                    <GrGoogle /> <span>Register with Google</span>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center my-3">
                    <p className="text-sm text-slate-500">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-emerald-600 hover:text-emerald-700">
                            Sign in
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RegisterPage;