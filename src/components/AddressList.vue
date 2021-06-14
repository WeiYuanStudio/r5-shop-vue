<template>
  <div>
    <van-address-list
        v-model="chosenAddressId"
        :list="addressList"
        @add="$router.push('/address-form')"
        @edit="onEdit"
        @select="onSelect"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageAddressList.vue",
  data() {
    return {
      chosenAddressId: null,
      addressList: []
    }
  },
  methods: {
    onAdd(e) {
      console.log(e)
    },
    onEdit(e) {
      this.$router.push({
        path: "/address-form",
        query: {
          id: e.id
        }
      })
    },
    onSelect(e) {
      this.$store.commit("setAddress", e)
    }
  },
  created() {
    axios.get("/api/shipping-address/").then(resp => {
      this.addressList = resp.data.results.map(value => {
        return {
          id: value.id,
          name: value.customer_name,
          tel: value.phone,
          address: value.address_detail,
        }
      })
    })
  }
}
</script>

<style scoped>

</style>
