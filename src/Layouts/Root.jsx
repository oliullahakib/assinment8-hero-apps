import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import LoadingSpiner from '../components/LoadingSpiner';

const Root = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    return (
        <div >
            {
                navigation.state === "loading"
                    ?
                    <div className='flex flex-col min-h-screen'>
                        <Navbar />
                        <div className='flex-1 flex justify-center items-center'>
                            <LoadingSpiner/>
                        </div>
                        <Footer />
                    </div>
                    : <div className='flex flex-col min-h-screen'>
                        <Navbar />
                        <div className='flex-1'>
                            <Outlet />
                        </div>
                        <Footer />
                        <ToastContainer />
                    </div>
            }
        </div>
    );
};

export default Root;