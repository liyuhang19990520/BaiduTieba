const USER = require('../../model/USER')
function login(req, res) {
    console.log(req.body.username)
    USER.find({ username: req.body.username }).then((result) => {
        if (result.length > 0) {
            USER.find({
                username: req.body.username,
                password: req.body.password
            }).then((result) => {
                if (result.length == 1) {
                    res.json({
                        code: 1,
                        msg: '登录成功'
                    })
                } else {
                    res.json({
                        code: 0,
                        msg: '亲，你的密码错误'
                    })

                }
            })
        } else if (result.length == 0) {
            res.json({
                code: 0,
                msg: '你能先注册了再来吗？'
            })

        }

    })
}




module.exports = login;