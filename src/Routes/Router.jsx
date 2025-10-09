import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import axios from "axios";
import AppDetails from "../Pages/AppDetails";
import LoadingSpiner from "../components/LoadingSpiner";
import Spinner from "../components/Spinner";
import AppNotFound from "../Pages/AppNotFound";
import Error404Page from "../Pages/Error404Page";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader:()=> axios('/allAppsData.json'),
                hydrateFallbackElement:<LoadingSpiner/>
            },
            {
                path:'/apps',
                Component:Apps,
            },
            {
                path:'/installation',
                loader:()=> axios('/allAppsData.json'),
                 hydrateFallbackElement:<LoadingSpiner/>,
                Component:Installation
            },
            {
                path:"/details/:id",
                Component:AppDetails,
                loader:()=> axios('/allAppsData.json'),
                hydrateFallbackElement:<LoadingSpiner/>,
                errorElement:<AppNotFound/>
            },
            {
                path:"*",
                element:<Error404Page/>
            }
        ]
    }
])