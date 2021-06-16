<template>
  <div>
    <div v-if="orderList.length>0" class="page-order-list">
      <div v-for="(order, index) in orderList" :key="index">
        <ItemOrder :orderInfo="order" @click.native="$router.push({
        path: '/details',
        query: {list: order}
        })"/>
      </div>
    </div>
    <div v-else>
      <van-empty description="暂无数据">
      </van-empty>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "vant";

import ItemOrder from "@/components/ItemOrder.vue";

export default {
  components: {
    ItemOrder,
  },
  data() {
    return {
      orderList: []
    };
  },
  mounted() {
    //所有订单的id
    axios.get("/api/order/").then(resp => {
      this.orderList = resp.data.results
    }).catch(e => {
      if (e.response.status === 401) {
        Toast.fail('请先登录')
      } else {
        Toast.fail(e)
      }
    })
  }
};
</script>

<style scoped>
</style>
