const { json } = require('body-parser')
const USER = require('../../model/USER')
function changepsd(req, res) {
    USER.find({ username: req.body.username }).then((result) => {
        if (result.length > 0) {
            USER.update({
                username: req.body.username
            }, {
                password: req.body.password
            }, (err) => {
                if(req.body.password == req.body.passwordone){
                    if (!err) {
                        res.json({
                            code: 1,
                            msg: '修改成功'
                        })
                    }else{
                        res.json({
                            code: 1,
                            msg: '网络开小差了...'
                        })
                    }
                }else{
                    res.json({
                        code: 0,
                        msg: '密码不一致'
                    })
                }
            })
        } 
    })
}


module.exports = changepsd;