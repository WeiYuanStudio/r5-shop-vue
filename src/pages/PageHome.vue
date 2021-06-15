<template>
  <div>
    <div>
      <van-notice-bar left-icon="volume-o" :text="noticeContent"/>
      <van-search v-model="productsNameKey" placeholder="请输入搜索关键词"/>
      <van-dropdown-menu>
        <van-dropdown-item v-model="categoryIndex" :options="categoryList" @change="onCategoryChange"/>
        <van-dropdown-item v-model="todoIndex" :options="categoryList"/>
      </van-dropdown-menu>
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
      noticeContent: "",
      categoryIndex: -1,
      todoIndex: "",
      categoryList: [],
    };
  },
  methods: {
    refreshCategory() {
      this.categoryList = [{
        text: '全部分类',
        value: -1
      }]

      axios.get("/api/product-category/").then((res) => {
        const categoryTemp = res.data.results.map((item) => {
          return {
            text: item.name,
            value: item.id,
          };
        });

        this.categoryList.push(...categoryTemp)
      });
    },
    onCategoryChange(e) {
      this.$store.commit("setCategoryId", e)
    }
  },
  created() {
    axios.get("/api/announcements/").then((res) => {
      const first = res.data.results[0];
      this.noticeContent = `${first.title}: ${first.content}`;
    });

    this.refreshCategory()
  },
};
</script>

<style scoped>
</style>
