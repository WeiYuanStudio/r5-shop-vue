<template>
  <div>
    <div class="order-form">
      <mt-field label="昵称" v-model="name"></mt-field>
      <mt-field label="房号" type="number" v-model="room"></mt-field>
      <mt-field label="电话" type="number" v-model="tele"></mt-field>
      <mt-field label="备注" type="textarea" rows="2" v-model="remark"></mt-field>
      <mt-button type="primary" @click="submit">提交订单</mt-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "mint-ui";

export default {
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

      let obj = Object.create(null);
      for (let i in this.$store.state.shopCart){
        if (this.$store.state.shopCart[i] !== undefined){
          obj[i] = this.$store.state.shopCart[i];
        }
      }
      console.log(obj);

      let data = {
        "name": this.name,
        "room": this.room,
        "tele": this.tele,
        "remark": this.remark,
        "productMap": obj
      }
      console.log(data);
      axios.post("/api/order/add",data).then((resp) => {
        Toast({
          message: resp.data.message,
          position: "bottom",
          duration: 2000,
        });
        this.$emit("finish");
      })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-form {
  background-color: #fff;
  height: calc(90vh);
}
</style>
