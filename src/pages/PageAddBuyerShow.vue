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
      <van-cell-group>
        <van-field v-model="title" label="标题" placeholder="请输入标题" />
        <van-field v-model="content" type="textarea" autosize label="内容" placeholder="请输入内容"/>
      </van-cell-group> 
      <br/>
      <van-button type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title : '',
      content : '',
    };
  },
  methods:{
    
  }
};
</script>

<style>

</style>
