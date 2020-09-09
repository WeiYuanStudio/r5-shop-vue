<template>
  <div>
    <div id="header-bar-bg">
      <div v-if="status">
        <div id="online-status">在线中...</div>
      </div>
      <div v-else>
        <div id="offline-status">离线中...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
    };
  },
};
</script>

<style>
#header-bar-bg {
  background-color: #FFFFFF;
}

#online-status {
  background-color: rgba(57,197,187, 0.4);
}

#offline-status {
  background-color:rgba(255, 0, 34, 0.4);
}
</style>
