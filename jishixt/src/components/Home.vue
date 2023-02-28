<template>
  <div
    style="display: flex; height: 100%"
    :class="divs[activeIndex]"
    class="test"
  >
    <el-container class="home_container">
      <!-- 头部 -->

      <el-header>
        <div>
          <img
            src="../assets/images/xiongzhang.png"
            alt=""
            @click="logglecollapse"
            class="loggle"
          />
          <span>笨笨熊工作室管理系统</span>
        </div>
        <div>
          <div style="margin-top: 8px; margin-right: 15px">
            <el-tooltip
              class="item"
              effect="dark"
              content="切换上一张壁纸"
              placement="bottom"
            >
              <el-button
                size="small"
                icon="el-icon-back"
                circle
                plain
                type="info"
                @click="handleBg(-1)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="切换下一张壁纸"
              placement="bottom"
            >
              <el-button
                size="small"
                icon="el-icon-right"
                circle
                plain
                type="info"
                @click="handleBg(1)"
              ></el-button>
            </el-tooltip>
          </div>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              设置<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus" @click.native="set"
                >个人设置</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-check" @click.native="exit"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 侧边栏 -->

      <el-aside
        :width="iscollapse ? '64px' : '200px'"
        style="transition: all 1s"
        class="sidebar"
      >
        <el-menu
          class="sidebar-el-menu"
          :collapse="iscollapse"
          :collapse-transition="false"
          background-color="rgba(256,256,256,.0)"
          text-color="#fff"
          active-text-color="#F5D897"
          unique-opened
          router
        >
          <template v-for="item in menulist">
            <template v-if="item.subs">
              <el-submenu :index="item.index" :key="item.index">
                <template #title>
                  <i :class="item.icon"></i>
                  <span>{{ item.title }}</span>
                </template>
                <template v-for="subItem in item.subs">
                  <el-submenu
                    v-if="subItem.subs"
                    :index="subItem.index"
                    :key="subItem.index"
                  >
                    <template #title
                      ><i :class="subItem.icon"></i
                      ><span>{{ subItem.title }}</span></template
                    >
                    <el-menu-item
                      v-for="(threeItem, i) in subItem.subs"
                      :key="i"
                      :index="threeItem.index"
                      ><span>{{ subItem.title }}</span></el-menu-item
                    >
                  </el-submenu>
                  <el-menu-item
                    v-else
                    :index="subItem.index"
                    :key="subItem.index"
                    ><span>{{ subItem.title }}</span></el-menu-item
                  >
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.index" :key="item.index">
                <i :class="item.icon"></i>

                <template #title>
                  <span>{{ item.title }}</span>
                </template>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <!-- 主要区域部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import global from "../global.js";
