<template>
  <div>
    <div v-for="(good, index) in goodList" :key="index">
      <ItemGood :goodInfo="good" />
    </div>
  </div>
</template>

<script>
import ItemGood from "@/components/ItemGood.vue";

export default {
  components: { ItemGood },
  data() {
    return {
      goodList: [
        {
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME",
          price: "100$",
          tag: "",
          remark: "",
        },
        {
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME",
          price: "100$",
          tag: "",
          remark: "",
        },
        {
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME",
          price: "100$",
          tag: "",
          remark: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
