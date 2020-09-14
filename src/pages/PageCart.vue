<template>
  <div>
    <CartGoodsList />
    <BarPrice />
  </div>
</template>

<script>
import CartGoodsList from "@/components/CartGoodsList.vue";
import BarPrice from "@/components/BarPrice.vue";

export default {
  components: {
    CartGoodsList,
    BarPrice,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
