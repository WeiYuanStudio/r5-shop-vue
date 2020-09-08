import Vue from 'vue'
import Router from 'vue-router'

/* import pages */
import PageHome from '@/pages/PageHome.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: PageHome }
    ]
})