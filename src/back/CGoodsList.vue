<template>
  <div>
    <div v-for="(item, i) in goods" :key="i">
      <CDetailsGoods :goods-info="item"></CDetailsGoods>
    </div>
    <mt-button type="primary" @click="$router.push({
    path: '/controller/editProduct',
    query: {data: {id: nextId}}
    })">增加商品</mt-button>
  </div>
</template>

<script>
import CDetailsGoods from "@/back/CDetailsGoods";
import axios from "axios";

export default {
  name: "CGoodsList",
  components: {CDetailsGoods},
  data() {
    return {
      goods: null,
      nextId: Number
    }
  },
  mounted() {
    axios.get("/api/goods").then(resp => {
      this.goods = resp.data
    })
    this.addNextId();
  },
  methods:{
    addNextId(){
      axios.get("/controller/product/maxId").then(resp => {
        this.nextId =  resp.data + 1;
      })
    }
  }
}
</script>

<style scoped>

</style>