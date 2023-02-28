const { Router } = require('express')
const router = new Router()
const db = require("./db.js");
const uitl = require("./uitl.js");



//注册用户插入
router.post("/user/adduser", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    user: body.user,
    password: body.password
  };
  db.dbAdd("admin_user", sqlParam, res, next);
});
// 登录
router.post("/login", (req, res, next) => {
  let body = req.body;
  // console.log("login1", body);
  let sqlParam = {
    user: body.user,
    password: body.password,
    login_time: uitl.getNewTime()
  };
  // console.log("login2", sqlParam);
  db.loginGet({ user: sqlParam.user }, (res1) => {
    let obj = res1[0];
    if (obj && obj.password === body.password) {
      res.status(200).json({
        status: 200,
        data: {
          ...obj,
          password: '',
          token: new Date().getTime() + 3600000 // token有效期1小时
        },
        msg: '登录成功'
      });
    } else {
      res.status(200).json({
        status: 401,
        msg: '账号或密码错误'
      });
    }
  });
});
router.post("/user/queryname", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    id: body.id,
  };
  db.dbQueryById("admin_user", sqlParam, res, next);
});
//用户状态更新
router.post("/user/status", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    status1: body.status1,
  };
  db.dbUpdatestatus("admin_user", sqlParam, res, next, body.user);
});
//计时数据更新
router.post("/user/charu", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    day_all_minutes: body.day_all_minutes,
  };
  db.dbUpdatedata("admin_user", sqlParam, res, next, body.user);
});
//计时数据更新
// router.post("/user/time_updata", (req, res, next) => {
//   let body = req.body;
//   let sqlParam = {
//     time: body.time
//   };
//   db.dbUpdate("times", sqlParam, res, next, body.id);
// });

router.get("/user/queryjishi", (req, res, next) => {
  db.queryList("admin_user", req, res, next);
});
router.get("/user/queryuser", (req, res, next) => {
  db.queryList1("admin_user", req, res, next);
});
// router.post("/user/timeid", (req, res, next) => {
//   let body = req.body;
//   let sqlParam = {
//     user: body.user
//   };
//   db.dbQueryById("admin_user", sqlParam, res, next);
// });
// 工作室成员-新增
router.post("/user/add", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    name: body.name,
    tell: body.tell,
    qq: body.qq,
    grade: body.grade,
    major: body.major,
    direction: body.direction,
  };
  db.dbAdd("user", sqlParam, res, next);
});
// 学员-删除
router.post("/user/delete", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    id: body.id,
  };
  db.dbDelete("user", sqlParam, res, next);
});
// 学员-编辑
router.post("/user/update", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    name: body.name,
    tell: body.tell,
    qq: body.qq,
    grade: body.grade,
    major: body.major,
    direction: body.direction
  };
  db.dbUpdate("user", sqlParam, res, next, body.id);
});
// 学员-通过name查询
router.post("/user/name", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    name: body.name,
  };
  db.dbQueryByname("user", sqlParam, res, next);
});
router.post("/user/queryId", (req, res, next) => {
  let body = req.body;
  let sqlParam = {
    id: body.id,
  };
  db.dbQueryById("user", sqlParam, res, next);
});

router.get("/user/query", (req, res, next) => {
  db.queryList("user", req, res, next);
});

module.exports = router;