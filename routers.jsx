import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./src/home/home/Home";
import ForntPage from "./src/home/home/ForntPage";
import Login from "./src/home/home/login/Login";
import Register from "./src/home/home/Register/Register";
import Dps from "./src/components/Dps";
import Wa from "./src/components/Wa";
import Wl from "./src/components/Wl";
import Ml from "./src/components/Ml";
import Members from "./src/components/Members";
import Affairs from "./src/components/Affairs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <ForntPage></ForntPage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/dps",
                element: <Dps></Dps>
            },
            {
                path: "/wa",
                element: <Wa></Wa>
            },
            {
                path: "/wl",
                element: <Wl></Wl>
            },
            {
                path: "/ml",
                element: <Ml></Ml>
            },
            {
                path: "/members",
                element: <Members></Members>
            },
            {
                path: "/affairs",
                element: <Affairs></Affairs>
            }
        ]
    },
]);

export default router;