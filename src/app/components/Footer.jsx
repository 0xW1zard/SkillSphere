import Link from 'next/link';
import React from 'react';
import { FiGlobe, FiAtSign, FiShare2 } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">

                    <div className="max-w-sm">
                        <h2 className="text-lg font-bold text-white mb-4">SkillSphere</h2>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                            © 2024 SkillSphere. Empowering lifelong learners everywhere.
                        </p>

                        <div className="flex items-center gap-4">
                            <a href="#" className="text-green-500 hover:text-emerald-400 transition-colors" aria-label="Website">
                                <FiGlobe className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-green-500 hover:text-emerald-400 transition-colors" aria-label="Email Contact">
                                <FiAtSign className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-green-500 hover:text-emerald-400 transition-colors" aria-label="Share">
                                <FiShare2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 sm:gap-16">

                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/#" className="text-sm text-slate-400 hover:text-white transition-colors">
                                        Branding
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="text-sm text-slate-400 hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Legal</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/#" className="text-sm text-slate-400 hover:text-white transition-colors">
                                        Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" className="text-sm text-slate-400 hover:text-white transition-colors">
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">Connect</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/#" className="text-sm text-slate-400 hover:text-white transition-colors">
                                        Social
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}