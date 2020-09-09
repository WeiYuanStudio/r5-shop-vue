<template>
  <div>
    <div class="page-good-list">
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
import ItemGood from "@/components/ItemGood.vue";

export default {
  components: { ItemGood },
  data() {
    return {
      ball: {
        show: false,
        el: null,
      },
      goodList: [
        {
          id: 1,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME1",
          price: "100",
          tag: "",
          remark: "备注",
          stock: "5",
        },
        {
          id: 2,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME2",
          price: "100",
          tag: "",
          remark: "",
          stock: "",
        },
        {
          id: 3,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME3",
          price: "100",
          tag: "",
          remark: "",
          stock: "",
        },
      ],
    };
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
    transition: all 0.5s cubic-bezier(0.42, 0, 1, 1);

    .inner {
      transition: all 0.5s linear;
    }
  }
}
</style>
