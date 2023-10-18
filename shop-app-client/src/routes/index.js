import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar } from "~/components/Layout"
import Dashboard from "~/pages/admin/Dashboard"
import Profile from "~/pages/user/Profile"
import Feedbacks from '~/pages/admin/Feedbacks'
import Reviews from "~/pages/admin/Reviews"
import DetailReview from "~/pages/admin/Reviews/DetailReview"
export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},
    {path:'/user-profile' , component: Profile, layout:LayoutNoSidebar},



    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Dashboard, layout:LayoutSidebar},
    {path:'/admin/feedbacks' , component: Feedbacks, layout:LayoutSidebar},
    {path:'/admin/reviews' , component: Reviews, layout:LayoutSidebar},
    {path:'/admin/reviews/detail' , component: DetailReview, layout:LayoutSidebar},
]
export const privateRoutes = [

]