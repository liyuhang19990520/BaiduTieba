const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./model/db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    next();
});

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

app.listen(3000, () => {
    console.log(`Example app listening on port port!`)
})
