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
          id: 1,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME1",
          price: "100$",
          tag: "",
          remark: "",
        },
        {
          id: 2,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME2",
          price: "100$",
          tag: "",
          remark: "",
        },
        {
          id: 3,
          imgLink:
            "https://m.media-amazon.com/images/I/51TfrooMUWL._SL160_.jpg",
          name: "YOUR NAME3",
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
