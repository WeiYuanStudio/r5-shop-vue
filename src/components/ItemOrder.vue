<template>
  <div>
    <div class="order-info">
      <div class="order-row-1">
        <div class="order-number-mode">
          <div class="order-number">{{number}}</div>
          <div class="order-mode">{{mode}}</div>
        </div>
        <div class="order-state">{{state}}</div>
      </div>
      <div class="order-row-2">
        <div class="order-good">{{good}}</div>
      </div>
      <div class="order-row-3">
        <div class="order-time">下单时间：{{time}}</div>
        <div class="order-price">￥{{price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["orderInfo"],
  data() {
    return {
      ...this.orderInfo,
    };
  },
};
</script>

<style scoped>
.order-info {
  margin: 8px 4px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in;
}

.order-row-1 {
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  background-color: rgb(119, 201, 53);
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