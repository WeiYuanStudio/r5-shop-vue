<template>
  <div>
    <mt-cell v-for="(i,index) in orders" :key="index" :title="'单号: ' + i.id + '  名称: ' + i.name + '  地址: ' + i.address" @click.native="$router.push({
        path: '/controller/order/details',
        query: {list: i}
        })" v-show="i.state !== 2">
      {{state(i.state)}}
    </mt-cell>
  </div>
</template>

<script>

export default {
  name: "Orders",
  props: {
    orders: null
  },
  data(){
    return{
    }
  },
  created() {

  },
  methods:{
    state(state){
      if (state === 0)
        return "待配送"
      if (state === 1)
        return "配送中"
      if (state === 2)
        return "完成"
    }
  }
}
</script>

<style scoped>

</style>