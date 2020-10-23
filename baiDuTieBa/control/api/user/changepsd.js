const { json } = require('body-parser')
const USER = require('../../model/USER')
function changepsd(req,res) {

        USER.update({
            status: true
        }, {
            password: req.body.newPassword
        }, (err) => {
            if (req.body.newPassword == req.body.newPasswordTwice) {
                if (!err) {
                    res.json({
                        code: 1,
                        msg: '修改成功'
                    })
                } else {
                    res.json({
                        code: 1,
                        msg: '网络开小差了...'
                    })
                }
            } else {
                res.json({
                    code: 0,
                    msg: '密码不一致'
                })
            }
        })
    }


module.exports = changepsd;