<template>
  <div>
    <van-nav-bar
        title="地址管理"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
    />
    <AddressList/>
  </div>
</template>

<script>
import AddressList from "@/components/AddressList";

export default {
  name: "PageAddressManage.vue",
  components: {
    AddressList
  }
}
</script>

<style scoped>

</style>