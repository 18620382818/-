var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err')
    } else {
        //res.json(ret);
        res.send('ok')
    }
};
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql_name = $sql.user.select_name
    var sql = $sql.user.add;
    var params = req.body;
    conn.query(sql_name,params.username,function(err,result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            conn.query(sql,[params.username,params.password], function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result) {
                    jsonWrite(res, result)
                }
            })
        }else {
            res.send('-1')    //当前注册username与数据库重复时，data返回-1
        }
    })
    
});

router.get('/search', function (req, res) {
   
    var sql = $sql.user.search;
    conn.query(sql, function(err, result) {
        if(err) {
            console.log(err)
        }
        if(result) {
            res.send(result)
        }
    })
  });

//查找用户接口
router.post('/userMsg', (req,res) => {
    var sql_name = $sql.user.select_name;
    var sql_password = $sql.user.select_password;
    var params = req.body;
    conn.query(sql_name,params.username,function(err, result) {
        if(err) {
            console.log(err)
        }
        if(result) {
            res.send(result)
        }
    })
});

//查找用户接口
router.post('/selectUser', (req,res) => {
    var sql_name = $sql.user.select_name;
    var sql_password = $sql.user.select_password;
    var params = req.body;
    conn.query(sql_name,params.username,function(err, result) {
        if(err) {
            console.log(err)
        }
        if(result[0]===undefined) {
            res.send('-1')
        }else {
            conn.query(sql_password,params.password, function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result[0]===undefined) {
                    res.send('0') 
                }else {
                    res.send(result)
                }
            })
        }
    })
});
module.exports = router;