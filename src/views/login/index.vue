<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名:">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      
      //点击提交时触发//获取用户填写的信息
      let { username, password } = this; //解构赋值
      //发送登录请求,并且效验用户信息是否为空
      if (username.trim().length===0 || password.trim().length === 0) {
       return  this.$message({
          showClose: true,
          message: "用户登录信息不能为空",
          type: "error"
        })  
      }
      //通过验证提交用户信息
      this.$http.post("/users/login",{
        username,
        password
      }).then(res=>{
        // console.dir(res.data.data.succMsg)
         this.$message({
           showClose:true,
            type: "success",
            message: res.data.succMsg
          })
          //将用户的token保存到localStorge中
          localStorage.setItem("token",JSON.stringify(res.data.data.token))
          localStorage.setItem("useInfo",JSON.stringify(res.data.data))
          this.$router.push('/home')

      })
    }
  }
};
</script>
<style lang="less">
.login-container {
  width: 400px;
  margin: auto;
  text-align: center;
  h2 {
    color: skyblue;
  }
}
</style>

