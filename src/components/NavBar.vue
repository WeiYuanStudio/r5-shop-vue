<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <font-awesome-icon class="router-icon" icon="home" fixed-width />
        <div class="router-font">主页</div>
      </mt-tab-item>
      <mt-tab-item id="cart">
        <font-awesome-icon class="router-icon" icon="shopping-cart" fixed-width />
        <mt-badge size="small" color="red">{{cartCount}}</mt-badge>
        <div class="router-font">购物车</div>
      </mt-tab-item>
      <mt-tab-item id="order">
        <font-awesome-icon class="router-icon" icon="list" fixed-width />
        <div class="router-font">订单</div>
      </mt-tab-item>
      <mt-tab-item id="about">
        <font-awesome-icon class="router-icon" icon="info" fixed-width />
        <div class="router-font">关于</div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters.getCartCount
    }
  },
  watch: {
    selected(val) {
      /* 通过id来产生router url，请保证id与路由url一致 */
      this.$router.push("/" + val);
    },
  },
};
</script>

<style scoped>
.router-icon {
  font-size: 20px;
  margin: 4px;
}
</style>