import $ from "jquery";
export default {
  data() {
    return {
      //左侧菜单数据
      menulist: [
        {
          icon: "el-icon-view",
          index: "dashboard",
          title: "打卡时长",
        },
        {
          icon: "el-icon-user-solid",
          index: "users",
          title: "成员信息",
        },
        {
          icon: "el-icon-document",
          index: "huojiang",
          title: "获奖项目",
        },
        {
          icon: "el-icon-present",
          index: "3",
          title: "工作室介绍",
          subs: [
            {
              index: "introduction",
              title: "工作室简介",
            },
            {
              index: "direction",
              title: "工作室方向",
            },
          ],
        },
        {
          icon: "el-icon-pie-chart",
          index: "lunzhibiao",
          title: "轮值表",
        },
      ],
      iscollapse: false,
      timer: null,
      divs: [
        "test1",
        "test3",
        "test5",
        "test6",
        "test7",
        "test8",
        "test10",
        "test13",
        "test14",
        "test15",
        "test16",
        "test17",
        "test18",
      ],
      activeIndex: Math.floor(Math.random() * 100),
      lock: false,
      status1: "",
      status2: "离线",
      _beforeUnload_time:'',
      _gap_time:'',
    };
  },
  created() {
    this.status1 = '在线';
    this.updatestatus();
  },
  mounted() {
    //绑定页面退出事件
    window.onbeforeunload= (e)=>{
      e = e || window.event;
      if (e) {
        e.returnValue = '关闭提示';
      }
      this.status1 = "离线";
      this.updatestatus();//调用自己的方法
      // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      return '关闭提示';
    };
  },
  methods: {
    set() {
      this.$router.push("/dashboard");
      console.log(123);
    },
    exit() {
      this.status1 = "离线";
      this.updatestatus();
      window.sessionStorage.clear();
      this.$router.push("/");
    },
    logglecollapse() {
      this.iscollapse = !this.iscollapse;
    },
    handleBg(n) {
      if (n < 0) {
        this.activeIndex =
          (this.activeIndex + this.divs.length - 1) % this.divs.length;
      } else {
        this.activeIndex = (this.activeIndex + 1) % this.divs.length;
      }
    },
    async updatestatus() {
      var user = window.sessionStorage.getItem('user')
      console.log(global.flag);
      console.log(this.status1);
      const { data: res } = await this.$http.post("/api/user/status", {
        user: user,
        status1: this.status1,
      });
      // console.log(res);
      if (res.status !== 200) return this.$message.error("更新失败");
      // } else {
      //   this.$message.success('更新成功');
      // }
    },
  },
  destroyed() {
  },
};
</script>


<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: url("../img/22.jpg") no-repeat;
  background-size: 100% 100%;
}

.el-aside span {
  font-size: 16px;
}
.home_container {
  position: relative;
  height: 100%;
  width: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
  align-items: center;
}
.el-header div {
  display: flex;
  align-items: center;
}

.el-header div span {
  padding: 0 10px;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}

/* .el-aside span {
  color: #fff;
} */
.el-aside template {
  color: #fff;
}
.sidebar > ul {
  height: 100%;
}
.el-aside .el-menu {
  border-right: none;
}

body > .el-container {
  margin-bottom: 40px;
}
.loggle {
  cursor: pointer;
  width: 55px;
  height: 55px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #e9eef3;
}
.el-icon-arrow-down {
  font-size: 12px;
}

/* .el-dropdown {
  margin-right: 100px;
} */
.el-aside {
  position: absolute;
  /* display: inline-block;
  position: absolute; */
  left: 0;
  top: 70px;
  bottom: 0;
}
.el-main {
  margin-left: 200px;
  /* position: absolute;
  top: 70px;
  
  margin-top: 5px; */
}
.test {
  background-position: center;
  background-size: 100% 100%;
  position: absolute;
  height: 100%;
  width: 100%;
}

.test1 {
  background-image: url("../img/wallhaven-01x839_1920x1080.png");
}

.test3 {
  background-image: url("../img/wallhaven-43qm36_1920x1080.png");
}

.test5 {
  background-image: url("../img/wallhaven-43lwg3_1920x1080.png");
}

.test6 {
  background-image: url("../img/wallhaven-d52jqg_1920x1080.png");
}

.test7 {
  background-image: url("../img/wallhaven-d57w33_1920x1080.png");
}

.test8 {
  background-image: url("../img/wallhaven-nmmvvk_1920x1080.png");
}

.test9 {
  background-image: url("../img/wallhaven-qdlzj7_1920x1080.png");
}

.test10 {
  background-image: url("../img/wallhaven-zx22jg_1920x1080.png");
}

/* .test11 {
  background-image: url('../img/5.jpg');
} */
.test12 {
  background-image: url("../img/7.jpg");
}
.test13 {
  background-image: url("../img/8.jpg");
}
.test14 {
  background-image: url("../img/17.jpg");
}
.test15 {
  background-image: url("../img/19.jpg");
}
.test16 {
  background-image: url("../img/20.jpg");
}
.test17 {
  background-image: url("../img/22.jpg");
}
.test18 {
  background-image: url("../img/27.jpg");
}
/* .test20 {
  background-image: url('../img/zytd.jpg');
} */
/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>