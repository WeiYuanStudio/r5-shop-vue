<template>
  <div>
    <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import {areaList} from '@vant/area-data';
import {Toast} from 'vant';
import axios from "axios";

export default {
  name: "PageAddressForm",
  data() {
    return {
      areaList,
    };
  },
  methods: {
    onSave(val) {
      Toast.loading()
      const data = {
        address_code: val.areaCode,
        customer_name: val.name,
        phone: val.tel,
        address_detail: val.addressDetail,
      }

      axios.post("/api/shipping-address/", data).then(() => {
        Toast.success('保存成功')
      })
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail() {
    },
  },
}
</script>

<style scoped>

</style>
