<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">订单</mt-tab-item>
      <mt-tab-item id="2">待配送</mt-tab-item>
      <mt-tab-item id="3">用户</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <Orders :orders="orders"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Orders from "@/back/Orders";
import axios from "axios";
export default {
  name: "Controller",
  components: {
    Orders
  },
  data(){
    return{
      selected: null,
      orderIdList: [],
      orders: []
    }
  },
  created() {
    axios.get("/controller/order/num").then((resp) => {
      this.orderIdList = resp.data
      for (let i in this.orderIdList){
        axios.get("/api/order/list/" + this.orderIdList[i]).then(resp => {
          this.orders.push(resp.data)
          // console.log(resp.data)
        })
      }
      // console.log(this.orders)
    })
  }
}
</script>

<style scoped>

</style>