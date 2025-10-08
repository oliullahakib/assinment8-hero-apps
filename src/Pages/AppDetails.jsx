import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downlodIcon from "../assets/icon-downloads.png"
import ratingIcon from "../assets/icon-ratings.png"
import reviewIcon from "../assets/icon-review.png"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { addToLS, getFromLS } from '../LDB/LDB';
import { toast } from 'react-toastify';


const AppDetails = () => {
    const [installed, setInstalled] = useState(false)
    const { id } = useParams()
    const allAppsData = useLoaderData()
    const allApps = allAppsData.data
    const singleApp = allApps.find(app => app.id === Number(id))
    const chartData = singleApp.ratings
    const { image, title, companyName, size, description } = singleApp
    useEffect(() => {
        const appIdArry = getFromLS()
        if (appIdArry.includes(Number(id))) {
            setInstalled(true)

        }
    }, [id])

    console.log( installed)
    const handleInstall = (title,id) => {
        addToLS(id)
        setInstalled(true)
        toast.success(`Yahoo ⚡️ !! ${title} Installed Successfully`)
    }
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
                                <button disabled={installed? true:false} onClick={() => handleInstall(title,singleApp.id)} className="btn sm:w-1/2 btn-success text-white my-5">{installed ? "Installed" : `Install Now (${size})`}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-chart">
                <h1 className='pl-5 sm:hidden mt-30 text-2xl font-semibold'>Ratings</h1>
                <div className="flex sm:w-9/12 sm:mx-auto   ">
                    <h1 className='mt-22 hidden sm:block text-2xl font-semibold'>Ratings</h1>
                    <div className='hidden sm:block rotate-90 '>
                        <BarChart
                            width={400}
                            height={600}
                            data={chartData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 35 }}
                        >

                            <YAxis orientation='right' tickLine={false} axisLine={false} />

                            <XAxis dataKey="name" angle={-90} tickLine={false} axisLine={false} tickMargin={30} />

                            <Bar dataKey="count" fill='#FF8811' barSize={20} />

                        </BarChart>
                    </div>
                    {/* For mobile */}
                    <div className=' sm:hidden rotate-90 '>
                        <BarChart
                            width={400}
                            height={350}
                            data={chartData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 35 }}
                        >

                            <YAxis orientation='right' tickLine={false} axisLine={false} />

                            <XAxis dataKey="name" angle={-90} tickLine={false} axisLine={false} tickMargin={30} />

                            <Bar dataKey="count" fill='#FF8811' barSize={10} />

                        </BarChart>
                    </div>
                </div>
            </div>
            <div className="description w-11/12 mx-auto border-t-1 border-gray-300 pt-8 py-5" >
                <p className='text-2xl font-semibold text-black'>Description:</p> {description}
                <p className='text-gray-500'>
                </p>

            </div>
        </div>
    );
};

export default AppDetails;