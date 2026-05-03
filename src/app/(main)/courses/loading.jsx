import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
                    <div className="h-10 bg-slate-200 rounded-lg w-3/4 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
                </div>

                <div className="max-w-2xl mx-auto mb-12 h-12 bg-slate-200 rounded-lg animate-pulse"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 space-y-4 shadow-sm">
                            <div className="aspect-video bg-slate-200 rounded-lg animate-pulse"></div>
                            <div className="h-6 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                            <div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse"></div>
                            <div className="pt-4 flex justify-between">
                                <div className="h-8 bg-slate-200 rounded w-20 animate-pulse"></div>
                                <div className="h-8 bg-slate-200 rounded w-20 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default loading;