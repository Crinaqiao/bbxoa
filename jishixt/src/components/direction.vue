<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>工作室介绍</el-breadcrumb-item>
      <el-breadcrumb-item>工作室方向</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <card class="card"></card> -->
    <el-card class="direction_card">
      <!-- 前端方向介绍 -->
      <el-card class="direction">
        <div class="direction_name">前端</div>
        <div class="text">
          即网页制作，主要学习
          HTMLCSS,JavaScript来实现互联网产品的用户界面交互与设计。大家看到的精美网页都要靠前端技术来实现哒~
        </div>
      </el-card>
      <!-- 后端方向介绍 -->
      <el-card class="direction2">
        <div class="direction_name2">后端</div>
        <div class="text">
          主要学习Java，PHP等语言掌握SQL语句以及一些框架主要负责网页“幕后”，与数据库进行交互，即从数据库中提取需要的数据并将其传回到前端
        </div>
      </el-card>
      <!-- UI设计方向介绍 -->
      <el-card class="direction" id="UI">
        <div class="direction_name">UI设计</div>
        <div class="text">
          主要学习PS,AI,Mockplus, Axure等设计软件，对软件
          的人机交互，界面美观进行 整体设计。对美术或者设计
          感兴趣的小伙伴不要错过！
        </div>
      </el-card>
      <!-- 硬件端方向介绍 -->
      <el-card class="direction2" id="hardware">
        <div class="direction_name2">硬件端</div>
        <div class="text">
          以C语言为基础进行 硬件开发，主要学习 单片机，嵌入式nux
          开发，嵌入式人工智 能，云开发，电路设 计与制作等。工作室
          拥有丰富的硬件资源: 51开发板，嵌入式开 发板，无人机，智能
          小车,电烙铁,各种元器件等
        </div>
      </el-card>
      <!--安卓端方向介绍 -->
      <el-card class="direction" id="Android">
        <div class="direction_name">安卓端</div>
        <div class="text">
          学习Android，微信小程序等， 以安卓手机开发为主要对象，
          对Android技术进行理解与运 用，也可以与硬件组结合，达 到软硬交互
        </div>
      </el-card>
      <!-- 数据挖掘方向介绍 -->
      <el-card class="direction2" id="data">
        <div class="direction_name2">数据挖掘</div>
        <div class="text">
          指从数据库的大量数据中进行算法处理 和数据建模，揭示出隐含的、先前未知
          的并有潜在价值的信息的非平凡过程。 主要使用编程语言 Python，主要涉及数
          据库以及数据可视化、机器学习、深度
          学习、人工智能等领域。同时，今年引进
          了算法端，对算法有兴趣的同学不要错过!!
        </div>
      </el-card>
           <!--运营端方向介绍 -->
      <el-card class="direction" id="operating">
        <div class="direction_name">运营端</div>
        <div class="text">
        管理工作室公众号，制作招新推文，不仅会熟练地操作word文档，表格等，还会完成一篇篇完美的推文和各种格式的论文。重点是，还可以掌握工作室的财政大权！！！
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-bottom: 20px;
}
.el-breadcrumb >>> .el-breadcrumb__inner {
  color: #f5d897 !important;
  font-size: 15px;
}
.el-breadcrumb >>> .el-breadcrumb__inner:hover {
  color: #fff !important;
}
.direction_card {
  position: relative;
  width: 1150px;
  height: 1350px;
  border: none;
  border-radius: 20px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0.8);
}
.direction {
  position: absolute;
  top: 70px;
  left: 70px;
  width: 450px;
  height: 260px;
  background-color: rgba(51, 51, 51);
  border: none;
  overflow: visible;
  border-radius: 20px;
}
.direction_name {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(180, 149, 92);
  text-align: center;
  line-height: 70px;
  position: absolute;
  top: -30px;
  left: -30px;
  font-weight: 700;
  color: #fff;
}
.text {
  margin-top: 35px;
  color: rgba(180, 149, 92);
  font-size: 20px;
}
.direction_name2 {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(180, 149, 92);
  text-align: center;
  line-height: 70px;
  position: absolute;
  top: -30px;
  right: -30px;
  font-weight: 700;
  color: #fff;
}
.direction2 {
  position: absolute;
  top: 200px;
  right: 70px;
  width: 450px;
  height: 260px;
  background-color: rgba(51, 51, 51);
  border: none;
  overflow: visible;
  border-radius: 20px;
}
#UI {
  top: 390px;
}
#hardware {
  top: 520px;
}
#Android {
  top: 720px;
}
#data {
    top: 850px;
}
#operating{
  top:1040px
}
</style>
