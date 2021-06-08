<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o" to="/home">主页</van-tabbar-item>
      <van-tabbar-item name="show" icon="newspaper-o" to="/buyersShow">买家秀</van-tabbar-item><!-- Todo: -->
      <van-tabbar-item name="cart" icon="shopping-cart-o" to="/cart" :badge="cartCount">购物车</van-tabbar-item>
      <van-tabbar-item name="order" icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item name="setting" icon="user-o" to="/me">我的</van-tabbar-item><!-- Todo: -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters.getCartCount;
    },
  },
};
</script>
