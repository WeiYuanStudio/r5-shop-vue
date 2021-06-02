<template>
  <div>
    <div class="page-good-list">
        <div v-if="goodList.length ===0">
            购物车空
        </div>
      <div v-for="(good, index) in goodList" :key="index">
        <ItemGood :goodInfo="good" v-on:cart-ball="onCartBall($event)" />
      </div>
      <div class="ball-wrap">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-show="ball.show">
            <div class="inner">
              <font-awesome-icon class="cartModifyBtn" icon="plus-circle" fixed-width />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from "mint-ui";

import ItemGood from "@/components/ItemGood.vue";
import axios from "axios";

export default {
  components: { ItemGood },
  data() {
    return {
      ball: {
        show: false,
        el: null,
      },
      goodList: [],
    };
  },
  mounted() {
    let goodsIdList = [];

    let shopCart = this.$store.state.shopCart;

    for (let k in shopCart) {
        if (shopCart[k] !== null && shopCart[k] !== 0) {
            goodsIdList.push(parseInt(k))
        }
    }

    console.log(goodsIdList)

    Indicator.open("店小二正在拼命加载商品...");
    axios
      .get("/api/products/")
      .then((resp) => {
        this.goodList = resp.data.results.filter((item) => {
          if (item.id !== null && item.id !== undefined) {
            return goodsIdList.includes(item.id);
          }
          return false;
        });
      })
      .catch(() => {
        Toast({
          message: "加载商品列表失败",
          position: "bottom",
          duration: 2000,
        });
      })
      .finally(() => {
        Indicator.close();
      });
  },
  methods: {
    beforeEnter(el) {
      let dom = this.ball.el;
      let rect = dom.getBoundingClientRect();

      let x = rect.left - window.innerWidth * 0.4;
      let y = window.innerHeight - rect.bottom - 30;

      el.style.display = "";
      el.style.transform = `translate3d(0,-${y}px,0)`;

      let inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el, done) {
      this._offset = document.body.offsetHeight;
      el.style.transform = `translate3d(0,0,0)`;
      let inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(0,0,0)`;
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      this.ball.show = false;
      el.style.display = "none";
    },
    onCartBall(e) {
      this.ball.show = true;
      this.ball.el = e.target;
    },
  },
};
</script>

<style lang="stylus" scoped>
.ball-wrap {
  .ball {
    position: fixed;
    left: 40%;
    bottom: 30px;
    z-index: 50;
    color: red;
    transition: all 0.3s cubic-bezier(0.42, 0, 1, 1);

    .inner {
      transition: all 0.3s linear;
    }
  }
}

.page-good-list {
  margin: 34px 0 0 0;
}
</style>
