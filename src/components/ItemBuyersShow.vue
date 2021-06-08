<template>
  <div class="card">
    <div class="buyersShow-title">{{ buyersShow.title }}</div>
    <div>来自：<span class="buyers-username">{{customerUsername}}</span></div>
    <div class="buyersShow-content">{{ buyersShow.content }}</div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";

export default {
  props: ["buyersShow"],
  data() {
    return {
      customerUserId : this.buyersShow.customer,
      customerUsername:'',
    };
  },
  methods: {
  },
  created() {
    Toast.loading()
    axios.get(`/api/users/${this.customerUserId}/`).then((resp) => {
      this.customerUsername = resp.data.username;
      Toast.clear()
    });
  },
};
</script>

<style lang="stylus" scoped>
.card {
  margin: 10px 10px;
  padding: 20px 30px;
  display: flex;
  flex-flow: column;
  text-align: left;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in;
}

.buyersShow-title {
  font-weight: bolder;
  font: 2em;
}

.buyers-username {
    color #6495ED
}

</style>
