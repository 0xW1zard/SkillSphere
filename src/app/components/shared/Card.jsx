import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ course }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            <div className="relative h-52 w-full bg-slate-200">
                <Image src={course.image} alt={course.title} fill sizes="true" className="object-cover" />
                <span className="absolute top-4 left-4 bg-[#76E4B6] text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.category}
                </span>
            </div>

            <div className="p-6 flex flex-col grow">
                <div className="flex items-center text-sm mb-3">
                    <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-red-600 mr-1">{course.rating}</span>
                    <span className="text-slate-400">({course.reviews} reviews)</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 grow">{course.description}</p>

                <Link href={`/courses/${course.id}`}>
                    <button className="w-full py-2.5 px-4 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors mt-auto">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;