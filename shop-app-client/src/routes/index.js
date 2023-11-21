import { LayoutNoSidebar, LayoutSidebar } from "~/components/Layout"
import Dashboard from "~/pages/admin/Dashboard"
import Home from "~/pages/user/Home"
import PageAllProduct from "~/pages/user/Home/PageAllProduct"
import PageProductClothes from "~/pages/user/Home/PageProductClothes"
import PageProductSport from "~/pages/user/Home/PageProductSport"
import PageProductUnderWear from "~/pages/user/Home/PageProductUnderWear"

export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},
    {path:'/user/all-products' , component: PageAllProduct, layout:LayoutNoSidebar},
    {path:'/user/product-underwears' , component: PageProductUnderWear, layout:LayoutNoSidebar},
    {path:'/user/product-sports', component: PageProductSport, layout:LayoutNoSidebar},
    {path:'/user/product-clothes' , component: PageProductClothes, layout:LayoutNoSidebar},


    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Dashboard, layout:LayoutSidebar}
]
export const privateRoutes = [

]