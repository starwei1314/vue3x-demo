<template>
  <div class="login-container"> 
      <h2>用户登录</h2>
    <el-form ref="form"  label-width="80px">
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
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>
<style lang="less">
  .login-container{

  }
</style>

