<template>
  <div class="card">
    <div class="buyersShow-title">{{ buyersShow.title }}</div>
    <div>来自：<span class="buyers-username">{{ customerUsername }}</span></div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "vant";
import Showdown from "showdown";

export default {
  props: ["buyersShow"],
  data() {
    return {
      customerUserId: this.buyersShow.customer,
      customerUsername: '',
      content: null
    };
  },
  methods: {},
  created() {
    const converter = new Showdown.Converter()
    this.content = converter.makeHtml(this.buyersShow.content)

    Toast.loading()
    axios.get(`/api/users/${this.customerUserId}/`).then((resp) => {
      this.customerUsername = resp.data.username;
      Toast.clear()
    });
  },
};
</script>

<style type="less">
.card {
  margin: 10px 10px;
  padding: 20px 30px;
  display: flex;
  flex-flow: column;
  text-align: left;  border-radius: 8px;
  background-color: #fff;
  transition: all 0.1s ease-in;
}

.buyersShow-title {
  font-weight: bolder;
  font-size: 1.6em;
}

.buyers-username {
  color: #6495ED
}

.content * {
  margin-top: 4px;
  margin-bottom: 4px;
}

.content h1 {
  font-size: 1.4em;
}

.content h2 {
  font-size: 1.2em;
}

</style>
