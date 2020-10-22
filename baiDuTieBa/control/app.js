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
// 添加评论
app.post("/addreview",require('./api/review/addreview'))
// 获取评论表的评论
app.post("/seeReview",require('./api/review/seeReview'))
// 我的评论
app.post("/myReview",require('./api/review/myReview'))
//我的帖子
app.get("/myposts",require('./api/posts/myposts'))
//收藏
app.post("/addcollect",require('./api/collect/addcollect'))
//收藏状态
app.post("/collected",require('./api/collect/collected'))
//点赞
app.post("/addlike",require('./api/like/addlike'))
//点赞状态
app.post("/likeed",require('./api/like/likeed'))
//点赞数
app.post("/likenum",require('./api/like/likenum'))
//模糊查询
app.get("/search",require('./api/posts/search'))

app.listen(3000, () => {
  console.log('服务启动')
})


