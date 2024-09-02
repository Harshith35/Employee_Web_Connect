// src/Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../components/LandingPage/LandingPage"; // Import LandingPage instead of Home
import HRPolicies from "../components/HRPolicies/HRPolicies";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/", // Set LandingPage as the home page
                element: <LandingPage />
            },
            {
                path: "hr-policies",
                element: <HRPolicies />
            },
            {
              path: "music-player", // Music Player Route
              element: <MusicPlayer />
            }
        ]
    },
]);

export default router;
