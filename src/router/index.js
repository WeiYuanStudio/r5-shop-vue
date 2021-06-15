import Vue from 'vue'
import Router from 'vue-router'

/* import pages */
import PageHome from '@/pages/PageHome.vue'
import PageCart from '@/pages/PageCart.vue'
import PageOrder from '@/pages/PageOrder.vue'
import PageMe from '@/pages/PageMe.vue'
import FormOrder from '@/pages/FormOrder.vue'
import OrderDetails from '@/pages/OrderDetails.vue'
import Login from "@/pages/Login";
import Register from "@/pages/Register"
import PageAnnouncement from "@/pages/PageAnnouncement";
import PageAddressManage from "@/pages/PageAddressManage";
import PageAddressForm from "@/pages/PageAddressForm";
import PageShow from "@/pages/PageShow";
import PageAddBuyerShow from "@/pages/PageAddBuyerShow";
import ChooseAddress from "@/pages/ChooseAddress";
import Myshow from "@/pages/Myshow";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/home', component: PageHome},
        {path: '/cart', component: PageCart},
        {path: '/order', component: PageOrder},
        {path: '/me', component: PageMe},
        {path: '/form-order', component: FormOrder},
        {path: '/details', component: OrderDetails},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/announcement', component: PageAnnouncement},
        {path: '/address-form', component: PageAddressForm},
        {path: '/address-manage', component: PageAddressManage},
        {path: '/buyersShow', component: PageShow},
        {path: '/addBuyerShow', component: PageAddBuyerShow},
        {path: '/chooseAddress', component: ChooseAddress},
        {path: '/myShow', component: Myshow}
    ]
})
