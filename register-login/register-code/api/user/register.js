const USER = require('../../model/USER')
function register(req, res) {
    USER.find({ username: req.body.username }).then((result) => {
        if (result.length > 0) {
            res.json({
                code: 0,
                msg: '当前用户名已被注册'
            })
        } else if (result.length == 0) {
            USER.create({
                username: req.body.username,
                password: req.body.password
            }).then(() => {
                res.json({
                    code: 1,
                    msg: '注册成功'
                })
            }, () => {
                res.json({
                    code: 0,
                    msg: '注册失败'
                })
            })
        }
    })
}


module.exports = register