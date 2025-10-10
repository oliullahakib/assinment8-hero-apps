import React, { useEffect, useState } from 'react';
import AppsCard from '../components/AppsCard';
import LoadingSpiner from '../components/LoadingSpiner';

const Apps = () => {
    const [search, setSearch] = useState('')
    const [allApps, setAllApps] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("/allAppsData.json")
            .then(res => res.json())
            .then(data => {
                setAllApps(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
            
    }, [])
    const term = search.trim().toLowerCase()
    const searchApps = allApps.filter(app => app.title.toLowerCase().includes(term))
    const handleSearchChage = (e) => {
        setSearch(e.target.value)
        setLoading(true)
        setTimeout(() => {  
            setLoading(false)
        }, 500);
    }
console.log(loading)
    return (
        <div>
            <div className="content pl-3 mb-5 flex flex-col items-center justify-center mt-20">
                <h1 className='text-4xl md:text-5xl font-bold'>Our All Applications</h1>
                <p className='text-xl text-gray-400 mt-4 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between '>
                <h3 className='text-2xl font-semibold mt-5 md:mt-0'>{searchApps.length} Apps Found</h3>
                <div >
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => handleSearchChage(e)} className='w-80 ' type="search" placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className='apps-container mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                 loading?<div className='flex col-span-4 justify-center items-center my-10'> <LoadingSpiner/> </div> :searchApps.length===0?<div className='flex col-span-4 justify-center items-center my-10 text-3xl md:text-5xl text-gray-500 font-medium'> No App Found ⚠️</div> : searchApps.map(app => <AppsCard key={app.id} app={app} />)
                }

            </div>
        </div>
    );
};

export default Apps;