<template>
 <div>
   <van-nav-bar
       title="我的买家秀"
       left-arrow
       @click-left="$router.push('/buyersShow')"
       right-text="新增"
       @click-right="$router.push('/addBuyerShow')"
   />
   <div v-if="buyersShowList.length>0">
     <div :key="index" v-for="(buyersShow, index) in buyersShowList">
       <ItemBuyersShow :buyersShow="buyersShow" :deletable="true" @refresh="onRefresh" />
     </div>
   </div>
   <div v-else>
     <van-empty description="暂无数据">
     </van-empty>
   </div>

 </div>
</template>

<script>
import {Toast} from "vant";
import axios from "axios";
import ItemBuyersShow from "../components/ItemBuyersShow";

export default {
  name: "Myshow",
  components: { ItemBuyersShow },
  data() {
    return {
      user: {},
      buyersShowList: [],
    };
  },
  methods: {
    onRefresh() {
      Toast.loading()
      axios.get("/api/users/get_self_user_info/").then(resp => {
        this.user = resp.data
        // axios.get("/api/buyer-show/?customer="+ this.user.id).then((resp) => {
        //   this.buyersShowList = resp.data.results;
        //   Toast.clear()
        // });

        axios.get("/api/buyer-show/", {params: {customer: this.user.id}}).then((resp) => {
          this.buyersShowList = resp.data.results;
          Toast.clear()
        });
      })
    }
  },
  created() {
    this.onRefresh()
  },
}
</script>

<style scoped>

</style>