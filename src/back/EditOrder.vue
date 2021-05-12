<template>
  <div>
    <mt-field label="id" placeholder="请输入id" v-model="id"></mt-field>
    <mt-button @click.stop="openPicker" style="margin: 5px" type="primary">选择日期</mt-button>
    {{ submit_datetime }}
    <mt-datetime-picker type="datetime" ref="picker" v-model="submit_datetime"
                        @confirm="confirmHandler"></mt-datetime-picker>
    <mt-field label="address" placeholder="请输入address" v-model="address"></mt-field>
<!--    <mt-field label="customer_id" placeholder="请输入customer_id" v-model="customer_id"></mt-field>-->
    <mt-field label="state" placeholder="请输入state" v-model="state"></mt-field>
    <mt-field label="tele" placeholder="请输入tele" v-model="tele"></mt-field>
    <mt-field label="remark" placeholder="请输入remark" v-model="remark"></mt-field>
    <mt-field label="name" placeholder="请输入name" v-model="name"></mt-field>
    <mt-field label="price" placeholder="请输入price" v-model="price"></mt-field>
    <div style="text-align: center; margin: 5px">
      <mt-button type="primary" @click="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "mint-ui";

export default {
  name: "EditOrder",
  props: {
    data: null
  },
  data() {
    return {
      id: null,
      submit_datetime: null,
      address: null,
      // customer_id: null,
      state: null,
      tele: null,
      remark: null,
      name: null,
      price: null
    }
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    }
    ,
    confirmHandler(val) {
      console.log(val)
      this.$refs.picker.close();
    },
    submit(){
      axios.put("/controller/order",this.$data).then(resp => {
        Toast({
          message: resp.data.message,
          position: "bottom",
          duration: 2000,
        });
      })
    }
  },
  created() {
    console.log(this.data)
    this.id = this.data.id;
    this.submit_datetime = this.data.submit_datetime;
    this.address = this.data.address;
    this.customer_id = this.data.customer_id;
    this.state = this.data.state;
    this.tele = this.data.tele;
    this.remark = this.data.remark;
    this.name = this.data.name;
    this.price = this.data.price;
  }
}
</script>

<style scoped>

</style>