import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shopCart: {}
    },
    mutations: {
        /* 清空购物车 */
        cleanShopCart(state) {
            state.shopCart = {}
        },
        /**
         * 添加购物车
         * @param state 
         * @param id 商品id
         */
        addShopCart(state, id) {
            if (state.shopCart[id] === undefined) state.shopCart[id] = 0;
            state.shopCart[id] = state.shopCart[id] + 1

            let temp = JSON.parse(JSON.stringify(state.shopCart))
            Vue.set(state, 'shopCart', temp) //避免getters被computed调用时不刷新
        },
        removeShopCart(state, id) {
            if (state.shopCart[id] === undefined) throw 'goods id undefined';
            if (state.shopCart[id] >= 1) state.shopCart[id] = state.shopCart[id] - 1;
 
            let temp = JSON.parse(JSON.stringify(state.shopCart))
            Vue.set(state, 'shopCart', temp) //避免getters被computed调用时不刷新
        }
    },
    getters: {
        /* 通过id获取某商品的购物车数量 */
        getCartNumById: (state) => (id) => {
            console.log(state.shopCart)
            if (state.shopCart[id] === undefined) state.shopCart[id] = 0;
            return state.shopCart[id];
        },
        getCartCount: (state) => {
            let count = 0;
            for (let i in state.shopCart) {
                if (state.shopCart[i] !== undefined) {
                    count += state.shopCart[i];
                }
            }
            return count;
        }
    }
});
