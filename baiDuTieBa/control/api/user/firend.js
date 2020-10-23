
const main = require('../async/newfirend')
function firend(req, res) {
    main(req).then((data) => {
        res.json(data)
    }, () => {
        console.log("读取资料失败")
    })
}

module.exports = firend;