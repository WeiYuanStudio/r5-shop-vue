<template>
  <div id="app">
    <!-- 在线状态头 -->
    <Header id="header-bar" />
    <!--单页路由router-view-->
    <router-view id="main-view" />
    <!--NavBar 路由按钮-->
    <NavBar id="nav-bar" />
  </div>
</template>

<script>
import Header from "@/components/HeaderInfo.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    Header,
    NavBar,
  },
  methods: {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header-bar {
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 31;
  width: 100%;
}

#main-view {
  margin: 2em 0 4em 0;
}

#nav-bar {
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 31;
  width: 100%;
}
</style>
