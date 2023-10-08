import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar } from "~/components/Layout"
import Statistical from "~/pages/admin/Statistical"

export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},



    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Statistical, layout:LayoutSidebar}
]
export const privateRoutes = [

]