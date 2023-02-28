<template>
  <div class="login_container">
    <div class="bbx_top">
      <span class="bbx_studio">BBX STUDIO</span>
    </div>
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/images/xiongzhang.png" alt="" />
      </div>
      <!-- 注册区 -->
      <el-form
        ref="loginformref"
        :model="loginform"
        :rules="rules"
        label-width="0px"
        class="login_form"
      >
        <el-form-item prop="user">
          <el-input
            v-model="loginform.user"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginform.password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input
            v-model="form.code"
            autocomplete="off"
            placeholder="请输入验证码"
            style="width: 150px; float: left"
          ></el-input>
          <div class="login-code" @click="refreshCode">
            <!--验证码组件-->
            <Sidentify :identifyCode="identifyCode" />
          </div>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="login">返回登录</el-button>
          <el-button type="success" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Sidentify from "../components/Sidentify.vue";
export default {
  components: {
    Sidentify,
  },

  data() {
    return {
      form: {
        code: "",
      },
      identifyCodes: "1234567890",
      identifyCode: "",

      loginform: {
        user: "",
        password: "",
      },
      ti: {
        time: 1,
      },
      username: [],
      rules: {
        user: [
          { required: true, message: "请输入注册账号", trigger: "blur" },
          {
            required: true,
            min: 2,
            max: 10,
            message: "长度在 2 到 10个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入注册密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  created() {
    //初始化验证码
    this.refreshCode();
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },

  methods: {
    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
      console.log(this.identifyCode);
    },
    async register() {
      var i;
      const { data: res } = await this.$http.get("/api/user/queryjishi");
      this.username = res.data;
      for (i = 0; i < this.username.length; i++) {
        if(this.loginform.user == this.username[i].user){
          return this.$message.error('该用户名已被注册')
        }
      }

      if (this.form.code == this.identifyCode) {
        this.$refs.loginformref.validate(async (valid) => {
          if (!valid) return console.log(false);
          const { data: res } = await this.$http.post(
            "/api/user/adduser",
            this.loginform
          );
          if (res.status !== 200) return this.$message.error("注册失败！");
          this.$message.success("注册成功");
          const { data: ress } = await this.$http.post(
            "/api/user/charu",
            this.ti
          );
          this.$router.push("/login");
        });
      } else {
        this.$message.error("验证码错误");
      }
    },
    login() {
      this.$router.push("/login").catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
body,
html {
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
  background: url("../assets/images/preview.jpg") no-repeat;
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
  /* border-radius: 3px; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avater_box {
  overflow: hidden;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  height: 130px;

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