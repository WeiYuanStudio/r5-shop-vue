<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="refreshProductList">
      <div class="page-good-list">
        <div v-if="productList.length > 0">
          <div v-for="product in showProductList" :key="product.id">
            <ItemGood
                v-if="product.name.includes(productsNameKey)"
                :goodInfo="product"
                v-on:cart-ball="onCartBall($event)"
            />
          </div>
        </div>
        <div v-else>
          <van-empty description="暂无数据"></van-empty>
        </div>

        <div class="ball-wrap">
          <transition
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
          >
            <div class="ball" v-show="ball.show">
              <div class="inner">
                <font-awesome-icon
                    class="cartModifyBtn"
                    icon="plus-circle"
                    fixed-width
                />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "vant";

import ItemGood from "@/components/ItemGood.vue";

export default {
  props: ["productsNameKey"],
  components: {ItemGood},
  data() {
    return {
      isLoading: false,
      ball: {
        show: false,
        el: null,
      },
      productList: [],
      active: 0,
      items: [{text: "分组 1"}, {text: "分组 2"}],
    };
  },
  mounted() {
    this.refreshProductList()
  },
  computed: {
    showProductList() {
      return this.productList.filter(item => {
        const categoryId = this.$store.getters.getCategoryId
        if (categoryId !== -1) {
          return categoryId === item.category.id
        } else {
          return true
        }
      })
    }
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
    refreshProductList() {
      Toast.loading("加载商品...");
      axios
          .get("/api/products/")
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
            Toast.clear();
            this.isLoading = false
          });
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
</style>
