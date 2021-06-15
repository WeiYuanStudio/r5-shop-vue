<template>
  <div class="my-container">
    <!-- 已登录：用户信息 -->
    <div class="user-info-wrap" v-if="$store.getters.isLogin">
      <div class="base-info-wrap">
        <div class="avatar-title-wrap" @click="$router.push({
          name: 'user',
          params: {
            userId: user.id
          }
        })">
          <van-image
              class="avatar"
              round
              fit="cover"
              src=""
          />
          <div class="title">欢迎回来，{{ user.username }}</div>
        </div>
        <van-button
            round
            size="mini"
            @click="$router.push('/user/profile')"
        >编辑资料
        </van-button>
      </div>
      <div id="profile">
        <div>邮箱: {{ user.email }}</div>
        <div>注册时间: {{ new Date(user.date_joined).toLocaleDateString() }}</div>
      </div>
    </div>
    <!-- /已登录：用户信息 -->

    <!-- 未登录 -->
    <div class="not-login" v-else>
      <div
          class="mobile"
          @click="$router.push('/login')"
      ></div>
      <div class="text">点击登录</div>
    </div>
    <!-- /未登录 -->

    <!-- 其它 -->
    <van-grid clickable :column-num="2">
      <van-grid-item text="收藏" to="/my-article/collect">
        <van-icon slot="icon" name="star-o" color="#eb5253"/>
      </van-grid-item>
      <van-grid-item text="历史" to="/my-article/history">
        <van-icon slot="icon" name="browsing-history-o" color="#ffa023"/>
      </van-grid-item>
    </van-grid>

    <van-cell-group :border="true">
      <van-cell title="公告中心" is-link @click="$router.push('/announcement')"/>
      <van-cell title="地址管理" is-link @click="$router.push('/address-manage')" v-if="$store.getters.isLogin"/>
    </van-cell-group>

    <van-cell-group v-if="$store.getters.isLogin">
      <van-cell
          style="text-align: center;"
          title="退出登录"
          clickable
          @click="onLogout"
      />
    </van-cell-group>
    <!-- /其它 -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'MyPage',
  data() {
    return {
      user: {}
    }
  },
  created() {
    if (this.$store.getters.isLogin) {
      this.loadUser()
    }
  },
  activated() {
    if (this.$store.getters.isLogin) {
      this.loadUser()
    }
  },
  methods: {
    onLogout() {
      this.$dialog.confirm({
        title: '退户确认',
        message: '退出当前账号'
      }).then(() => {
        this.$store.commit('setUserToken', "")
      })
    },
    async loadUser() {
      axios.get("/api/users/get_self_user_info/").then(resp => {
        this.user = resp.data
      })
    }
  },
}
</script>

<style lang="less" scoped>
#profile {
  margin: 10px 80px;
}

.my-container {
  .user-info-wrap {
    background: rgba(57, 197, 187, 0.3);
    height: 182px;
    box-sizing: border-box;
    background-size: cover;
    padding: 40px 20px;
    font-size: 15px;
    color: #000;

    .base-info-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .avatar-title-wrap {
        display: flex;
        align-items: center;

        .avatar {
          margin-right: 15px;
          width: 66px;
          height: 66px;
          padding: 2px;
          background: rgba(57, 197, 187, 0.3);
        }
      }
    }

    .data-info {
      ::v-deep .van-grid-item__content {
        background: none;
      }
    }
  }

  .not-login {
    background: rgba(57, 197, 187, 0.3);
    height: 182px;
    box-sizing: border-box;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .mobile {
      background: rgba(57, 197, 187, 0.3);
      background-size: cover;
      width: 66px;
      height: 66px;
      margin-bottom: 10px;
    }

    .text {
      font-size: 14px;
      color: #000;
    }
  }

  > .van-cell-group {
    margin-top: 10px;
  }
}
</style>
