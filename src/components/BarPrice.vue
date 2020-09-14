<template>
  <div>合计：{{total}}</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      total: null,
    };
  },
  mounted() {
    axios
      .get("/api/goods")
      .then((resp) => {
        this.total = 0;
        let goodsList = resp.data;
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
</style>
