import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getFromLS } from '../LDB/LDB';
import InstalledAppCard from '../components/InstalledAppCard';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Installation = () => {
    const [installedApp, setInstalledApp] = useState([])
    const [selected, setSelected] = useState(false)
    const allAppsData = useLoaderData()
    const allApps = allAppsData.data
    useEffect(() => {
        const appsIdArry = getFromLS()
        const installedAppArr = allApps.filter(app => appsIdArry.includes(app.id))
        setInstalledApp(installedAppArr)
    }, [allApps])
    const handleSort = (e) => {
        if (e.target.value === "asc") {
            const sortedAppHL = [...installedApp].sort((a, b) => b.downloads - a.downloads)
            setInstalledApp(sortedAppHL)
        }
        if (e.target.value === "desc") {
            const sortedAppLH = [...installedApp].sort((a, b) => a.downloads - b.downloads)
            setInstalledApp(sortedAppLH)
        }
        setSelected(true)
    }
    const handleDelete =(title,id)=>{
        console.log("delete this id",id)
        const appsIdArry = getFromLS()
        const filterAppsIdArr = appsIdArry.filter(i=>i!==id)
        localStorage.setItem("appId",JSON.stringify(filterAppsIdArr))

        const newInstallApps = installedApp.filter(app=>app.id!==id)
        setInstalledApp(newInstallApps)
        toast(`🗑️ ${title} un-installed from your Device`)
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
                    <select onClick={(e) => handleSort(e)} className='btn' >
                        <option disabled={selected} >Short By Downloads</option>
                        <option value="desc">Low → Heigh</option>
                        <option value="asc">Heigh → Low</option>
                    </select>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-5'>
                {
                  installedApp.length===0?
                  <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold text-gray-400'>No Install App Yet!</h1>
                    <Link className='btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white mt-5' to={"/apps"}> Go To Apps</Link>
                    </div>
                  :  installedApp.map(app => <InstalledAppCard key={app.id} app={app} handleDelete ={handleDelete} />)
                }
            </div>
        </div>
    );
};

export default Installation;