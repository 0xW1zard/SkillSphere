import React from 'react';
import { coursesdata } from "@/lib/data";
import Card from '@/app/components/shared/Card';


const coursesPage = async () => {

   const courses = await coursesdata();
   console.log(courses);

    return (
        <div>
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
                        <input type="text" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-shadow"
                            placeholder="Search for courses..." />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {courses.map((course) => <Card key={course.id} course={course} />)}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default coursesPage;