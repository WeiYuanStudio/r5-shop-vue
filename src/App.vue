<template>
  <div id="app">
    <router-view />
    <!--NavBar 路由按钮-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <font-awesome-icon icon="home" fixed-width />
        <div>主页</div>
      </mt-tab-item>
      <mt-tab-item id="cart">
        <font-awesome-icon icon="shopping-cart" fixed-width />
        <div>购物车</div>
      </mt-tab-item>
      <mt-tab-item id="order">
        <font-awesome-icon icon="list" fixed-width />
        <div>订单</div>
      </mt-tab-item>
      <mt-tab-item id="about">
        <font-awesome-icon icon="info" fixed-width />
        <div>关于</div>
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
