import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getFromLS } from '../LDB/LDB';
import InstalledAppCard from '../components/InstalledAppCard';

const Installation = () => {
    const [installedAppId, setInstalledAppId] = useState([])
    const allAppsData = useLoaderData()
    const allApps = allAppsData.data
    const installedApp = allApps.filter(app => installedAppId.includes(app.id))
    useEffect(() => {
        const appsIdArry = getFromLS()
        setInstalledAppId(appsIdArry)
    }, [])

    return (
        <div>
            <div className="content flex flex-col items-center justify-center mt-20">
                <h1 className='text-5xl font-bold'>Your Installed Apps</h1>
                <p className='text-xl text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='w-11/12 mx-auto flex justify-between'>
                <h3 className='text-2xl font-semibold'>{installedApp.length} Apps Found</h3>
                <div>
                    <select className='btn' >
                        <option disabled={true} value="">Short By Size</option>
                        <option value="">Low → Heigh</option>
                        <option value="">Heigh → Low</option>
                    </select>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-5'>
                {
                    installedApp.map(app => <InstalledAppCard key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default Installation;