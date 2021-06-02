<template>
  <div class="register-container">
    <!-- 导航栏 -->
    <van-nav-bar
        class="app-nav-bar"
        title="Register"
        left-arrow
        @click-left="$router.back()"
    />
    <!-- 输入表单 -->
    <van-form
        validate-first
        ref="register-form"
        @submit="onRegister"
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
        <!-- 邮箱 -->
        <van-field
            v-model="user.email"
            clearable
            left-icon="envelop-o"
            name="email"
            placeholder="请输入邮箱"
            :rules="formRules.email"
        >
        </van-field>
      </van-cell-group>
      <!-- 注册按钮 -->
      <div class="register-btn-warp">
        <van-button
            class="register-btn"
            type="info"
            block
        >注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>


export default {
  name: 'LoginIndex',
  data() {
    return {
      user: {
        username: '',
        password: '',
        email:''
      },
      formRules: {
        username: [
          {required: true, message: '请输入用户名'},
          {pattern: /^[a-zA-Z0-9_]{4,16}$/, message: '用户名可以包括字母，数字，_，长度4-16'}
        ],
        password: [
          {required: true, message: '请输入密码'},
          {pattern: /^[0-9A-Za-z]{4,16}$/, message: '密码可以包含 数字和字母，长度6-20'}
        ],
        email: [
          {required: true, message: '请输入邮箱'},
          {pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式不正确'}
        ]
      },
    }
  },
  methods: {

    onRegister() {
    },

    onFailed() {

    },
  }
}
</script>

<style scoped>

.register-btn-warp {
  padding: 26px 20px;
}

.register-btn {
  background-color: #62b0ff;
  border: none;
}

</style>