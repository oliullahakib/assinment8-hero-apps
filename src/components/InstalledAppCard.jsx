import { Download } from 'lucide-react';
import React from 'react';

const InstalledAppCard = ({app,handleDelete}) => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center bg-white shadow mt-3 px-3'>
            <div className='flex gap-2'>
                <img className='w-20' src={app.image} alt={app.title} />
                <div>
                    <p className='text-xl font-medium'>{app.title}</p>
                    <div className='flex gap-2'>
                        <p className='text-green-400 flex'><Download/>{app.downloads}M</p>
                        <p className='text-orange-400'>★{app.ratingAvg}</p>
                        <p className='text-gray-400'>{app.size}</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleDelete(app.title,app.id)} className='btn btn-success text-white font-semibold my-2 md:my-0'>Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;