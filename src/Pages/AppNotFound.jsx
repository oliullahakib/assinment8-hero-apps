import React from 'react';
import notFoundImg from "../assets/App-Error.png"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div className='flex  justify-center items-center flex-col my-10 space-y-4'>

            <img className='w-80 md:w-sm' src={notFoundImg} alt="" />
            <h1 className=' text-2xl md:text-5xl font-semibold '>OPPS!! APP NOT FOUND</h1>
            <p className='text-xl text-gray-400 pl-3'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link  to={-1} className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white">Go Back!</Link>
        </div>
    );
};

export default AppNotFound;