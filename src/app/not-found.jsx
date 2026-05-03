"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiArrowLineLeft } from 'react-icons/pi';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-center">
                <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase">
                    Error 404
                </span>

                <h1 className="mt-4 text-4xl font-light text-slate-900 tracking-tight sm:text-5xl">
                    Page not found
                </h1>

                <p className="mt-6 text-base leading-7 text-slate-500">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>

                <div className="mt-10">
                    <Link href="/" className="text-sm flex items-center justify-center gap-1.5 font-semibold leading-7 text-emerald-600 hover:text-emerald-500 transition-colors">
                        <span aria-hidden="true"><PiArrowLineLeft></PiArrowLineLeft></span> Back to home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;