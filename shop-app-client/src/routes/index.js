import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar } from "~/components/Layout"
import Profile from "~/pages/user/Profile"
import { 
    Dashboard ,
    CustomerManage,
    Vouchers
} from "~/pages/admin"
export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},
    {path:'/user-profile' , component: Profile, layout:LayoutNoSidebar},



    // admin: => path: '/admin/[pageName]'
    {path:'/admin' , component: Dashboard, layout:LayoutSidebar},
    {path:'/admin/customer-manage' , component: CustomerManage, layout:LayoutSidebar},
    {path:'/admin/vouchers-manage' , component: Vouchers, layout:LayoutSidebar}


]
export const privateRoutes = [

]