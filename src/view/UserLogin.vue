<template>
  <div class="user-login-wrap">
    <van-cell-group>
      <van-field
        v-model="email"
        required
        clearable
        label="邮箱"
        right-icon="question-o"
        placeholder="请输入邮箱"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <div class="btn-wrap">
        <van-button class="login" plain type="primary" @click="login">登录</van-button>
        <van-button class="regist" plain type="primary" @click="regist">注册</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { Field, CellGroup, Toast, Button } from 'vant';
export default {
  data(){
    return {
      email:"",
      password:"",
      params:{},
    }
  },
  methods: {
    login(){
      this.params.email = this.email;
      this.params.password = this.password;
      let params = this.params;
      this.$axios.post("/user/login",params)
      .then(res => {
        this.$toast.success(res.data.msg);
        this.$router.push("home")
      })
    },
    regist(){
      this.$router.push("UserRegister");
    }
  },
  components: {
    "van-field":Field,
    "van-cell-group":CellGroup,
    "van-button":Button,
    Toast,
  }
}
</script>
<style lang="scss">
.user-login-wrap{
  .btn-wrap{
    padding: 10px 0;
    text-align: center;
    button{
      display: inline-block;
      margin:0 20px;
    }
  }
}
</style>
