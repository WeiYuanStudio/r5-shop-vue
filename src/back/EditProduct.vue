<template>
  <div>
    <mt-field label="id" placeholder="请输入id" v-model="id"></mt-field>
    <mt-field label="name" placeholder="请输入name" v-model="name"></mt-field>
    <mt-field label="img" placeholder="请输入img" v-model="img"></mt-field>
    <mt-field label="price" placeholder="请输入price" v-model="price"></mt-field>
    <mt-field label="stock" placeholder="请输入stock" v-model="stock"></mt-field>
    <mt-field label="show" placeholder="请输入show" v-model="show"></mt-field>
    <mt-button type="primary" @click="submit">提交</mt-button>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "mint-ui";

export default {
  name: "EditProduct",
  data(){
    return{
      data: null,

      id: null,
      name: null,
      img: null,
      price: null,
      stock: null,
      show: null
    }
  },
  created() {

    this.data = this.$route.query.data

    this.id = this.data.id;
    this.name = this.data.name;
    this.img = this.data.img;
    this.price = this.data.price;
    this.stock = this.data.stock;
    this.show = this.data.show;
  },
  methods: {
    submit(){
      let send = new FormData;
      send.append("id", this.id);
      send.append("name", this.name);
      send.append("img", this.img);
      send.append("price", this.price);
      send.append("stock", this.stock);
      send.append("show", this.show);
      axios.put("/controller/product",send).then(resp => {
        Toast({
          message: resp.data.message,
          position: "bottom",
          duration: 2000,
        });
      }).catch(() => {
        Toast({
          message: "信息不正确",
          position: "bottom",
          duration: 2000,
        });
      })
    }
  }
}
</script>

<style scoped>

</style>