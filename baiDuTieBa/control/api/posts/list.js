// const POSTS = require('../../model/POSTS')
// const USER = require('../../model/USER')

const main = require("../async/newslist");



function list(req, res) {
    main(req).then((resf) => {
        res.json(resf)
    }, () => {
        console.log("失败")
    })
}

module.exports = list