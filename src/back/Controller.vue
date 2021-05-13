<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">订单</mt-tab-item>
      <mt-tab-item id="2">待配送</mt-tab-item>
      <mt-tab-item id="3">用户</mt-tab-item>
      <mt-tab-item id="4">商品</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <Orders :orders="orders"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <WaitFor :orders="orders"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <Users/>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <CGoodsList/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Orders from "@/back/Orders";
import WaitFor from "@/back/WaitFor";
import axios from "axios";
import Users from "@/back/Users";
import CGoodsList from "@/back/CGoodsList";
export default {
  name: "Controller",
  components: {
    CGoodsList,
    Users,
    Orders,
    WaitFor
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