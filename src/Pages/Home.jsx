import React from 'react';
import { Link, useLoaderData } from 'react-router';
import googlePlayLogo from "../assets/googlePlay.png"
import appStoreLogo from "../assets/appStore.webp"
import heroImg from "../assets/hero.png"
import AppsCard from '../components/AppsCard';
const Home = () => {
    const appsData = useLoaderData()
    const someApps=appsData.data.slice(0,8)
    return (
        <div>
            <div className="head-section ">
                <div className="content flex flex-col justify-center items-center md:w-8/12 mx-auto mt-20">
                    <h1 className=' text-[40px] md:text-7xl font-bold'><p className='text-center'>We Build</p>
                        <span className='bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Productive</span>Apps
                    </h1>
                    <p className='text-[#627382] w-3/4 my-3 text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div>
                        <Link className='btn bg-white mr-5' target='blank' to="https://play.google.com/store/games?hl=en">
                            <img className='w-9' src={googlePlayLogo} alt="" /> Google Play</Link>
                        <Link className='btn bg-white' target='blank' to="https://www.apple.com/app-store/"><img className='w-9' src={appStoreLogo} alt="" /> App Store</Link>
                    </div>
                </div>
                <div className="heroImg flex items-center justify-center mt-10">
                    <img className='px-5 md:max-w-xl' src={heroImg} alt="hero Image" />
                </div>
                <div className="states bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white flex flex-col justify-center items-center py-5">
                    <h2 className=' text-xl md:text-3xl font-bold my-5'>Trusted by Millions, Built for You</h2>
                    <div className='flex flex-col md:flex-row gap-20'>
                        <div className="statesCard text-center">
                            <p className='text-sm'>Total Downloads</p>
                            <h1 className='text-5xl font-bold py-2'>26.6M</h1>
                            <p className='text-sm'>21% more than last month</p>
                        </div>
                        <div className="statesCard text-center">
                            <p className='text-sm'>Total Reviews</p>
                            <h1 className='text-5xl font-bold py-2'>906K</h1>
                            <p className='text-sm'>46% more than last month</p>
                        </div>
                        <div className="statesCard text-center">
                            <p className='text-sm'>Active Apps</p>
                            <h1 className='text-5xl font-bold py-2'>132+</h1>
                            <p className='text-sm'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trending-app mt-20 w-11/12 mx-auto">
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-5xl font-bold'>Trending Apps</h2>
                    <p className='text-xl text-[#627382] mt-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>
               <div className='apps-container mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                 {
                    someApps.map(app=><AppsCard key={app.id} app={app}/>)
                 }
                 
                </div> 
                <div className='flex justify-center items-center my-5'>
                    <Link to='/apps' target='blank' className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white"> Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;