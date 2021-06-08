<template>
  <div class="good-info">
    <div class="good-info-left">
      <img class="goods-img" v-lazy="image" />
      <!-- Todo:设定备用图案 -->
    </div>
    <!---->
    <div class="good-info-right">
      <div class="good-info-right-up">
        <div class="good-name">{{name}} <van-tag v-show="category!=null" type="primary">{{category==null?'':category.name}}</van-tag> </div>
        <!-- <div class="good-remark">{{remark}}</div> -->
      </div>
      <div class="good-info-right-down">
        <div class="good-info-right-down-info">
          <div class="good-price">￥{{price}}</div>
          <div class="good-stock">库存{{stock}}</div>
        </div>
        <div class="good-info-right-down-cart">
          <!-- <div class="good-buy-num">购买数量：{{cartNum}}</div> -->
           <div @click="addToCart($event)">
            <font-awesome-icon class="cart-modify-btn" icon="plus-circle" fixed-width />
          </div>
          <mt-badge size="normal" color="#C4C4C4">{{cartNum}}</mt-badge>
          <div @click="removeFromCart($event)">
            <font-awesome-icon :class="(cartNum !== 0) ? ['cart-modify-btn'] : ['cart-modify-btn-disable']" icon="minus-circle" fixed-width />
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
      this.$emit("cart-ball", e);
      this.$store.commit("addShopCart", this.id);
    },
    removeFromCart() {
      this.$store.commit('removeShopCart', this.id);
    }
  },
  computed: {
    cartNum() {
      return this.$store.getters.getCartNumById(this.id);
    },
  }
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
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
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

.cart-modify-btn {
  color: red;
  width: 20px;
  height: 20px;
}

.cart-modify-btn-disable {
  color: gray;
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

.goods-img {
  width: 120px;
  height: 120px;
  border: solid 1px white;
  border-radius: 15px;
}
</style>
