<template>
  <div class="good-info">
    <div class="good-info-left">
      <img class="goods-img" v-lazy="img"/>
    </div>
    <!---->
    <div class="good-info-right">
      <div class="good-info-right-up">
        <div class="good-name">{{ name }}</div>
        <div class="good-price">￥{{ price }}</div>
      </div>
      <div class="good-info-right-down">数量 {{ stock }}</div>
    </div>
    <div class="button">
      <mt-button @click="$router.push({
        path: '/controller/editProduct',
        query: {data: goodsInfo}
        })">编辑
      </mt-button>
      <mt-button type="danger" @click="del">删除</mt-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "mint-ui";

export default {
  props: ["goodsInfo"],
  data() {
    return {
      ...this.goodsInfo,
    };
  },
  methods: {
    del(){
      axios.delete("/controller/product/" + this.id).then(resp => {
        Toast({
          message: resp.data.message,
          position: "bottom",
          duration: 2000,
        });
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good-info {
  margin: 8px 5px;
  display: flex;
  flex-flow: row;
}

.good-info-right {
  flex: auto;
  margin: 1px 10px;
  display: flex;
  flex-flow: column;
}

.good-info-right-up {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
}

.good-info-right-down-info {
  text-align: left;
}

.goods-img {
  width: 120px;
  height: 120px;
  border: solid 1px white;
  border-radius: 15px;
}

.button {
  width: 20%;
}
</style>
