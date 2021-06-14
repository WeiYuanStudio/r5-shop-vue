<template>
  <div class="card">
    <div class="announcement-title">{{ announcement.title }}</div>
    <div class="announcement-time">{{ beautyTime(announcement.datetime) }}</div>
    <div class="announcement-content">{{ announcement.content }}</div>
  </div>
</template>

<script>
export default {
  props: ["announcement"],
  methods: {
    beautyTime(time) {
      return `${new Date(time).toLocaleDateString()} ${new Date(
        time
      ).toLocaleTimeString()}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.card {
  margin: 10px 10px;
  padding: 20px 30px;
  display: flex;
  flex-flow: column;
  text-align: left;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.1s ease-in;
}

.announcement-title {
  font-weight: bolder;
  font: 2em;
}

.announcement-time {
  font-weight: 100;
  font-size: 0.8em;
}
</style>
