/*
对操作数据库不同表的sql语句的封装*/
/**
 * 对操作不同表，sql语句的封装
 */
let user = {
  insert: "INSERT INTO user(name, tell, qq, grade, major, direction) VALUES(?,?,?,?,?,?)",
  update: "UPDATE user SET name=?, tell=?, qq=?, grade=?, major=?, direction=? WHERE id=?",
  delete: "DELETE FROM user WHERE id=?",
  queryByname: "SELECT * FROM user WHERE name=?",
  queryById: "SELECT * FROM user WHERE id=?",
  queryAll: "SELECT * FROM user"
};
let admin_user = {
  updatedata: "UPDATE admin_user SET day_all_minutes=? WHERE user=?",
  updatestatus: "UPDATE admin_user SET status1=? WHERE user=?",
  queryById: "SELECT * FROM admin_user WHERE user_id=?",
  queryByname: "SELECT * FROM admin_user WHERE user=?",
  insert: 'INSERT INTO admin_user(user,day_all_minutes) VALUES(?,?)',
  insert: 'INSERT INTO admin_user(user,password) VALUES(?,?)',
  queryAll: "SELECT * FROM admin_user"
};
let times = {
  insert: 'INSERT INTO times(time) VALUES(?)',
  update: "UPDATE times SET time=? WHERE id=?",
  queryById: "SELECT * FROM times WHERE id=?",
}

module.exports = {
  admin_user,
  user,
  times
};
