<template>
  <div class="good-info">
    <div class="good-info-left">
      <img v-lazy="imgLink" />
    </div>
    <!---->
    <div class="good-info-right">
      <div class="good-info-right-up">
        <div class="good-name">{{name}}</div>
        <div class="good-remark">{{remark}}</div>
      </div>
      <div class="good-info-right-down">
        <div class="good-info-right-down-info">
          <div class="good-price">￥{{price}}</div>
          <div class="good-stock">库存{{stock}}</div>
        </div>
        <div class="good-info-right-down-cart">
          <div class="good-buy-num">购买数量：{{1}}</div>
          <div @click="addToCart($event)">
            <font-awesome-icon class="cartModifyBtn" icon="plus-circle" fixed-width />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodInfo"],
  data() {
    return {
      ...this.goodInfo,
    };
  },
  methods: {
    addToCart(e) {
      e.mark = "test";
      this.$emit("cart-ball", e);
      // let el = e.target;
      // let rect = el.getBoundingClientRect();
      // console.log(rect.left);
      //
      this.$store.commit("addShopCart", this.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.good-info {
  margin: 8px 5px;
  padding: 10px;
  display: flex;
  flex-flow: row;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in;
}

.good-info-right {
  flex: auto;
  margin: 5px 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.good-name {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}

.good-remark {
  text-align: left;
}

.good-price {
  text-align: left;
  color: #e4393c;
}

.cartModifyBtn {
  color: red;
  width: 20px;
  height: 20px;
}

.good-info-right-down-info {
  display: flex;
  flex-flow: column;
  text-align: left;
}

.good-info-right-down-cart {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
}

.good-price {
  font-size: 1.5em;
}

.good-stock {
  font-size: 0.8em;
  margin: 1px 4px;
}
</style>
