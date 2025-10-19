import { createBrowserRouter } from "react-router";
import App from "../App";
import Dasboard from "../components/Dasboard";
import Users from "../components/users/Users";
import Request from "../components/Request/Request";
import AdminProfilePage from "../components/accounts/AdminProfilePage";
import BlockAccount from "../components/block_accounts/BlockAccount";
import Location_Monitoring from "../components/location_monitoring/Location_Monitoring";
import Notifications from "../components/notifications/Notifications";
import Login from "../auth/Login";
import Forget from "../auth/Forget";
import OngoingOtp from "../auth/OngoingOtp";
import Reset_password from "../auth/Reset_password";
import Reset_success from "../auth/Reset_success";
import SentOtp from "../auth/SentOtp";
import Verification_Success from "../auth/Verification_Success";
import VerifyOtp from "../auth/VerifyOtp";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Dasboard },
            { path: "/user", Component: Users },
            { path: "/request", Component: Request },
            { path: "/account", Component: AdminProfilePage },
            { path: "/block-accounts", Component: BlockAccount },
            { path: "/location-monitoring", Component: Location_Monitoring },
            { path: "/notification", Component: Notifications },
        ]
    },
    { path: "login", Component: Login },
    { path: "forget", Component: Forget },
    { path: "ongoing-otp", Component: OngoingOtp },
    { path: "reset-password", Component: Reset_password },
    { path: "reset-success", Component: Reset_success },
    { path: "sent-otp", Component: SentOtp },
    { path: "verify-otp", Component: VerifyOtp },
    { path: "verify-success", Component: Verification_Success },
])  