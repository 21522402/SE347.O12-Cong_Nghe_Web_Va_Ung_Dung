import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar } from "~/components/Layout"
import Profile from "~/pages/user/Profile"
import { 
    CustomerManage,
    VouchersAdmin
} from "~/pages/admin"
import Reviews from "~/pages/admin/Reviews"
import DetailReview from "~/pages/admin/Reviews/DetailReview"
import Feedbacks from "~/pages/admin/Feedbacks"
import FeedbackDetail from "~/pages/admin/Feedbacks/FeedbackDetail"
export const publicRoutes = [
    // user: => path: '/user/[pageName]'
    {path:'/user' , component: Home, layout:LayoutNoSidebar},
    {path:'/user-profile' , component: Profile, layout:LayoutNoSidebar},



    // admin: => path: '/admin/[pageName]'
    {path:'/admin/customer-manage' , component: CustomerManage, layout:LayoutSidebar},
    {path:'/admin/vouchers-manage' , component: VouchersAdmin, layout:LayoutSidebar},
    {path:'/admin/reviews' , component: Reviews, layout:LayoutSidebar},
    {path:'/admin/reviews/:id/detail' , component: DetailReview, layout:LayoutSidebar},
    {path:'/admin/feedbacks' , component: Feedbacks, layout:LayoutSidebar},
    {path:'/admin/feedbacks/detail' , component: FeedbackDetail, layout:LayoutSidebar},




]
export const privateRoutes = [

]