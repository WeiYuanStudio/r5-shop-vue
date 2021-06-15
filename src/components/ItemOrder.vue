<template>
  <div>
    <div class="order-info">
      <div class="order-row-1">
        <div class="order-number-mode">
          <div class="order-number">ID: {{ id }}</div>
        </div>

        <div class="order-mode">{{ beautyState(state) }}</div>
      </div>
      <div class="order-row-2">
        <div class="order-good">{{ orderStringList }}</div>
      </div>
      <div class="order-row-3">
        <div class="order-time">
          下单时间：{{ new Date(submit_datetime).toLocaleString() }}
        </div>
        <div class="order-price">￥{{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props: ["orderInfo"],
  data() {
    return {
      ...this.orderInfo,
      orderExtend: [],
      orderStringList: ''
    };
  },
  methods: {
    beautyState(state) {
      const e = {
        'c': "已创建",
        'p': "已支付",
        'd': "配送中",
        'f': "已完成",
      }

      return e[state]
    }
  },
  created() {
    axios.get("/api/order-extend/", {params: {order: this.id}}).then(resp => {
      this.orderExtend = resp.data.results
      console.log(this.orderExtend)
    }).then(() => {
      this.orderExtend.forEach(item => {
        this.orderStringList += `${item.product.name} x${item.count}` + '、'
      })
    })
  }
}
</script>

<style scoped>
.order-info {
  margin: 8px 4px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.1s ease-in;
}

.order-row-1 {
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px gray;
}

.order-row-2 {
  margin: 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.order-row-3 {
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.order-number-mode {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.order-number {
  margin: 3px 0;
  font-size: 0.9em;
}

.order-mode {
  margin: 0 2px;
  padding: 0 3px;
  border-radius: 20px;
  background-color: rgba(119, 201, 53, 0.5);
}

.order-time {
  margin: 12px 0 0 0;
  font-size: 0.9em;
}

.order-price {
  color: rgb(228, 0, 0);
  font-size: 1.5em;
}
</style>