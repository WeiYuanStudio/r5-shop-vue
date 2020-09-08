import Vue from 'vue'
import App from './App.vue'

import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faShoppingCart, faList, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(Lazyload)

library.add(faHome)
library.add(faShoppingCart)
library.add(faList)
library.add(faInfo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')