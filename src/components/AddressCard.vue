<template>
  <div class="address-card">
    <div class="address-card-left">
      <div class="left-top">
        <div class="user-name">{{name}}</div>
        <div class="user-phone">{{phone}}</div>
      </div>
      <div class="left-bottom-address">{{address}}</div>
    </div>
    <div class="address-card-right">
      <van-icon name="edit" size="25px"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "AddressCard",
  data() {
    return {
      name:"neru",
      phone:"111111111",
      address:"aaaaaaaaa"
    }
  }
}
</script>

<style scoped>
.address-card{
  margin: 5px;
  background-color: white;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.address-card-left{
  margin: 5px 10px;
  display: flex;
flex-flow: column;
}
.left-top{
  margin: 5px;
  display: flex;
  flex-flow: row;
}
.user-name{
  padding: 0 5px;
  text-align: left;
}
.user-phone{
  padding: 0 5px;
  text-align: left;
}
.left-bottom-address{
  margin: 5px 5px;
  padding: 0 5px;
  color: #979797;
  text-align: left;
}
.address-card-right{
  align-content: flex-end;
  margin: 10px;
  padding: 7px;

}
</style>