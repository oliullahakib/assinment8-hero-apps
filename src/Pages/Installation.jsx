import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getFromLS } from '../LDB/LDB';
import InstalledAppCard from '../components/InstalledAppCard';

const Installation = () => {
    const [installedAppId, setInstalledAppId] = useState([])
    const [sortedApp, setSortedApp] = useState([])
    const [selected, setSelected] = useState(false)
    const allAppsData = useLoaderData()
    const allApps = allAppsData.data
    const installedApp = allApps.filter(app => installedAppId.includes(app.id))
    useEffect(() => {
        const appsIdArry = getFromLS()
        setInstalledAppId(appsIdArry)
    }, [])
    const handleSort =(e)=>{
        if(e.target.value==="asc"){
            const sortedAppHL = [...installedApp].sort((a,b)=>b.downloads-a.downloads)
            setSortedApp(sortedAppHL)
        }
        if(e.target.value==="desc"){
            const sortedAppLH = [...installedApp].sort((a,b)=>a.downloads-b.downloads)
            setSortedApp(sortedAppLH)
        }
        setSelected(true)
    }
    return (
        <div>
            <div className="content pl-3 mb-5 flex flex-col items-center justify-center mt-20">
                <h1 className='text-4xl md:text-5xl font-bold'>Your Installed Apps</h1>
                <p className='text-xl text-gray-400 mt-4 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='w-11/12 mx-auto flex justify-between'>
                <h3 className='text-2xl font-semibold'>{installedApp.length} Apps Found</h3>
                <div >
                    <select onClick={(e)=> handleSort(e)} className='btn' >
                        <option disabled={selected} >Short By Size</option>
                        <option value="desc">Low → Heigh</option>
                        <option value="asc">Heigh → Low</option>
                    </select>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-5'>
                {
                  sortedApp.length===0?installedApp.map(app => <InstalledAppCard key={app.id} app={app} />):sortedApp.map(app => <InstalledAppCard key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default Installation;