import React from 'react';
import Image from 'next/image';
import { FiCheck, FiPlay, FiLock, FiStar, FiClock, FiBarChart } from 'react-icons/fi';
import { BiTrendingUp } from 'react-icons/bi';
import { MdOutlineAutoGraph } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { singleCourseData } from '@/lib/data';
import Link from 'next/link';

export default async function CourseDetails({ params }) {

    const courseId = await params;
    const courseData = await singleCourseData(courseId.id);

    return (
        <>
            <div className="min-h-screen bg-white font-sans py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2 space-y-8">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                            <Image src={courseData.image} alt={courseData.title} fill className="object-cover" priority />
                            <div className="absolute top-5 left-5 bg-green-700 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-md">
                                <div className="bg-white/20 rounded-full p-0.5">
                                    <FiCheck className="w-3.5 h-3.5 text-white" />
                                </div>
                                Enrolled
                            </div>
                        </div>

                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                                {courseData.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 border-b border-slate-100 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                                        <Image src="https://i.pravatar.cc/404" alt="Instructor" width={100} height={100} className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-green-700">{courseData.instructor}</p>
                                        <p className="text-xs text-slate-500">Senior Instructor & Industry Lead</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-slate-600 pl-4 border-l border-slate-200">
                                    <span className="flex items-center gap-1.5 font-medium"><FiStar className="text-amber-500" /> {courseData.rating}</span>
                                    <span className="flex items-center gap-1.5"><FiClock className="text-slate-400" /> {courseData.duration}</span>
                                    <span className="flex items-center gap-1.5"><FiBarChart className="text-slate-400" /> {courseData.level}</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-slate-600 leading-relaxed space-y-4 text-[15px]">
                            <p>{courseData.description}</p>
                            <p>
                                Throughout 12 intensive modules, you will bridge the gap between theoretical models and real-world execution. Learn to navigate complex market shifts using predictive analytics and agile management principles designed for senior leadership.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                                <BiTrendingUp className="w-5 h-5 text-green-700 mb-3" />
                                <h3 className="font-bold text-slate-900 mb-2">Scalable Growth</h3>
                                <p className="text-sm text-slate-500">Learn how to implement systems that grow with your organization's ambitions.</p>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                                <MdOutlineAutoGraph className="w-5 h-5 text-green-700 mb-3" />
                                <h3 className="font-bold text-slate-900 mb-2">Data Literacy</h3>
                                <p className="text-sm text-slate-500">Turn raw information into actionable strategic insights for competitive advantage.</p>
                            </div>
                        </div>

                        <div className="border border-dashed border-[#A7F3D0] rounded-2xl p-8 text-center bg-[#F8FAFC] mt-8 relative overflow-hidden">
                            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-current rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Unlock Premium Access</h3>
                            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                                The advanced laboratory simulations and certification exams are reserved for premium SkillSphere members. Please sign in to access these resources.
                            </p>
                            <div className="flex justify-center gap-3">
                                <Link href="/login">
                                    <button className=" btn bg-green-700 text-white px-5 rounded font-medium hover:bg-green-800 transition-colors">
                                        Login to Premium
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>



                    <div className="space-y-6">

                        <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-slate-900 text-lg">Course Curriculum</h3>
                                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">6h 15m total</span>
                            </div>

                            <div className="relative border-l border-slate-200 ml-3 space-y-6 mb-8">

                                <div className="relative pl-6">
                                    <div className="absolute -left-2 top-1 w-4 h-4 bg-green-700 rounded-full flex items-center justify-center ring-4 ring-white">
                                        <FiCheck className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-sm font-bold text-green-700">01. Foundations of Strategy</h4>
                                            <span className="text-xs text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-100">45m</span>
                                        </div>
                                        <p className="text-xs text-slate-500">Defining the Modern Scope</p>
                                    </div>
                                </div>

                                <div className="relative pl-6">
                                    <div className="absolute -left-2 top-1 w-4 h-4 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center ring-4 ring-white">
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                                    </div>
                                    <div className="bg-white rounded-lg p-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-sm font-medium text-slate-800">02. Data Integration</h4>
                                            <span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">1h 12m</span>
                                        </div>
                                        <p className="text-xs text-slate-500">The Architecture of Insight</p>
                                    </div>
                                </div>

                                <div className="relative pl-6">
                                    <div className="absolute -left-2 top-1 w-4 h-4 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center ring-4 ring-white">
                                        <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="bg-white rounded-lg p-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-sm font-medium text-slate-400">03. Market Dynamics</h4>
                                            <span className="text-xs text-slate-300 bg-slate-50 px-1.5 py-0.5 rounded">55m</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Competitive Disruption</p>
                                    </div>
                                </div>

                                <div className="relative pl-6">
                                    <div className="absolute -left-2 top-1.5 w-4 h-4 bg-white flex items-center justify-center ring-4 ring-white">
                                        <FiLock className="w-3.5 h-3.5 text-slate-300" />
                                    </div>
                                    <div className="bg-white rounded-lg p-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-sm font-medium text-slate-400">04. Growth Engineering</h4>
                                            <span className="text-xs text-slate-300 bg-slate-50 px-1.5 py-0.5 rounded">1h 30m</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Scale & Sustainability</p>
                                    </div>
                                </div>

                            </div>

                            <button className="w-full bg-green-800 text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#035434] transition-colors">
                                <BsStars className="w-4 h-4" /> Continue Learning
                            </button>
                        </div>

                        <div className="bg-[#E0E7FF] rounded-xl p-5 border border-indigo-100">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-bold text-slate-700">Course Progress</span>
                                <span className="text-sm font-bold text-slate-900">30%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white rounded-full overflow-hidden">
                                <div className="h-full bg-green-700 rounded-full w-[30%]"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}