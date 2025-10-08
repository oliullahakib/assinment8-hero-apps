import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import axios from "axios";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader:()=> axios('/allAppsData.json'),
                hydrateFallbackElement:<p>Loading..</p>
            },
            {
                path:'/apps',
                Component:Apps
            },
            {
                path:'/installation',
                loader:()=> axios('/allAppsData.json'),
                Component:Installation
            },
            {
                path:"/details/:id",
                Component:AppDetails,
                loader:()=> axios('/allAppsData.json'),
                hydrateFallbackElement:<p>Loading..</p>,
                errorElement:<p>App Not Found</p>
            }
        ]
    }
])