<template>
  <div id="app">
    <!--单页路由router-view-->
    <router-view id="main-view"/>
    <!--NavBar 路由按钮-->
    <NavBar id="nav-bar"/>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  created() {
    if (this.$store.getters.isLogin) {
      const token = this.$store.state.userToken
      axios.defaults.headers.common['Authorization'] = `Token ${token}`
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#main-view {
  margin: 0 0 54px 0;
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
