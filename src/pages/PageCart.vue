<template>
  <div>
    <CartGoodsList v-show="!isFinished" />
    <BarPrice v-show="!isFinished" />
    <button @click="buy" v-show="!isFinished">结算</button>
    <FormOrder @finish="finish" v-show="isFinished"/>
  </div>
</template>

<script>
import CartGoodsList from "@/components/CartGoodsList.vue";
import BarPrice from "@/components/BarPrice.vue";
import FormOrder from "@/pages/FormOrder";

export default {
  components: {
    CartGoodsList,
    BarPrice,
    FormOrder
  },
  data() {
    return {
      isFinished: false,
    };
  },
  methods:{
    buy(){
      this.isFinished = true
    },
    finish(){
      this.isFinished = false
      this.$store.commit("removeAllShopCart")
      this.$router.push("/order")
    }
  }
};
</script>

<style scoped>
</style>
