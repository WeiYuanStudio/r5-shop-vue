<template>
  <div>
    <div>
      <van-nav-bar
          title="创建我的买家秀"
          left-text="返回"
          left-arrow
          @click-left="$router.back()"
      />
    </div>
    <div>
      <van-form @submit="submit">
        <van-field
            label="标题"
            name="title"
            placeholder="请输入标题"

            v-model="title"
        />
        <van-field
            label="内容"
            name="content"
            type="textarea"
            placeholder="请输入内容"

            autosize
            v-model="content"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "vant";

export default {
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    submit(val) {
      Toast.loading()
      console.log(val)
      axios.post("/api/buyer-show/", val).then(() => {
        Toast.success("提交成功")
        this.$router.push("/myShow")
      }).catch(() => {
        Toast.fail("提交失败")
      })
    }
  }
};
</script>

<style>

</style>
