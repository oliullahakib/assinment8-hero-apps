import { Download, Star } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downlodIcon from "../assets/icon-downloads.png"
import ratingIcon from "../assets/icon-ratings.png"
import reviewIcon from "../assets/icon-review.png"

const AppDetails = () => {
    const { id } = useParams()
    const allAppsData = useLoaderData()
    const allApps = allAppsData.data
    const singleApp = allApps.find(app => app.id === Number(id))
    console.log(singleApp)
    const { image, title, companyName,size } = singleApp
    return (
        <div className='bg-base-200'>
            <div className="app-info">
                <div className="hero  ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={image}
                            className=" w-40 md:w-80 rounded-lg shadow-2xl"
                        />
                        <div className='ml-5'>
                            <div className='border-b-1 border-gray-200 mb-5'>
                                <h1 className="text-3xl font-bold">{title}</h1>
                                <p className="text-gray-500 pt-2 pb-5">
                                    Developed by <span className='bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'> {companyName}</span>
                                </p>
                            </div>

                            <div className='flex flex-col-reverse sm:flex-col'>
                                <div className='card-container flex flex-col sm:flex-row items-center sm:items-start gap-10 mb-5'>
                                    <div className='card flex gap-4'>
                                        <div className='space-y-2'>
                                            <img src={downlodIcon} alt="dwonlod icon" />
                                            <p className='text-gray-500'>Downloads</p>
                                            <h1 className='text-4xl font-extrabold'>8M</h1>
                                        </div>

                                    </div>
                                    <div className='card flex gap-4'>
                                        <div className='space-y-2'>
                                            <img src={ratingIcon} alt="star icon" />
                                            <p className='text-gray-500'>Average Ratings</p>
                                            <h1 className='text-4xl font-extrabold'>4.9</h1>
                                        </div>

                                    </div>
                                    <div className='card flex gap-4'>
                                        <div className='space-y-2'>
                                            <img src={reviewIcon} alt="thumb icon" />
                                            <p className='text-gray-500'>Total Reviews</p>
                                            <h1 className='text-4xl font-extrabold'>54K</h1>
                                        </div>

                                    </div>

                                </div>
                                <button className="btn sm:w-1/2 btn-success text-white my-5">Install Now ({size})</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-chart">

            </div>
            <div className="description"></div>
        </div>
    );
};

export default AppDetails;