<template>
  <div>
    <div class="page-order-list">
      <div v-for="(order, index) in orderList" :key="index">
        <ItemOrder :orderInfo="order" />
      </div>
    </div>
  </div>
</template>

<script>
import ItemOrder from "@/components/ItemOrder.vue";

export default {
  components: {
    ItemOrder,
  },
  data() {
    return {
      orderList: [
        {
          number: "2020-09-09-1501-AS3S",
          mode: "货到付款",
          state: "已完成",
          good: "可乐*2",
          time: "21:23",
          price: "50.0",
        },
        {
          number: "2020-09-09-1431-D6H7",
          mode: "微信支付",
          state: "配送中",
          good: "红烧牛肉面*2",
          time: "22:40",
          price: "70.0",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
