import Vue from 'vue'
import Router from 'vue-router'

/* import pages */
import PageHome from '@/pages/PageHome.vue'
import PageCart from '@/pages/PageCart.vue'
import PageOrder from '@/pages/PageOrder.vue'
import PageAbout from '@/pages/PageAbout.vue'
import FormOrder from '@/pages/FormOrder.vue'
import OrderDetails from '@/pages/OrderDetails.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', component: PageHome },
        { path: '/cart', component: PageCart },
        { path: '/order', component: PageOrder },
        { path: '/about', component: PageAbout },
        { path: '/form', component: FormOrder },
        { path: '/details', component: OrderDetails },
    ]
})