import React from 'react';
import { GrGoogle } from 'react-icons/gr';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-100">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800">Welcome Back</h2>
                    <p className="text-sm text-slate-500 mt-1">Enter your details to access your learning dashboard.</p>
                </div>

                <form>
                    <fieldset className="fieldset w-full ">
                        <legend className="fieldset-legend text-sm text-gray-700">Enter your email</legend>
                        <input type="email" className="input w-full" placeholder="name@company.com" />
                    </fieldset>

                    <fieldset className="fieldset w-full ">
                        <legend className="fieldset-legend text-sm text-gray-700">Password</legend>
                        <input type="password" className="input w-full" placeholder="••••••••" />
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