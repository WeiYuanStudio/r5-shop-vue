<template>
  <div style="background-color: #FFFFFF">
    <div v-if="status" class="online-status">
      <div style="background-color: rgba(57,197,187, 0.4)">在线中...</div>
    </div>
    <div v-else class="offline-status">
      <div>离线中...</div>
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
</style>
