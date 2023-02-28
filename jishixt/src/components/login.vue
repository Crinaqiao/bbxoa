<template>
  <div class="login_container">
    <div class="bbx_top">
      <span class="bbx_studio">BBX STUDIO</span>
    </div>
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/images/xiongzhang.png" alt="">
      </div>
      <!-- 登录区 -->
      <el-form ref="loginformref" :model="loginform" :rules="rules" label-width="0px" class="login_form">
        <el-form-item prop="user">
          <el-input v-model="loginform.user" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginform.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="success" @click="register">注册</el-button>
          <!-- <el-button type="info" @click="reseltloginform">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
import global from '../global.js';
export default {
  data() {
    return {
      loginform: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { required: true, min: 2, max: 10, message: '长度在 2 到 10个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    };
  },

  mounted() {},
  methods: {
    // 重置账号跟密码
    // reseltloginform() {
    //   this.$refs.loginformref.resetFields();
    // },
    login() {
      //对表单进行校验，需要获得表单的引用对象，validate接收一个回调函数，因为返回的数值是promise，所以用async和await进行优化
      this.$refs.loginformref.validate(async valid => {
        if (!valid) return console.log(false);
        const { data: res } = await this.$http.post('/api/login', this.loginform);
        if (res.status !== 200) return this.$message.error('登录失败！');
        else {
          global.flag = this.loginform.user;
          window.sessionStorage.setItem('user',this.loginform.user)
          // window.sessionStorage.setItem('status', this.status);
          window.sessionStorage.setItem('token', res.data.token);
          window.sessionStorage.setItem('id', res.data.user_id);
          this.$message.success('登录成功');
          this.$router.push('/Home');
          this.status = '在线';
          this.updatestatus();
        }
      });
      // global.admin_name =this.loginform.user
      // sessionStorage.setItem("key", this.loginform.user);
    },
    register() {
      this.$router.push('/register').catch(err => console.log(err));
    },
    async updatestatus() {
      // console.log(global.flag);
      // console.log(this.status);
      const { data: res } = await this.$http.post('/api/user/status', {
        user: global.flag,
        status1: this.status
      });
      // console.log(res);
      if (res.status !== 200) return this.$message.error('更新失败');
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.bbx_top {
  height: 200px;
  width: 100%;
  /* background-color: #5a91cd; */
}
.bbx_studio {
  font-size: 60px;
  font-weight: 800;
  line-height: 110px;
  padding: 0 90px;
  color: rgba(46, 58, 31, 1);
}
.login_container {
  background: url('../assets/images/preview.jpg') no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;
}
.login_box {
  position: absolute;
  width: 450px;
  height: 300px;
  background-color: rgba(184, 178, 178, 0.3);
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avater_box {
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  height: 130px;
  /* border: 1px solid #eee; */
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0);
}
.avater_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>