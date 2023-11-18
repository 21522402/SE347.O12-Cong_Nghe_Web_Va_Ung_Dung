import { LayoutNoSidebar, LayoutSidebar } from "~/components/Layout"
import Dashboard from "~/pages/admin/Dashboard"
import Home from "~/pages/user/Home"
import Product from "~/pages/user/Product/Product"
import Profile from "~/pages/user/Profile"
import ShopCategory from "~/pages/user/ShopCategory/ShopCategory"

export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},
    {path:'/men',component:ShopCategory, layout:LayoutNoSidebar},
    {path:'/women', component:ShopCategory,layout: LayoutNoSidebar},
    {path:'/kid', component:ShopCategory,layout: LayoutNoSidebar},
    {path:'/product', component:Product,layout: LayoutNoSidebar},
    {path:'/user-profile' , component: Profile, layout:LayoutNoSidebar},



    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Dashboard, layout:LayoutSidebar}
]
export const privateRoutes = [

]