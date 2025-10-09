import React from 'react';
import img404 from "../assets/error-404.png"
import { Link } from 'react-router';
const Error404Page = () => {
    return (
        <div className='flex  justify-center items-center flex-col my-10 space-y-4'>

            <img className='w-80 md:w-sm' src={img404} alt="" />
            <h1 className=' text-2xl md:text-5xl font-semibold '>Oops, page not found!</h1>
            <p className='text-xl text-gray-400 pl-3'>The page you are looking for is not available.</p>
            <Link to={-1} className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white">Go Back!</Link>
        </div>
    );
};

export default Error404Page;