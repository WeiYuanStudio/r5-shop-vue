<template>
  <div id="app">
    <PageOrder />
  </div>
</template>

<script>
import PageOrder from "./components/PageOrder.vue";

export default {
  name: "App",
  components: {
    PageOrder,
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
