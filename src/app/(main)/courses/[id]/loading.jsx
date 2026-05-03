import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center container mx-auto'>
            <span className="loading loading-spinner loading-xl"></span>
            <p className="text-center mt-4 text-slate-500">Loading course details...</p>
        </div>
    );
};

export default loading;