<template>
  <div>
    <mt-cell v-for="(i, index) in users" :key="index" :title="i.username">
      {{translate(i.isAdmin)}}
      <mt-button @click="delUser(i.id)">删除</mt-button>
    </mt-cell>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "mint-ui";

export default {
  name: "Users",
  data(){
    return{
      users: []
    }
  },
  created() {
    axios.get("/controller/users").then(resp => {
      this.users = JSON.parse(resp.data.data)
    })
  },
  methods: {
    translate(i){
      if (i === 0)
        return "用户"
      if (i === 1)
        return "管理员"
    },
    delUser(id){
      axios.delete("/controller/user/" + id).then(resp => {
        Toast({
          message: resp.data.message,
          position: "bottom",
          duration: 2000,
        });
      })
    }
  }
}
</script>

<style scoped>

</style>