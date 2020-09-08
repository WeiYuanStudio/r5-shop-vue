<template>
  <div>
    <mt-field label="昵称：" placeholder v-model="name"></mt-field>
    <mt-field label="房号：" type="number" placeholder v-model="room"></mt-field>
    <mt-field label="电话：" type="number" placeholder v-model="tele"></mt-field>

    <mt-button type="default">提交订单</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      room: "",
      tele: "",
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
