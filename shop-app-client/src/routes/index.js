import Home from "~/pages/user/Home"
import { LayoutNoSidebar,LayoutSidebar, LayoutSidebarUser } from "~/components/Layout"
import Dashboard from "~/pages/admin/Dashboard"
import Home from "~/pages/user/Home"
import PageAllProduct from "~/pages/user/Home/PageAllProduct"
import PageProductClothes from "~/pages/user/Home/PageProductClothes"
import PageProductSport from "~/pages/user/Home/PageProductSport"
import PageProductUnderWear from "~/pages/user/Home/PageProductUnderWear"
import Products from "~/pages/admin/Products"
import ImportProducts from "~/pages/admin/ImportProducts"
import Orders from "~/pages/admin/Orders"
import Bill from "~/pages/admin/History/Bill"
import RentalImport from "~/pages/admin/History/RentalImport"
import ProductDetail from "~/pages/user/ProductDetail"
import Collection from "~/pages/user/Collection"
 
import Info from "~/pages/user/Profile/Info"
import Vouchers from "~/pages/user/Profile/Vouchers"
import OrdersUser from "~/pages/user/Profile/Orders"
import Addresses from "~/pages/user/Profile/Addresses"
import ReviewsUser from "~/pages/user/Profile/Reviews"
import Policies from "~/pages/user/Profile/Policies"
import Payment from "~/pages/user/Payment"
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
    {path:'/user/all-products' , component: PageAllProduct, layout:LayoutNoSidebar},
    {path:'/user/product-underwears' , component: PageProductUnderWear, layout:LayoutNoSidebar},
    {path:'/user/product-sports', component: PageProductSport, layout:LayoutNoSidebar},
    {path:'/user/product-clothes' , component: PageProductClothes, layout:LayoutNoSidebar},


    // admin: => path: '/admin/[pageName]'
    {path:'/admin/customer-manage' , component: CustomerManage, layout:LayoutSidebar},
    {path:'/admin/vouchers-manage' , component: VouchersAdmin, layout:LayoutSidebar},
    {path:'/admin/reviews' , component: Reviews, layout:LayoutSidebar},
    {path:'/admin/reviews/:id/detail' , component: DetailReview, layout:LayoutSidebar},
    {path:'/admin/feedbacks' , component: Feedbacks, layout:LayoutSidebar},
    {path:'/admin/feedbacks/detail' , component: FeedbackDetail, layout:LayoutSidebar},




    {path:'/admin' , component: Dashboard, layout:LayoutSidebar},
    {path:'/admin/products' , component: Products, layout:LayoutSidebar},
    {path:'/admin/products/import' , component: ImportProducts, layout:LayoutSidebar},
    {path:'/admin/orders' , component: Orders, layout:LayoutSidebar},
    {path:'/admin/history/bill' , component: Bill, layout:LayoutSidebar},
    {path:'/admin/history/import' , component: RentalImport, layout:LayoutSidebar}

]
export const privateRoutes = [

]