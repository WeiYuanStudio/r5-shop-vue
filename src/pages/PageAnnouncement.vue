<template>
  <div>
    <van-nav-bar
      title="公告中心"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div :key="index" v-for="(announcement, index) in announcementList">
      <ItemAnnouncement :announcement="announcement" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
import ItemAnnouncement from "@/components/ItemAnnouncement.vue";

export default {
  components: { ItemAnnouncement },
  data() {
    return {
      announcementList: [],
    };
  },
  created() {
    Toast.loading()
    axios.get("/api/announcements/").then((resp) => {
      this.announcementList = resp.data.results;
      Toast.clear()
    });
  },
};
</script>

<style>
</style>
