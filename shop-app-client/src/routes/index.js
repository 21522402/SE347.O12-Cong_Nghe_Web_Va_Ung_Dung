import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar } from "~/components/Layout"
import Dashboard from "~/pages/admin/Dashboard"

export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},



    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Dashboard, layout:LayoutSidebar}
]
export const privateRoutes = [

]