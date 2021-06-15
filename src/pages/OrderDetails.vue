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
          <DetailsGoods :goodsInfo="item" />
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
          下单时间: {{ goodsList.submit_datetime }}
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
      orderStringList: '',
      orderToDetail: [],
    };
  },
  methods: {
    tranState(state) {
      if (state === "c") return 0;
      if (state === "p") return 1;
      if (state === "d") return 2;
      if (state === "f") return 3;
    },
  },
  mounted() {
    this.goodsList = this.$route.query.list;
    this.active = this.tranState(this.goodsList.state)
    // let keys = Object.keys(this.goodsList.good);
    // for (let i = 0; i < keys.length; i++) {
    //   axios.get("/api/good/" + keys[i]).then((resp) => {
    //     resp.data.num = this.goodsList.good[keys[i]];
    //     this.goods.push(resp.data);
    //   });
    // }
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
    }).then(() => {
      this.orderExtend.forEach(item => {
        console.log("long",item)
        axios.get(`/api/products/${item.id}`).then(resp => {
          this.orderStringList += resp.data.name + `x${item.count}` + '、'
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
