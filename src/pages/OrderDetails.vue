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
        <van-steps :active="active">
          <van-step>已创建</van-step>
          <van-step>已支付</van-step>
          <van-step>配送中</van-step>
          <van-step>已完成</van-step>
        </van-steps>
      </div>
      <div class="order-details-goods">
        商品
        <div v-for="(item, i) in orderToDetail" :key="i">
          <DetailsGoods :goodsInfo="item"/>
        </div>
      </div>
      <div class="order-details-user">
        <div class="order-details-user-name">昵称: {{ goodsList.customer_name }}</div>
        <div class="order-details-user-room">房号: {{ goodsList.address_detail }}</div>
        <div class="order-details-user-tele">手机号: {{ goodsList.phone }}</div>
      </div>
      <div class="order-details-order">
        <div class="order-details-order-number">订单号: {{ goodsList.id }}</div>
        <div class="order-details-order-mode">
          支付方式: 到付
        </div>
        <div class="order-details-order-time">
          下单时间: {{ new Date(goodsList.submit_datetime).toLocaleString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import DetailsGoods from "@/components/DetailsGoods.vue";
import axios from "axios";

export default {
  components: {
    DetailsGoods,
  },
  data() {
    return {
      goodsList: [],
      active: 0,
      orderExtend: [],
      orderToDetail: [],
    };
  },
  methods: {
    tranState(state) {
      const map = {
        "c": 0,
        "p": 1,
        "d": 2,
        "f": 3
      }

      return map[state]
    },
  },
  mounted() {
    this.goodsList = this.$route.query.list;
    this.active = this.tranState(this.goodsList.state)

    axios.get("/api/order-extend/", {params: {order: this.goodsList.id}}).then(resp => {
      this.orderExtend = resp.data.results
      this.orderToDetail = []
      this.orderExtend.filter(item => {
        this.orderToDetail.push({
          img: item.product.image,
          name: item.product.name,
          price: item.product.price,
          num: item.count
        })
      })
    })
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
