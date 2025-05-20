import React from 'react';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default LoadingPage;