import Vue from 'vue'
import App from '@/App.vue'

/* Vues */
import router from './router'
import store from './store'

/* Vant */
import Vant from 'vant';
import 'vant/lib/index.css';

/* fontfont-awesome */
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome, faShoppingCart, faList, faInfo, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* Use Vue */
Vue.use(Vant)

/* import font-awesome lib */
library.add(faHome)
library.add(faShoppingCart)
library.add(faList)
library.add(faInfo)
library.add(faPlusCircle)
library.add(faMinusCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')
