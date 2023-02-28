const mysql = require("mysql");
const $dbConfig = require("./dbConfig");
const sql = require("./sql.js");
const pool = mysql.createPool($dbConfig); // 使用连接池，避免开太多的线程，提升性能
const json = require("./json");

let loginGet = (req, callback) => {
  pool.getConnection((err, connection) => {
    let paramValue = paramList(req);
    if (err) {
      console.log("建立连接失败", err);
      callback(err)
    } else {
      connection.query(sql['admin_user'].queryByname, [...paramValue], (err, result) => {
        callback(result);
        // 释放连接
        connection.release();
      });
    }
  });
}
/**
 * @description 新增一条数据
 * @param  {str} table 数据库表的名称
 * @param  {obj} req 插入的数据
 * @param  {obj} res 接口函数中的res对象
 * @param  {obj} next 接口函数中的next对象
 */
let dbAdd = (table, req, res, next) => {
  pool.getConnection((err, connection) => {
    let paramValue = paramList(req);
    connection.query(sql[table].insert, [...paramValue], (err, result) => {
      if (result) { result = "add"; }
      // 以json形式，把操作结果返回给前台页面
      json(res, result, err);
      // 释放连接
      connection.release();
    });
  });
};
let dbAdd1 = (table, req, res, next) => {
  pool.getConnection((err, connection) => {
    let paramValue = paramList(req);
    connection.query(sql[table].insertuser, [...paramValue], (err, result) => {
      if (result) { result = "add"; }
      // 以json形式，把操作结果返回给前台页面
      json(res, result, err);
      // 释放连接
      connection.release();
    });
  });
};
/**
 *@description 删除一条数据
 @param 同abAdd
 */
let dbDelete = (table, req, res, next) => {
  let paramValue = paramList(req);
  pool.getConnection((err, connection) => {
    connection.query(sql[table].delete, [...paramValue], (err, result) => {
      if (result) {
        result = "delete";
      } else {
        result = undefined;
      }
      json(res, result, err);
      connection.release();
    });
  });
};

/**
 *@description 修改一条数据
 @param 同abAdd
 */
let dbUpdate = (table, req, res, next, id) => {
  let paramValue = paramList(req);
  console.log(req, paramValue);
  pool.getConnection((err, connection) => {
    connection.query(sql[table].update, [...paramValue, id], (err, result) => {
      console.log('result', err)
      if (result) {
        result = "update";
      } else {
        result = undefined;
      }
      json(res, result, err);
      connection.release();
    });
  });
};
let dbUpdatedata = (table, req, res, next, id) => {
  let paramValue = paramList(req);

  console.log(req, paramValue);
  pool.getConnection((err, connection) => {
    connection.query(sql[table].updatedata, [...paramValue, id], (err, result) => {
      console.log('result', err)
      if (result) {
        result = "update";
      } else {
        result = undefined;
      }
      json(res, result, err);
      connection.release();
    });
  });
};
let dbUpdatestatus = (table, req, res, next, user) => {
  let paramValue = paramList(req);
  console.log(req);
  // console.log(paramList);
  // console.log(paramValue);
  console.log(req, paramValue);
  pool.getConnection((err, connection) => {
    connection.query(sql[table].updatestatus, [req.status1, user], (err, result) => {
      console.log('result', err)
      if (result) {
        result = "update";
      } else {
        result = undefined;
      }
      json(res, result, err);
      connection.release();
    });
  });
};

/**
 *@description 查找一条数据
 @param 同abAdd
 */
let dbQueryByname = (table, req, res, next) => {
  let paramValue = paramList(req);
  pool.getConnection((err, connection) => {
    connection.query(sql[table].queryByname, [...paramValue], (err, result) => {
      if (result != "") {
        var _result = result;
        result = {
          result: "select",
          data: _result,
        };
      } else {
        result = undefined;
      }
      json(res, result, err);
      connection.release();
    });
  });
};

let dbQueryById = (table, req, res, next) => {
  let paramValue = paramList(req);
  pool.getConnection((err, connection) => {
    connection.query(sql[table].queryById, [...paramValue], (err, result) => {
      if (result != "") {
        var _result = result;
        result = {
          result: "select",
          data: _result,
        };
      } else {
        result = undefined;
      }
      json(res, result, err);
      connection.release();
    });
  });
};

/**
 *@description 查找全部数据
 @param 同abAdd
 */
let dbQueryAll = (table, req, res, next) => {
  pool.getConnection((err, connection) => {
    connection.query(sql[table].queryAll, (err, result) => {
      if (result && result !== "") {
        var _result = result;
        result = {
          result: "selectall",
          data: _result,
        };
      } else {
        result = undefined;
      }
      json(res, result, err);
      connection.release();
    });
  });
};

/**
 * 分页list
 */
let queryList = (table, req, res, next) => {
  let data = req.query,
    pageSize = data.pageSize * 1 || 10,
    pageIndex = data.pageIndex * 1 || 1;
  pool.getConnection((err, connection) => {
    connection.query(`SELECT * FROM ${table} limit ${(pageIndex - 1) * pageSize},${pageSize}`, (err, result) => {
      connection.query(`SELECT count(*) total FROM ${table}`, (err1, result1) => {
        // console.log('result1', result1);
        if (result && result !== "") {
          var _result = result;
          result = {
            status: 200,
            msg: "查找成功",
            data: _result,
            total: result1[0]['total']
          };
        } else {
          result = undefined;
        }
        json(res, result, err);
        connection.release();
      })
    });
  });
};

let queryList1 = (table, req, res, next) => {
  let data = req.query,
    pageSize = data.pageSize * 1 || 10,
    pageIndex = data.pageIndex * 1 || 1;
  pool.getConnection((err, connection) => {
    connection.query(`SELECT user FROM ${table} limit ${(pageIndex - 1) * pageSize},${pageSize}`, (err, result) => {
      connection.query(`SELECT count(*) total FROM ${table}`, (err1, result1) => {
        // console.log('result1', result1);
        if (result && result !== "") {
          var _result = result;
          result = {
            status: 200,
            msg: "查找成功",
            data: _result,
            total: result1[0]['total']
          };
        } else {
          result = undefined;
        }
        json(res, result, err);
        connection.release();
      })
    });
  });
};
/**
 * @description 遍历数据的值
 * @param {obj} obj 包含参数的对象
 * */
let paramList = (obj) => {
  let paramArr = [];
  for (let key in obj) {
    if (obj[key]) {
      paramArr.push(obj[key]);
    }
  }
  return paramArr;
};

module.exports = {
  dbAdd,
  dbAdd1,
  dbDelete,
  dbUpdate,
  dbUpdatedata,
  dbUpdatestatus,
  dbQueryByname,
  dbQueryAll,
  loginGet,
  queryList,
  dbQueryById,
  queryList1
}
