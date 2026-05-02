"use client";
import React, { useState } from 'react';
import Card from '@/app/components/shared/Card';
import { FiSearch } from 'react-icons/fi';

export default function SearchableCourses({ initialCourses }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = initialCourses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Master New Skills
                    </h2>
                    <p className="text-slate-500">
                        Explore our catalog of industry-leading courses designed for the modern professional.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto mb-12 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-shadow"
                        placeholder="Search for courses..."
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <Card key={course.id} course={course} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 px-4 text-center bg-slate-100 rounded-2xl border border-slate-200 container mx-auto">

                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                                <FiSearch className="w-8 h-8 text-green-600" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2">No courses found?</h3>
                            <p className="text-slate-500 text-sm max-w-sm mx-auto mb-8">
                                Try adjusting your filters or search keywords. We're adding new industry-leading content every week.
                            </p>

                            <button onClick={() => setSearchQuery("")} className="px-6 py-2 border border-green-700 text-green-700 font-medium rounded-lg hover:bg-[#046A42]/10 transition-colors">
                                Clear all filters
                            </button>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}