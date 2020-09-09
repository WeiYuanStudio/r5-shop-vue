import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shopCart: []
    },
    mutations: {
        /* 清空购物车 */
        cleanShopCart(state) {
            state.shopCart = []
        },
        /**
         * 添加购物车
         * @param state 
         * @param goodId 商品id
         */
        addShopCart(state, goodId) {
            console.log(state.shopCart)
            console.log('invoke add Shop cart')

            let isFound = false

            state.shopCart.forEach(item => {
                if (item.id === goodId) {
                    if (item.num !== undefined) {
                        ++item.num;
                    } else {
                        item.num = 1;
                    }
                    isFound = true
                    return
                }
            })

            if (isFound) return

            state.shopCart.push({
                id: goodId,
                num: 1
            })
        }
    }
});
