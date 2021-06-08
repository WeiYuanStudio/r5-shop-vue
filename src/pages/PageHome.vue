<template>
  <div>
    <div>
      <van-search v-model="productsNameKey" placeholder="请输入搜索关键词"/>
      <van-notice-bar
          left-icon="volume-o"
          :text="noticeContent"
      />
      <GoodsList :productsNameKey="productsNameKey"/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {Search} from "vant";

import GoodsList from "@/components/GoodsList.vue";
import axios from "axios";

Vue.use(Search);
export default {
  components: {GoodsList},
  data() {
    return {
      productsNameKey: "",
      noticeContent: ""
    };
  },
  created() {
    axios.get("/api/announcements/").then(res => {
      const first = res.data.results[0]
      this.noticeContent = `${first.title}: ${first.content}`
    })
  }
};
</script>

<style scoped>
</style>
