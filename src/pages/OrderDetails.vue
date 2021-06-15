<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="order-details-page">
      <div class="order-details-state">
        状态: {{ tranState(goodsList.state) }}
      </div>
      <div class="order-details-goods">
        商品
        <div v-for="(item, i) in goods" :key="i">
          <DetailsGoods :goodsInfo="item" />
        </div>
      </div>
      <div class="order-details-user">
        <div class="order-details-user-name">昵称: {{ goodsList.name }}</div>
        <div class="order-details-user-room">房号: {{ goodsList.address }}</div>
        <div class="order-details-user-tele">手机号: {{ goodsList.tele }}</div>
      </div>
      <div class="order-details-order">
        <div class="order-details-order-number">订单号: {{ goodsList.id }}</div>
        <div class="order-details-order-mode">
          支付方式: {{ goodsList.mode }}
        </div>
        <div class="order-details-order-time">
          下单时间: {{ goodsList.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DetailsGoods from "@/components/DetailsGoods.vue";

export default {
  components: {
    DetailsGoods,
  },
  data() {
    return {
      goodsList: [
        {
          id: 1,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME1",
          price: "100",
        },
        {
          id: 2,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME2",
          price: "100",
        },
      ],
      goods: [],
    };
  },
  methods: {
    tranState(state) {
      if (state === 0) return "待配送";
      if (state === 1) return "配送中";
      if (state === 2) return "完成";
    },
  },
  mounted() {
    this.goodsList = this.$route.query.list;
    let keys = Object.keys(this.goodsList.good);
    for (let i = 0; i < keys.length; i++) {
      axios.get("/api/good/" + keys[i]).then((resp) => {
        resp.data.num = this.goodsList.good[keys[i]];
        this.goods.push(resp.data);
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-details-page {
  padding: 5px 0;
  text-align: left;
}

.order-details-state,
.order-details-goods,
.order-details-user,
.order-details-order {
  margin: 8px 4px;
  padding: 8px;

  border-radius: 8px;
  background-color: #fff;
  transition: all 0.1s ease-in;
}
</style>
