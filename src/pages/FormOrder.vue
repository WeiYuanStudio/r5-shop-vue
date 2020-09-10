<template>
  <div>
    <div class="order-form">
      <mt-field label="昵称" v-model="name"></mt-field>
      <mt-field label="房号" type="number" v-model="room"></mt-field>
      <mt-field label="电话" type="number" v-model="tele"></mt-field>
      <mt-field label="备注" type="textarea" rows="2" v-modal="remark"></mt-field>
      <mt-button type="primary">提交订单</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      room: "",
      tele: "",
      remark: "",
    };
  },
  methods: {
    submit() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-form {
  background-color: #fff;
  height: calc(90vh);
}
</style>
