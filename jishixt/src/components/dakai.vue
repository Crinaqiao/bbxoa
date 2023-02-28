<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>打卡时长</el-breadcrumb-item>
      <el-breadcrumb-item>打卡列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <h3 style="color:#fff"><span>{{username}}本周签到时间为:</span><span>{{day_hour}}</span>小时<span>{{day_minute}}</span>分钟<span>{{second}}秒</span></h3> -->
    <!-- <h3 style="color:rgb(255, 255, 255,0.8)">用户名：{{username}} </h3>
    <h3 style="color:rgb(255, 255, 255,0.8)">本周签到时间为：<span>{{day_hour}}</span>小时<span>{{day_minute}}</span>分钟<span>{{second}}秒</span></h3> -->
       
    <div class="jishi">
      <div class="shichang">
        <img src="../assets/images/shiz.png" alt="" />{{ username }} 本 周 打 卡 时 长 为：
      </div>
      <ul>
        <li class="time">{{ day_hour }}</li>
        <li class="time">{{ day_minute }}</li>
        <li class="time">{{ second }}</li>
      </ul>
    </div>

    <!-- 卡片视图 -->
    <el-card class="table-wrapper">
      <!-- 列表区域 -->
      <el-table style="width: 100%" :data="userlist" stripe boder>
        <!-- 第一行是索引列 -->
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="user" label="user"> </el-table-column>
        <el-table-column
          prop="day_all_minutes"
          label="week_all_minutes"
          :formatter="stateFormat"
        >
          <!-- <span>{{Math.floor(day_all_minutes/60)}}时</span> -->
        </el-table-column>
        <el-table-column
          prop="day_all_minutes"
          label="打卡情况"
          :formatter="stateFormat"
        >
          <template v-slot="scope">
            <el-progress
              :text-inside="true"
              :stroke-width="22"
              :percentage="
                Math.floor((scope.row.day_all_minutes / 900) * 100) >= 100
                  ? 100
                  : Math.floor((scope.row.day_all_minutes / 900) * 100)
              "
              :status="
                scope.row.status1 === '在线'
                  ? 'success'
                  : scope.row.status1 === '离线'
                  ? 'warning'
                  : ''
              "
            ></el-progress>
          </template>
        </el-table-column>
        <el-table-column prop="day_all_minutes" label="状态" align="center">
          <!-- 用作用域插槽scope.row获取数据-->
          <template v-slot="scope">
            <el-tag
              :type="
                scope.row.status1 === '在线'
                  ? 'success'
                  : scope.row.status1 === '离线'
                  ? 'danger'
                  : ''
              "
              >{{ scope.row.status1 }}</el-tag
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="qureyinfo.pageIndex"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="qureyinfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import global from "../global";
export default {
  data() {
    return {
      qureyinfo: {
        // query可输入列表关键字搜索
        query: "",
        pageIndex: 1,
        pageSize: 30,
      },
      userlist: [],
      total: 0,
      username: "",
      day_hour: "00",
      day_minute: "00",
      second: "00",
      day_all_minutes: 0,
      i: global.count,
      intervalid: "",
      temp: [],
    };
  },
  created() {
    clearInterval(global.intervalid);
    this.intime();
    this.process();
    //当页面加载完时进行计时
  },
  mounted() {
    var t = new Date();
    console.log(t);
    global.intervalid = setInterval(this.timing, 1000);
    this.getuserlist();
  },
  methods: {
    stateFormat(row) {
      var hour = Math.floor(this.format(row.day_all_minutes / 60));
      var minute = Math.floor(this.format(row.day_all_minutes % 60));
      // var second = Math.floor(row.day_all_minutes / 60 / 60);
      return hour + "  时  " + minute + "  分  ";
    },
    async getuserlist() {
      const { data: res } = await this.$http.get("/api/user/queryjishi", {
        params: this.qureyinfo,
      });
      if (res.status !== 200) {
        return this.$message.error("获取用户列表失败");
      }
      // console.log(res.data[1].status1);
      this.userlist = res.data;
      this.total = res.total;
      // console.log(this.userlist);
      // console.log(this.userlist.length)
      //在线用户在用户列表前排显示
      var i,
        j,
        m = 0,
        temp;
      for (i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].status1 == "在线") {
          this.userlist.splice(0, 0, this.userlist[i]);
          this.userlist.splice(i + 1, 1);
          m++;
        }
      }
      //用户打卡时长排序(在线)
      for (i = 0; i < m - 1; i++) {
        for (j = 0; j < m - 1 -i; j++) {
          if (
            this.userlist[j].day_all_minutes <
            this.userlist[j + 1].day_all_minutes
          ) {
            temp = this.userlist[j];
            this.userlist[j] =
              this.userlist[j + 1];
            this.userlist[j + 1] = temp;
          }
        }
      }
      //用户打卡时长排序(离线)
      for (i = m; i < this.userlist.length- 1; i++) {
        for (j = m; j < this.userlist.length - 1 ; j++) {
          if (
            this.userlist[j].day_all_minutes <
            this.userlist[j + 1].day_all_minutes
          ) {
            temp = this.userlist[j];
            this.userlist[j] =
              this.userlist[j + 1];
            this.userlist[j + 1] = temp;
          }
        }
      }
    },
    handleSizeChange(newSize) {
      this.qureyinfo.pageSize = newSize;
      this.getuserlist();
    },
    handleCurrentChange(newPage) {
      this.qureyinfo.pageIndex = newPage;
      this.getuserlist();
    },
    async intime() {
      var id = window.sessionStorage.getItem("id");
      const { data: res } = await this.$http.post("/api/user/queryname", {
        id,
      });
      // console.log(res);
      if (res.status !== 200) {
        this.$message.error("查询用户名失败");
      } else {
        // console.log(res.data[0].day_all_minutes);
        this.username = res.data[0].user;
        this.day_all_minutes = res.data[0].day_all_minutes;
      }
    },
    process() {
      //刷新页面时,初始化的时间从后台提取
      // day_all_minutes = this.day_all_minutes;
      // //初始化的秒数            i = ${seconds};
      // var minutes = Math.floor(i / 60);
      // //更新当天和当周的时间
      // day_all_minutes = Number(day_all_minutes) + Number(minutes);
      this.formatTime(this.day_all_minutes, Math.floor(this.i % 60));
    },
    format(value) {
      if (parseInt(value) < 10) {
        return "0" + value;
      } else return value;
    },
    formatTime(day_all_minutes, second) {
      var hour = Math.floor(day_all_minutes / 60);
      var minute = day_all_minutes % 60;
      // var second= Math.floor(day_all_minutes / 60 / 60);
      this.setValue(hour, minute, second);
    },
    setValue(day_hour, day_minute, second) {
      this.day_hour = this.format(day_hour);
      this.day_minute = this.format(day_minute);
      this.second = this.format(second);
    },
    setTimeByDay(day_all_minutes) {
      this.formatTime(day_all_minutes, Math.floor(this.i % 60));
    },
    async updateDB() {
      const { data: res } = await this.$http.post("/api/user/charu", {
        user: this.username,
        day_all_minutes: this.day_all_minutes,
      });
      // console.log(res);
      if (res.status !== 200) {
        return this.$message.error("更新失败");
      } else {
        // this.$message.success('更新成功');
        this.getuserlist();
        // console.log(res);
        // this.setTimeByDay(res.data[0].day_all_minutes);
      }
    },
    timing() {
      global.count++;
      this.i = global.count;
      // console.log(this.i)
      if (Math.floor(this.i % 60) === 0) {
        //当天时间加一分钟
        this.day_all_minutes++;
        this.updateDB();
      }
      this.formatTime(this.day_all_minutes, Math.floor(this.i % 60));
    },
  },
};
</script>

