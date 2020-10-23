
const main = require("../async/newfans")

function myfans(req, res) {
    main().then((data) => {
        res.json(data)
    }, () => {
        console.log("获取我的粉丝失败")
    })

}

module.exports = myfans;