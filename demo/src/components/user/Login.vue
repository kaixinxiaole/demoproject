<template>
  <div id="building">
    <div id="poster">
      <el-form class="login-container" label-position="left" label-width="0px">
        <h3 class="login_title">
          欢迎登录
          <el-button @click="toRegister()">前往注册</el-button>
        </h3>
        <el-form-item label="">
          <el-input type="text" v-model="loginname" autocomplete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%;">
          <el-button type="primary" style="width: 100%;background: aquamarine;border: none" @click="Login">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
          password:"",
          loginname:""
      }
    },
    methods:{
      toRegister(){
        this.$router.push({path:'/Register'});
        this.$message({
          message:'请注册',
          type:'success'
        })
      },
      Login(){
        this.$router.push({path:'/Introduce',query:{id:this.loginname}});
        this.$message({
          message:'登录成功',
          type:'success'
        });
        this.$http.get()
      }


    }
}
</script>

<style scoped>
#poster{
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  margin: 0px;
  padding: 0px;
}

.login-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #cac6c6;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title{
  margin: 0px auto 40px auto;
  text-align: center;
  color: dimgrey;
}
#building{
  background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}

</style>
