const USER = require('./../../model/USER')
function register(req, res) {
    USER.find({ username: req.body.username }).then((result) => {
        if (result.length > 0) {
            res.json({
                code: 0,
                msg: '当前用户已经被注册'
            })
        } else if (result.length == 0) {
            USER.create({
                username: req.body.username,
                nickname: req.body.nickname,
                password: req.body.password,
                sex: req.body.sex,
                birth: req.body.birth,
                tel: req.body.tel,
                email: req.body.email
            }).then(()=>{
                res.json({
                    msg: "注册成功",
                    code: 1
                })
            },()=>{
                res.json({
                    msg: "注册失败，请稍后再试",
                    code: 0
                })
            })
        }
    })
}

module.exports = register