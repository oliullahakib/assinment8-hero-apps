import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams()
    const allAppsData = useLoaderData()
    const allApps = allAppsData.data
    const singleApp = allApps.find(app=>app.id===Number(id))
    console.log(singleApp)
    return (
        <div>
            i am details
        </div>
    );
};

export default AppDetails;