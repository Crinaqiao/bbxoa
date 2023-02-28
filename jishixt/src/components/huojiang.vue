<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>工作室成就</el-breadcrumb-item>
      <el-breadcrumb-item>获奖项目</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="2021年获奖情况" name="first">
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/huaweibei.jpg')" :preview-src-list="[require('@/assets/images/huaweibei.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2021年全国大学生物联网竞赛(华为杯)</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：全国三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch24.jpg')" :preview-src-list="[require('@/assets/images/catch24.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">第十五届中国计算机博弈锦标赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：全国一等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch20.jpg')" :preview-src-list="[require('@/assets/images/catch20.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2021年中国大学生计算机设计大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch26.jpg')" :preview-src-list="[require('@/assets/images/catch26.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">第八届“大唐杯”全国大学生移动通信5G技术大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch21.jpg')" :preview-src-list="[require('@/assets/images/catch21.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2021年全国大学生物联网竞赛(华为杯)</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch22.jpg')" :preview-src-list="[require('@/assets/images/catch22.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2021年广东省大学生计算机设计大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch23.jpg')" :preview-src-list="[require('@/assets/images/catch23.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2021年全国大学生物联网竞赛(华为杯)</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级一等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch27.jpg')" :preview-src-list="[require('@/assets/images/catch27.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等级</div>
                </div>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="2020年获奖情况" name="second">

          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch1.jpg')" :preview-src-list="[require('@/assets/images/catch1.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020中国大学生计算机设计大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：全国三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch2.jpg')" :preview-src-list="[require('@/assets/images/catch2.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020中国大学生计算机设计大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：全国三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch3.jpg')" :preview-src-list="[require('@/assets/images/catch3.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020年中国大学生博弈锦标赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：全国三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch5.jpg')" :preview-src-list="[require('@/assets/images/catch5.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020年全国大学生物联网竞赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <!-- 2020第五个获奖项目 -->
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch6.jpg')" :preview-src-list="[require('@/assets/images/catch6.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">第三届传智杯全国大学生IT技能大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch7.jpg')" :preview-src-list="[require('@/assets/images/catch7.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">第三届传智杯全国大学生IT技能大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch8.jpg')" :preview-src-list="[require('@/assets/images/catch8.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">第三届传智杯全国大学生IT技能大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch9.jpg')" :preview-src-list="[require('@/assets/images/catch9.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch10.jpg')" :preview-src-list="[require('@/assets/images/catch10.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <!-- 2020第10个获奖项目 -->
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch11.jpg')" :preview-src-list="[require('@/assets/images/catch11.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch12.png')" :preview-src-list="[require('@/assets/images/catch12.png')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch13.jpg')" :preview-src-list="[require('@/assets/images/catch13.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级二等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch14.jpg')" :preview-src-list="[require('@/assets/images/catch14.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch15.jpg')" :preview-src-list="[require('@/assets/images/catch15.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020年粤港澳大湾区IT应用系统开发大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <!-- 2020第15个获奖项目 -->
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch16.jpg')" :preview-src-list="[require('@/assets/images/catch16.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020年粤港澳大湾区IT应用系统开发大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch17.jpg')" :preview-src-list="[require('@/assets/images/catch17.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020年粤港澳大湾区IT应用系统开发大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch18.jpg')" :preview-src-list="[require('@/assets/images/catch18.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2020年粤港澳大湾区IT应用系统开发大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="2019年获奖情况" name="third">
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch4.jpg')" :preview-src-list="[require('@/assets/images/catch4.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">2019年中国大学生博弈锦标赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：全国三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="bisai">
            <el-card shadow="hover" class="elcard">
              <div class="mgb20" style="height: 300px; width: 280px">
                <div class="user-info">
                  <el-image class="table-td-thumb" :src="require('@/assets/images/catch19.jpg')" :preview-src-list="[require('@/assets/images/catch19.jpg')]"></el-image>
                  <!-- <img src="../assets/images/huaweibei.jpg" class="user-avator" alt /> -->
                </div>
                <div class="user-info-list">
                  <div class="match-name">比赛名称:</div>
                  <div class="name">蓝桥杯全国软件和信息技术专业人才大赛</div>
                </div>
                <div class="user-info-list" style="float: left">
                  <div>获奖等级：省级三等奖</div>
                </div>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.el-breadcrumb >>> .el-breadcrumb__inner {
  color: #f5d897 !important;
  font-size: 15px;
}
.el-breadcrumb >>> .el-breadcrumb__inner:hover {
  color: #fff !important;
}
.el-card {
  border-radius: 10px;
  margin-top: 20px;
  background-color: rgb(0, 0, 0, 0.3) !important;
  border: none !important;
}
.el-tabs {
  margin-left: 10px;
}
.el-card /deep/ .el-tabs__nav-scroll {
  border-bottom: 1px solid #f5d897;
}
.el-card /deep/ .el-tabs__item.is-active {
  color: #f5d897 !important;
}
.el-card /deep/ .el-tabs__active-bar {
  background-color: #f5d897 !important;
}
.el-card /deep/ #tab-first,
.el-card /deep/ #tab-second,
.el-card /deep/ #tab-third {
  color: rgb(238, 228, 228);
}
/* 导航条下方边框阴影*/
.el-card /deep/ .el-tabs__nav-wrap {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
}
.el-card >>> .el-tabs__nav-scroll {
  border-bottom: none !important;
}

.cell-class-name {
  border-color: #868686;
}
.cell-class-name {
  border-color: #868686;
}
.el-tabs {
  margin-top: 20px;
}
.user-info {
  position: relative;
  left: 15px;
  width: 280px;
  /* display: flex; */
  /* align-items: center; */
  padding-bottom: 20px;
  /* border-bottom: 2px solid #ccc; */
  margin-bottom: 20px;
  /* border-radius: 10px; */
  /* overflow: hidden; */
}
.table-td-thumb {
  /* margin-left: -140px; */
  border-radius: 10px;
  width: 280px;
  height: 170px;
  display: block;
  margin: auto;
}
/* .user-avator {
  width: 280px;
  height: 150px;
} */

.user-info-list {
  position: relative;
  font-size: px;
  font-weight: 700;
  color: rgb(211, 210, 210);
  line-height: 25px;
  cursor: pointer;
}
.user-info-list:hover {
  color: #f5d897;
}

.user-info-list span {
  margin-left: 5px;
}
.elcard {
  border-radius: 20px;
  background-color: rgb(0, 0, 0, 0.5) !important;
  border: none !important;
  width: 350px;
}
.bisai {
  display: inline-block;
  margin: 10px 15px;
}
.huojiang {
  margin-top: 10px;
}
.huojiang span:hover {
  color: #f5d897;
}
.match-name {
  position: relative;
  display: inline-block;
  width: 70px;
}
.name {
  float: right;
  width: 200px;
}
</style>