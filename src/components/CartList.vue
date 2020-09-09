<template>
  <div>
    <div class="good-info">
      <div class="good-info-left">
        <img v-lazy="imgLink" />
      </div>
      <div class="good-info-right">
        <div>{{name}}</div>
        <div>{{price}}</div>
        <div>购买数量：{{}}</div>
      </div>
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
    };
  },
};
</script>

<style scoped>
</style>
