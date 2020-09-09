<template>
  <div>
    <div>PAGEORDER</div>
    <PageOrderList />
    <Notice />
  </div>
</template>

<script>
import PageOrderList from "@/components/PageOrderList.vue";
import Notice from "@/components/Notice.vue";

export default {
  components: {
    PageOrderList,
    Notice,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
