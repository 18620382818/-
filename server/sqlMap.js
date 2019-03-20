var sqlMap = {
  user: {
      add: 'insert into user( username, password) values ( ?, ?)',
      select_name: 'SELECT * from user where username = ?',    //查询 username
      select_password: 'SELECT * from user where password = ?',      //查询 password
      search: `SELECT * from user`
  }
}
module.exports = sqlMap;