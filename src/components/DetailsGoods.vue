<template>
  <div class="good-info">
    <div class="good-info-left">
      <img class="goods-img" v-lazy="img" />
    </div>
    <!---->
    <div class="good-info-right">
      <div class="good-info-right-up">
        <div class="good-name">{{name}}</div>
        <div class="good-price">￥{{price}}</div>
      </div>
      <div class="good-info-right-down">数量  {{num}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodsInfo"],
  data() {
    return {
      ...this.goodsInfo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
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
</style>
