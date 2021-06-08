<template>
  <div>
    <div class="order-form">
<!--   地址信息   -->
<AddressCard/>
<!--   购物车列表   -->

<!--   提交订单   -->
      <van-submit-bar :price="total*100" button-text="提交订单" @submit="submit" />
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import {Toast} from "mint-ui";
import AddressCard from "../components/AddressCard";

export default {
  components: {AddressCard},
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
      //
      // let obj = Object.create(null);
      // for (let i in this.$store.state.shopCart){
      //   if (this.$store.state.shopCart[i] !== undefined){
      //     obj[i] = this.$store.state.shopCart[i];
      //   }
      // }
      // console.log(obj);
      //
      // let data = {
      //   "name": this.name,
      //   "room": this.room,
      //   "tele": this.tele,
      //   "remark": this.remark,
      //   "productMap": obj
      // }
      // console.log(data);
      // axios.post("/api/order/add",data).then((resp) => {
      //   Toast({
      //     message: resp.data.message,
      //     position: "bottom",
      //     duration: 2000,
      //   });
      //   this.$emit("finish");
      // })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
