const USER = require('./../../model/USER')

function login(req, res) {

    //登录
    /**
     * 1.先找用户名  找到用户名  再找用户名和密码   找不到用户名  提示用户用户名未注册
     * 
     * 2.找用户名和密码  用户名密码匹配  提示登录成功  不匹配  提示  密码输入错误
     */

     //找用户名
    USER.find({ username: req.body.username }).then((result) => {
        if (result.length > 0) {
            //找用户名和密码
            USER.find({
                username: req.body.username,
                password: req.body.password
            }).then((result) => {
                //用户名密码匹配
                if (result.length == 1) {
                    res.json({
                        code: 1,
                        msg: '登录成功'
                    })
                } else {
                  //用户名密码不匹配
                    res.json({
                        code: 0,
                        msg: '密码输入错误'
                    })
                }
            })

        } else if (result.length == 0) {
            //未找到该用户
            res.json({
                msg: "当前用户名未注册",
                code: 0
            })

        }
    })
}

module.exports = login