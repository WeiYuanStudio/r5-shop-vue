<template>
  <div>
    <div class="order-details-page">
      <div class="order-details-state">状态</div>
      <div class="order-details-goods">
        商品
        <div v-for="(goods, index) in goodsList" :key="index">
          <DetailsGoods :goodsInfo="goods" />
        </div>
      </div>
      <div class="order-details-user">
        <div class="order-details-user-name">昵称</div>
        <div class="order-details-user-room">房号</div>
        <div class="order-details-user-tele">手机号</div>
      </div>
      <div class="order-details-order">
        <div class="order-details-order-number">订单号</div>
        <div class="order-details-order-mode">支付方式</div>
        <div class="order-details-order-time">下单时间</div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
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

  border-radius: 5px;
  background-color: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.1s ease-in;
}
</style>
