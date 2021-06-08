<template>
  <div>
    <div class="page-good-list">
      <div v-for="(good, index) in productList" :key="index">
        <ItemGood  v-if="good.name.includes(productsNameKey)" :goodInfo="good" v-on:cart-ball="onCartBall($event)" />
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
  props: ['productsNameKey'],//new
  components: { ItemGood },
  data() {
    return {
      ball: {
        show: false,
        el: null,
      },
      productList: [],
      // productsNameKey: this.productsNameKey,//new
    };
  },
  mounted() {
    Indicator.open("店小二正在拼命加载商品...");
    axios
      .get("/api/products")
      .then((resp) => {
        this.productList = resp.data.results;
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
  //new
  //  computed: {
  //     matchProductsNameKey() {
  //         // if (this.productsNameKey !== '') {
  //         //     return this.productList.filter(productList => productList.includes(this.productsNameKey))
  //         // }
  //         // return this.productList
  //         return productList.includes(this.productsNameKey);
  //     }
  // },
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
