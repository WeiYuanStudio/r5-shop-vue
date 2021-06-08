<template>
  <div>
    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
    />
  </div>
</template>

<script>
import {Toast} from 'vant';
import axios from "axios";

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '请先登录',
          tel: '请先登录',
          address: '请先登录',
          isDefault: true,
        },
      ]
    };
  },
  methods: {
    onAdd() {
      this.$router.push('/address-form')
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    onSelect(item) {
      Toast('选择地址:' + item.name);
      this.$store.commit("setAddress", item)
      this.$router.back()
    }
  },
  // address_code: "test2"
  // address_detail: "test2"
  // customer: 2
  // customer_name: "test2"
  // id: 5
  mounted() {
    axios.get("/api/shipping-address/").then((resp) => {
      // this.list = resp.data.results
      let tmp = []
      let list = resp.data.results
      list.filter((item) => {
        tmp.push({
          id: item.id,
          name: item.customer_name,
          tel: item.phone,
          address: item.address_detail
        })
      })
      this.list = tmp
      console.log(resp.data.results[1]);
    })
  }
};
</script>

<style scoped>

</style>