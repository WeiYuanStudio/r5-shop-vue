<template>
  <div>
    <van-nav-bar
        title="提交订单"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
    />

    <div class="order-form">
      <!--   地址信息   -->
      <AddressCard/>
      <!--   购物车列表   -->
      <CartGoodsList/>
      <!--   提交订单   -->
      <van-submit-bar
          :price="this.$store.getters.getTotal * 100"
          button-text="提交订单"
          @submit="submit"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import {Toast} from "vant";
import AddressCard from "../components/AddressCard"
import CartGoodsList from "@/components/CartGoodsList"

export default {
  components: {CartGoodsList, AddressCard},
  data() {
    return {
      name: "",
      room: "",
      tele: "",
      remark: "",
    };
  },
  methods: {
    submit() {
      const orderInfo = {}
      orderInfo.addressInfo = this.$store.getters.getAddress
      orderInfo.cartInfo = this.$store.getters.getCartMap
      console.log(orderInfo)
      console.log(JSON.stringify(orderInfo))
      axios.post("/api/order/", orderInfo).then(resp => {
        console.log(resp)
        Toast.success(" 订单提交成功")
        setTimeout(() => {
          this.$router.push("/order")
        }, 2000)
      }).catch(e => {
        Toast.fail(e.response.data.message)
      })
    },
  },
};
</script>

<style scoped>
</style>
