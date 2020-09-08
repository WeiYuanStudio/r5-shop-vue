<template>
  <div class="good-info">
    <div class="good-info-left">
      <img v-lazy="imgLink" />
    </div>
    <div class="good-info-right">
      <div>{{name}}</div>
      <div>{{price}}</div>
      <div></div>
      <div>{{remark}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodInfo"],
  data() {
    return {
      imgLink: "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
      name: "YOUR NAME",
      price: "100$",
      stock: "", //库存
      tag: "",
      remark: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good-info {
  display: flex;
  flex-flow: row;
}

.good-info-right {
  margin: 10px 20px;
}
</style>
