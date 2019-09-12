<template>
  <div class="user-login-wrap">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="email"
        required
        clearable
        label="邮箱"
        placeholder="请输入邮箱"
      />
      <van-field
        v-model="tel"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <div class="btn-wrap">
        <van-button class="login" plain type="primary" @click="login">确认</van-button>
        <van-button class="regist" plain type="primary" @click="cancel">取消</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { Field, CellGroup, Toast, Button } from 'vant';
export default {
  data(){
    return {
      username:"",
      email:"",
      tel:"",
      password:"",
      params:{},
    }
  },
  methods: {
    login(){
      this.params.username = this.username;
      this.params.email = this.email;
      this.params.tel = this.tel;
      this.params.password = this.password;
      let params = this.params;
      this.$axios.post("/user/reg",params)
      .then(res => {
        console.log(res);
        this.$toast.success(res.data.msg);
      })
    },
    cancel(){
      this.$router.push("home");
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
