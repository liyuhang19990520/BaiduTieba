const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())
//cookie
app.use(cookieParser());

app.use(bodyParser.urlencoded({ "limit": "100mb" })); //根据需求更改limit大小
app.use(bodyParser.json({ "limit": "100mb" }))
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.json({limit : "2100000kb"}));  
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
//据需求更改limit大小


app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  next();
});

const db = require('./model/db')

//注册
app.post('/register', require('./api/user/register'))

//登录
app.post('/login', require('./api/user/login'))

//帖子列表
app.get('/posts/list', require('./api/posts/list'))  //获取帖子列表

//帖子详情
app.get('/posts/detail', require('./api/posts/detail'))  //获取帖子详情
// 发帖
app.post("/addpost", require('./api/posts/addpost'))
// 注册
app.post('/register', require('./api/user/register'))
// 信息
app.post('/information', require('./api/user/information'))
// 用户名
app.post('/username', require('./api/user/username'))
// 登录
app.post('/login', require('./api/user/login'))
// 修改密码
app.post('/changepsd', require('./api/user/changepsd'))
//登陆状态
app.post("/status", require('./api/user/status'))


app.listen(3000, () => {
  console.log('服务启动')
})


