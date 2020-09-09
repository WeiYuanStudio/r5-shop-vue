<template>
  <div class="good-info">
    <div class="good-info-left">
      <img v-lazy="imgLink" />
    </div>
    <div class="good-info-right">
      <div>{{name}}</div>
      <div>{{price}}</div>
      <div>{{remark}}</div>
      <div>购买数量：{{}}</div>
      <div @click="addToCart">
        <font-awesome-icon class="cartModifyBtn" icon="plus-circle" fixed-width />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodInfo"],
  data() {
    return {
      ...this.goodInfo
    };
  },
  methods: {
    addToCart() {
      this.$store.commit('addShopCart', this.id)
    }
  }
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

.cartModifyBtn {
  color: red;
}
</style>
