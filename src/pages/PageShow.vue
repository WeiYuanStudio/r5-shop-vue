<template>
  <div>
    <van-nav-bar
      title="买家秀"
    />
    <div v-if="buyersShowList.length>0">
      <div :key="index" v-for="(buyersShow, index) in buyersShowList">
        <ItemBuyersShow :buyersShow="buyersShow" />
      </div>
    </div>
    <div v-else>
        <van-empty description="暂无数据">
        </van-empty>
    </div>
    
    <div class="addbuyershow">
      <!-- <van-button round type="primary" color="#1989fa" @click="$router.push('/addBuyerShow')" icon="plus"></van-button> -->
      <van-icon name="add" color="#1989fa" size="65" @click="$router.push('/addBuyerShow')" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
import ItemBuyersShow from "@/components/ItemBuyersShow.vue";

export default {
  components: { ItemBuyersShow },
  data() {
    return {
      buyersShowList: [],
    };
  },
  created() {
    Toast.loading()
    axios.get("/api/buyer-show/").then((resp) => {
      this.buyersShowList = resp.data.results;
      Toast.clear()
    });
  },
};
</script>

<style>
.addbuyershow{
    position: fixed;
    right: 10px;
    bottom: 60px;
}
</style>
