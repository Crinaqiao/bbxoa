<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成员信息</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="table-wrapper">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            class="input-with-select"
            v-model="name"
            clearable
            @clear="getuserlist"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="queryuser"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" @click="dialogVisible = true"
            >添加用户</el-button
          >
        </el-col>
      </el-row>
      <!-- 列表区域 -->
      <el-table style="width: 100%" :data="userlist" stripe boder>
        <!-- 第一行是索引列 -->
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="name"> </el-table-column>
        <el-table-column prop="tell" label="tell"> </el-table-column>
        <el-table-column prop="qq" label="qq"> </el-table-column>
        <el-table-column prop="grade" label="grade"> </el-table-column>
        <el-table-column prop="major" label="major"> </el-table-column>
        <el-table-column prop="direction" label="direction"> </el-table-column>
        <el-table-column label="操作">
          <template v-slot="operator">
            <el-tooltip
              class="item"
              effect="dark"
              content="编辑"
              placement="top"
              :enterable="false"
            >
              <!-- operator.row.id取出要修改的这行用户的id -->
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="editor(operator.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="deleteor(operator.row.id)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="qureyinfo.pageIndex"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="qureyinfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="30%"
      @close="adddialogclose"
    >
      <span>
        <el-form
          ref="addroles"
          :model="addUserInfo"
          label-width="80px"
          :rules="addRules"
        >
          <el-form-item label="name" prop="name">
            <el-input v-model="addUserInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="tell" prop="tell">
            <el-input v-model="addUserInfo.tell"></el-input>
          </el-form-item>
          <el-form-item label="qq" prop="qq">
            <el-input v-model="addUserInfo.qq"></el-input>
          </el-form-item>
          <el-form-item label="grade" prop="grade">
            <el-input v-model="addUserInfo.grade"></el-input>
          </el-form-item>
          <el-form-item label="major" prop="major">
            <el-input v-model="addUserInfo.major"></el-input>
          </el-form-item>
          <el-form-item label="direction" prop="direction">
            <el-input v-model="addUserInfo.direction"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="success" @click="isAddUsers">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog title="修改用户" :visible.sync="editorShow" width="30%">
      <el-form
        :model="editForm"
        :rules="editRules"
        ref="editruleForm"
        label-width="100px"
      >
        <el-form-item label="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="tell" prop="tell">
          <el-input v-model="editForm.tell"></el-input>
        </el-form-item>
        <el-form-item label="qq">
          <el-input v-model="editForm.qq"></el-input>
        </el-form-item>
        <el-form-item label="grade">
          <el-input v-model="editForm.grade"></el-input>
        </el-form-item>
        <el-form-item label="major">
          <el-input v-model="editForm.major"></el-input>
        </el-form-item>
        <el-form-item label="direction">
          <el-input v-model="editForm.direction"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span>
          <el-button @click="editorShow = false">取 消</el-button>
          <el-button type="success" @click="commitEditForm">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      const regEmail =
        /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (regEmail.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法的邮箱"));
    };
    var checkMobile = (rule, value, callback) => {
      const regMobile =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (regMobile.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法的手机号"));
    };
    return {
      qureyinfo: {
        // query可输入列表关键字搜索
        query: "",
        pageIndex: 1,
        pageSize: 5,
      },
      userlist: [],
      total: 0,
      dialogVisible: false,
      editorShow: false,
      addUserInfo: {
        name: "",
        tell: "",
        qq: "",
        grade: "",
        major: "",
        direction: "",
      },
      editForm: {
        id: "",
        name: "",
        tell: "",
        qq: "",
        grade: "",
        major: "",
        direction: "",
      },
      addRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
      },
      editRules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        tell: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
      },
      name: "",
      userid: window.sessionStorage.getItem("id"),
    };
  },
  created() {
    this.getuserlist();
  },
  methods: {
    async getuserlist() {
      const { data: res } = await this.$http.get("/api/user/query", {
        params: this.qureyinfo,
      });
      if (res.status !== 200) {
        return this.$message.error("获取用户列表失败");
      }
      this.userlist = res.data;
      this.total = res.total;
    },
    handleSizeChange(newSize) {
      this.qureyinfo.pageSize = newSize;
      this.getuserlist();
    },
    handleCurrentChange(newPage) {
      this.qureyinfo.pageIndex = newPage;
      this.getuserlist();
    },
    adddialogclose() {
      this.$refs.addroles.resetFields();
    },
    isAddUsers() {
      if (this.userid != 1) {
        return this.$message.error("请联系超级管理员完成此操作");
      }
      this.$refs.addroles.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post(
          "/api/user/add",
          this.addUserInfo
        );
        console.log(res);
        if (res.status !== 200) {
          this.$message.error("添加用户失败");
        } else {
          this.$message.success("添加用户成功");
          this.dialogVisible = false;
          this.getuserlist();
        }
      });
    },
    async queryuser() {
      const { data: res } = await this.$http.post("/api/user/name", {
        name: this.name,
      });
      if (res.status !== 200) {
        return this.$message.error("该用户不存在");
      } else {
        this.userlist = res.data;
      }
    },
    async editor(id) {
      this.editorShow = true;
      const { data: res } = await this.$http.post("/api/user/queryId", { id });
      if (res.status !== 200) {
        return this.$message.error("查找用户失败");
      }
      console.log(res.data[0]);
      this.editForm = res.data[0];
    },
    commitEditForm() {
      if (this.userid != 1) {
        return this.$message.error("请联系超级管理员完成此操作");
      }
      if (this.editruleForm !== null) {
        this.$refs.editruleForm.validate(async (valid) => {
          if (!valid) {
            return;
          }
          const { data: res } = await this.$http.post(
            "/api/user/update",
            this.editForm
          );
          console.log(res);
          if (res.status !== 200) {
            return this.$message.error("更新失败");
          } else {
            this.$message.success("更新成功");
            this.getuserlist();
            this.editorShow = false;
          }
        });
      }
    },
    async deleteor(id) {
      const result = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (result !== "confirm") {
        return this.$message.info("已取消删除操作");
      }
      if (this.userid != 1) {
        return this.$message.error("请联系超级管理员完成此操作");
      }
      const { data: res } = await this.$http.post("/api/user/delete", { id });
      if (res.status !== 200) {
        return this.$message.error("删除失败");
      } else {
        this.getuserlist();
        return this.$message.success("删除成功");
      }
    },
  },
};
</script>

<style scoped>
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