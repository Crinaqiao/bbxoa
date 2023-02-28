/**
 * Created by Walker on 2020/04/30.
 * 服务器入口文件
 * 热加载 supervisor server.js
 */
const express = require("express");
const app = express();

const router = require('./db/routers.js');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//设置允许跨域的域名，*代表允许任意域名跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //允许的header类型
  res.header("Access-Control-Allow-Headers", "Content-type"); //跨域允许的请求方式
  res.header(
    "Access-Control-Allow-Methods",
    "PUT,POST,GET,DELETE,OPTIONS,PATCH"
  ); //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
  res.header("Access-Control-Max-Age", 86400); //预请求缓存1天
  // console.log('header',req.url);
  // 请求拦截
  let whites = ['/login']; //不验证token接口
  // console.log('token', req.headers.token >= new Date().getTime(), req.path);
  if (whites.indexOf(req.path) > -1) {
    next();
  } else if (req.headers.token && req.headers.token >= new Date().getTime()) {
    next();
  } else {
    // res.status(200).json({
    //   status: 401,
    //   msg: '请重新登录'
    // })
    next();
  }
});

app.use(router);

app.listen(3000, () => {
  console.log('服务器启动成功')
  console.log('http://127.0.0.1:3000')
});
