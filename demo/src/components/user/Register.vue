<template>
  <div id="building">
    <div id="poster">
      <el-form class="register-container" label-position="left" label-width="0px" :rules="rules" :model="ruleForm" ref="ruleForm">
        <h3 class="register_title">
          欢迎注册
          <el-button v-on:click="toLogin()">前往登录</el-button>
        </h3>

        <el-form-item label="" prop="LoginName">
          <el-input type="text"
                    v-model="ruleForm.LoginName"
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-user-solid"
                    autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item label="" prop="password">
          <el-input type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-lock"></el-input>
        </el-form-item>


        <el-form-item label="" prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    placeholder="确认密码"
                    prefix-icon="el-icon-lock"></el-input>
        </el-form-item>


        <el-form-item style="width: 100%;">
          <el-button type="primary"
                     style="width:100%;background: aquamarine;border: none"
                     @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>

<script>
export default {
  name: "Register",
  data() {

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: '',
        checkPass: '',
        LoginName: ''
      },
      rules: {
        LoginName: [
          { require:true,message:"请输入你的名称",  trigger: 'blur' },
          {min:6,max:18,message:"长度6到18个字符",trigger: 'blur'}
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]

      }
    };
  },
  methods: {
    toLogin(){
      this.$router.push(({path:'/Login'}))
    },
    submitForm(ruleForm) {
      this.$router.push({path:'/Login'});
      this.$message({
        message:'注册成功,去登录吧',
        type:'success'
      })
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
.register-container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #cac6c6;
  box-shadow: 0 0 25px #cac6c6;
}
.register_title{
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
