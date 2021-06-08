<template>
  <div>
    <CartGoodsList  />

    <van-submit-bar :price="total*100" button-text="提交订单" @submit="buy" />
  </div>
</template>

<script>
import CartGoodsList from "@/components/CartGoodsList.vue";

import axios from "axios";

export default {
  components: {
    CartGoodsList,
  },
  data() {
    return {
      total: null,
    };
  },
  methods:{
    buy(){
      if(this.total !== 0){
        this.$router.push("/formOrder")
      }
    },
  },
  mounted() {
    axios
        .get("/api/products")
        .then((resp) => {
          this.total = 0;
          let goodsList = resp.data.results;
          let cart = this.$store.state.shopCart;
          for (let k in cart) {
            console.log(k);
            console.log(cart[k]);
            let itemPrice = -1;
            goodsList.forEach((i) => {
              console.log(i);
              if (i.id == k) itemPrice = i.price;
            });
            this.total += itemPrice * cart[k];
          }
        })
        .catch(() => {})
        .finally(() => {});
  },
};
</script>

<style scoped>
.van-submit-bar{
  bottom: 50px;
}
</style>
