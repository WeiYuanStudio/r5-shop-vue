<template>
  <div>
    <van-nav-bar
        title="订单"
    />
    <PageOrderList/>
  </div>
</template>

<script>
import PageOrderList from "@/components/PageOrderList.vue";

export default {
  components: {
    PageOrderList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
