import { Download } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const AppsCard = ({ app }) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/details/${app.id}`)} className="card bg-base-100 flex h-96 shadow-sm mt-3 cursor-pointer hover:scale-110  transition duration-300 ease-in-out ">
            <figure className="px-3 pt-3">
                <img
                    src={app.image}
                    alt="Shoes"
                    className="rounded-xl w-42" />
            </figure>
            
                <div className="card-body  items-center justify-center text-center">
                    <h2 className="card-title">{app.title}</h2>
                </div>
                <div className="flex justify-between px-5 mb-4">
                    <button disabled className="btn text-green-500">
                        <Download /><span className='text-lg'>{app.downloads}M</span></button>
                    <button className="py-1 px-4 rounded-sm bg-amber-200 text-orange-500 text-lg ">★ {app.ratingAvg}</button>
                </div>
            
        </div>
    );
};

export default AppsCard;