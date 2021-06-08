<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
        class="app-nav-bar"
        title="登录"
        left-arrow
        @click-left="$router.back()"
    />
    <!-- 输入表单 -->
    <van-form
        :show-error="false"
        :show-error-message="false"
        validate-first
        ref="login-form"
        @submit="onLogin"
        @failed="onFailed"
    >
      <van-cell-group>
        <!-- 用户名 -->
        <van-field
            v-model="user.username"
            clearable
            left-icon="user-o"
            name="username"
            placeholder="请输入用户名"
            :rules="formRules.username"
        />
        <!-- 密码 -->
        <van-field
            v-model="user.password"
            clearable
            left-icon="closed-eye"
            name="password"
            placeholder="请输入密码"
            :rules="formRules.password"
        >
        </van-field>
      </van-cell-group>
      <!-- 登录按钮 -->
      <div class="login-btn-warp">
        <van-button
            class="login-btn"
            type="info"
            block
        >登录
        </van-button>
      </div>
      <!-- 注册链接 -->
      <div class="lint-register-wrap">
        <a
            class="lint-register"
            v-on:click="toRegister"
        >
          还没注册？
        </a>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "vant"

export default {
  name: 'LoginIndex',
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          {required: true, message: '请输入用户名'},
          {pattern: /^[a-zA-Z0-9_]{4,16}$/, message: '用户名可以包括字母，数字，_，长度4-16'}
        ],
        password: [
          {required: true, message: '请输入密码'},
          {pattern: /^[0-9A-Za-z]{4,16}$/, message: '密码可以包含 数字和字母，长度6-20'}
        ]
      },
    }
  },
  methods: {
    //登陆成功前转圈圈
    async onLogin() {
      let success = false
      Toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      setTimeout(() => {
        if (!success) {
          Toast({message: "登录超时", position: "top"})
        }
      }, 3000)
      axios.post("/api-token-auth/", this.user).then(resp => {
        Toast.success("登陆成功")

        axios.defaults.headers.common['Authorization'] = `Token ${resp.data.token}`
        this.$store.commit('setUserToken', resp.data.token)

        this.$router.push("/me")
      }).catch(error => {
        Toast.fail('登陆失败\n用户名或密码错误')
        console.log(error)
      }).finally(() => {
        success = true
      })
    },

    onFailed(error) {
      if (error.errors[0]) {
        Toast({message: error.errors[0].message, position: 'top'})
      }
    },

    toRegister() {
      this.$router.push("/register")
    }
  }
}
</script>

<style scoped>

.login-btn-warp {
  padding: 26px 20px;
}

.login-btn {
  background-color: #62b0ff;
  border: none;
}

.lint-register-wrap{
  text-align: right;

}
.lint-register{
  font-size: 15px;
  color: #62b0ff;
  padding:0 10px ;
}
</style>