import React from 'react';
import logo from "/logo.png"
const LoadingSpiner = () => {
    return (
        <div>
            <h1 className='flex justify-center items-center font-bold text-7xl  '>Lo<span><img className='w-20  animate-spin ' src={logo} alt="" /></span>ding</h1>
        </div>
    );
};

export default LoadingSpiner;