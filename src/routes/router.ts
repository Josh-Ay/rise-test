import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

const router = createBrowserRouter([
    {
        path: '*',
        Component: LandingPage,
    },
])

export default router;