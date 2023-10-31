import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar } from "~/components/Layout"
import Dashboard from "~/pages/admin/Dashboard"
import Profile from "~/pages/user/Profile"
import Products from "~/pages/admin/Products"
import ImportProducts from "~/pages/admin/ImportProducts"
import Orders from "~/pages/admin/Orders"
import Bill from "~/pages/admin/History/Bill"
 

export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},
    {path:'/user-profile' , component: Profile, layout:LayoutNoSidebar},



    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Dashboard, layout:LayoutSidebar},
    {path:'/admin/products' , component: Products, layout:LayoutSidebar},
    {path:'/admin/products/import' , component: ImportProducts, layout:LayoutSidebar},
    {path:'/admin/orders' , component: Orders, layout:LayoutSidebar},
    {path:'/admin/history/bill' , component: Bill, layout:LayoutSidebar}

]
export const privateRoutes = [

]