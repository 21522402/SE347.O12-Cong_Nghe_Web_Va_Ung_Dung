import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar, LayoutSidebarUser } from "~/components/Layout"
import Dashboard from "~/pages/admin/Dashboard"
import Profile from "~/pages/user/Profile"
import Info from "~/pages/user/Profile/Info"
import Vouchers from "~/pages/user/Profile/Vouchers"
import Orders from "~/pages/user/Profile/Orders"
import Addresses from "~/pages/user/Profile/Addresses"
import Reviews from "~/pages/user/Profile/Reviews"
import Policies from "~/pages/user/Profile/Policies"
import Payment from "~/pages/user/Payment"

export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},
    {path:'/user-profile' , component: Profile, layout:LayoutSidebarUser},
    {path:'/user-profile/info' , component: Info, layout:LayoutSidebarUser},
    {path:'/user-profile/orders' , component: Orders, layout:LayoutSidebarUser},
    {path:'/user-profile/vouchers' , component: Vouchers, layout:LayoutSidebarUser},
    {path:'/user-profile/addresses' , component: Addresses, layout:LayoutSidebarUser},
    {path:'/user-profile/reviews' , component: Reviews, layout:LayoutSidebarUser},
    {path:'/user-profile/policies' , component: Policies, layout:LayoutSidebarUser},
    {path:'/user-profile/policies' , component: Policies, layout:LayoutSidebarUser},
    {path:'/user-profile/policies' , component: Policies, layout:LayoutSidebarUser},
    {path:'/cart' , component: Payment, layout: LayoutNoSidebar},

    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Dashboard, layout:LayoutSidebar}
]
export const privateRoutes = [

]