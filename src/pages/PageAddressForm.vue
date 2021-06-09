<template>
  <div>
    <van-nav-bar
        :title="'地址' + (editId === undefined ? '增加' : '编辑')"
        left-text="返回"
        left-arrow
        @click-left="$router.back()"
    />
    <van-address-edit
        :area-list="areaList"
        :address-info="editData"
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
      editId: undefined,
      editData: {} //编辑数据
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

      if (this.editId === undefined) {
        axios.post("/api/shipping-address/", data).then(() => {
          Toast.success('保存成功')
        })
      } else {
        axios.put(`/api/shipping-address/${this.editId}/`, data).then(() => {
          Toast.success('更新成功')
          this.$router.back()
        })
      }
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail() {
    },
  },
  created() {
    this.editId = this.$route.query.id
    if (this.editId) {
      axios.get(`/api/shipping-address/${this.editId}/`).then(res => {
        const source = res.data
        this.editData = {
          id: source.id,
          areaCode: source.address_code,
          name: source.customer_name,
          tel: source.phone,
          addressDetail: source.address_detail
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