<style scoped>
.jishi {
  position: relative;
  top: 10px;
  width: 500px;
  height: 80px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
}

.shichang {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 18px;
  color: rgba(20, 20, 20, 0.7);
  /* background-color: pink; */
}
.shichang img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}
.jishi ul {
  position: absolute;
  right: 30px;
  top: 10px;
  margin-top: 8px;
}
.time {
  float: left;
  list-style: none;
  width: 40px;
  height: 40px;
  color: #fff;
  margin-right: 10px;
  line-height: 40px;
  text-align: center;
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  border-bottom: 2px solid grey;
  border-right: 2px solid grey;
  border-radius: 10px;
  background-color: rgba(29, 39, 50, 0.5);
}

.el-card {
  margin-top: 20px;
  border: 0 !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.el-breadcrumb >>> .el-breadcrumb__inner {
  color: #f5d897 !important;
  font-size: 15px;
}
.el-breadcrumb >>> .el-breadcrumb__inner:hover {
  color: #fff !important;
}
.el-table {
  margin-top: 15px;
}
.el-table::before {
  background-color: transparent;
}
.el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
.el-table >>> tbody tr:hover > td {
  background-color: rgb(125, 130, 138) !important;
}

.el-table th,
.el-table tr,
.el-table td {
  background-color: transparent;
}
.el-pagination {
  margin-top: 15px;
  background: transparent !important;
}
.cell-class-name {
  border-color: #868686;
}
.table-wrapper >>> .el-table-column {
  width: 90%;
  background: none;
  margin: 0 auto;
}
.table-wrapper >>> .el-table,
.table-wrapper >>> .el-table__expanded-cell {
  background-color: transparent !important;
}

.table-wrapper >>> .el-table th,
.table-wrapper >>> .el-table tr,
.table-wrapper >>> .el-table td {
  /* border: 0 !important; */
  color: #fff;
  background-color: transparent !important;
}
</style>