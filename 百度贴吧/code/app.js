const express = require('express')

const app = express()

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
  });

const db = require('./model/db')

//注册
app.post('/register',require('./api/user/register'))

//登录
app.post('/login',require('./api/user/login'))

//帖子模块
app.get('/posts/list',require('./api/posts/list'))  //获取帖子列表

//帖子详情
app.get('/posts/detail',require('./api/posts/detail'))  //获取帖子详情

app.listen(3000,()=>{
    console.log('服务启动')
})