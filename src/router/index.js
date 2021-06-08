import Vue from 'vue'
import Router from 'vue-router'

/* import pages */
import PageHome from '@/pages/PageHome.vue'
import PageCart from '@/pages/PageCart.vue'
import PageOrder from '@/pages/PageOrder.vue'
import PageMe from '@/pages/PageMe.vue'
import FormOrder from '@/pages/FormOrder.vue'
import OrderDetails from '@/pages/OrderDetails.vue'
import Controller from "@/back/Controller";
import COrderDetails from "@/back/COrderDetails";
import EditProduct from "@/back/EditProduct";
import Login from "@/pages/Login";
import Register from "@/pages/Register"
import PageAnnouncement from "@/pages/PageAnnouncement";
import PageAddressForm from "@/pages/PageAddressForm";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/home', component: PageHome},
        {path: '/cart', component: PageCart},
        {path: '/order', component: PageOrder},
        {path: '/me', component: PageMe},
        {path: '/form', component: FormOrder},
        {path: '/details', component: OrderDetails},
        {path: '/controller', component: Controller},
        {path: '/controller/order/details', component: COrderDetails},
        {path: '/controller/editProduct', component: EditProduct},
        {path: '/login', component: Login},
        {path: '/register', component: Register},
        {path: '/announcement', component: PageAnnouncement},
        {path: '/address-form', component: PageAddressForm}
    ]
})
