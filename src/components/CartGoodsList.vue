<template>
  <div>
    <div class="page-good-list">
      <div v-if="goodList.length ===0">
        <van-empty name="cart-o" description="购物车为空，去主页选择商品吧！"></van-empty>
      </div>
      <div v-for="(product, index) in goodList" :key="index">
        <van-card
            :num="$store.getters.getCartNumById(product.id)"
            :price="product.price"
            desc="商品备注信息"
            :title="product.name"
            :thumb="product.image"
            :tag="product.category.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import {Toast} from "vant"

export default {
  data() {
    return {
      ball: {
        show: false,
        el: null,
      },
      goodList: [],
      goodsIdList: []
    };
  },
  mounted() {
    let shopCart = this.$store.state.shopCart;

    for (let k in shopCart) {
      if (shopCart[k] !== null && shopCart[k] !== 0) {
        this.goodsIdList.push(parseInt(k))
      }
    }

    console.log(this.goodsIdList)


    axios
        .get("/api/products")
        .then((resp) => {
          this.goodList = resp.data.results.filter((item) => {
            if (item.id !== null && item.id !== undefined) {
              return this.goodsIdList.includes(item.id);
            }
            return false;
          });
          console.log(this.goodList)
        })
        .catch(() => {
          Toast({
            message: "加载商品列表失败",
            position: "bottom",
            duration: 2000,
          });
        })
        .finally(() => {
          Toast.clear()
        });
  },
};
</script>
