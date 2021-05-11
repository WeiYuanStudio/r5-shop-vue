<template>
  <div>
    <div class="login_form" v-show="!$store.state.isLogin">
      <label>
        <input type="text" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="username">
      </label>
      <label>
        <input type="text" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="password">
      </label>
      <button class="login_btn" @click="login" type="button">登录</button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login">后台</span>
        <span style="color: #000099" @click="register">注册</span>
      </div>
    </div>
    <div class="profile_form" v-show="$store.state.isLogin">
      <button class="logout_btn" @click="logout" type="button">退出</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {Toast} from "mint-ui";

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {},
  mounted() {
    axios.get("/test/isLogin")
        .then((resp) => {
          if (resp.data.code === 400)
            this.$store.state.isLogin = false
          else
            this.$store.state.isLogin = true
        })
        .catch(() => {
          this.$store.state.isLogin = false
        })
  },
  methods: {
    login() {
      let data = new FormData();
      data.append("username", this.username)
      data.append("password", this.password)
      axios.post("/user/login", data)
          .then(resp => {
            console.log(resp);
            this.$store.commit("changeLogin", true);
            Toast({
              message: "登录成功",
              position: "bottom",
              duration: 2000,
            });
          }).catch(() => {
        Toast({
          message: "登录失败",
          position: "bottom",
          duration: 2000,
        });
      })
    },
    register() {
      let data = new FormData();
      data.append("username", this.username)
      data.append("password", this.password)
      axios.post("/user/add", data)
          .then(resp => {
            console.log(resp);
            Toast({
              message: "注册成功",
              position: "bottom",
              duration: 2000,
            });
          }).catch(() => {
        Toast({
          message: "注册失败",
          position: "bottom",
          duration: 2000,
        });
      })

    },
    logout() {
      axios.post("/user/logout").catch(() => {
        console.log("logout");
      })
      axios.get("/test/isLogin")
          .then((resp) => {
                if (resp.data.code === 400) {
                  this.$store.commit("changeLogin", false);
                  Toast({
                    message: "退出成功",
                    position: "bottom",
                    duration: 2000,
                  });
                }
              }
          )
    }
  }
};
</script>

<style scoped>
.login_form {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}

.qxs-ic_user {
  background-size: 13px 15px;
  background-position: 3%;
}

.qxs-ic_password {
  background-size: 13px 15px;
  background-position: 3%;
  margin-bottom: 20px;
  margin-top: 20px;
}

.login_btn {
  width: 100%;
  font-size: 16px;
}
</style>
