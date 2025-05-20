import React from 'react';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-400 via-slate-500 to-slate-400'>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default LoadingPage;