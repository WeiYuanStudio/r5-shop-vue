<template>
  <div>
    <div>
      <van-search v-model="productsNameKey" placeholder="请输入搜索关键词" />
      <GoodsList :productsNameKey="productsNameKey"/>
    </div>
  </div>
</template>

<script>
import GoodsList from "@/components/GoodsList.vue";
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
export default {
  components: { GoodsList },
  data() {
    return {
      productsNameKey : '',
    };
  },
};
</script>

<style scoped>
</style>
