const USER = require('../../model/USER')
function information(req, res) {
    USER.update({
        username: req.body.username
    }, {
        nickname: req.body.nickname,
        sex: req.body.sex,
        birth: req.body.birth,
        email: req.body.email
    }).then(() => {
        res.json({
            code: 1,
            msg: '已保存'
        })
    })
}
module.exports = information