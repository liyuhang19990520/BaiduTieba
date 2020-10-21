const USER = require('../../model/USER')
function changepsd(req, res) {
    console.log(req.body.username)
    USER.find({ username: req.body.username }).then((result) => {
        if (result.length > 0) {
            USER.update({
                username: req.body.username
            }, {
                password: req.body.password
            }, (err) => {
                if (!err) {
                    res.json({
                        code: 1,
                        msg: '修改成功'
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


module.exports = changepsd;