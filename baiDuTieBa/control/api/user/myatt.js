
const main = require("../async/newattr")

function myatt(req, res) {
    main().then((data) => {
        res.json(data)
    }, () => {
        console.log("获取我的关注失败")
    })

}

module.exports = myatt;