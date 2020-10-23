const main = require("../async/newmycollect")
const COLLECT = require("../../model/COLLECT");
const smain = require("../async/newstatus");
const likemain = require("../async/newmylike");

function mycollect(req, res) {
    if (req.query.code == 1) {
        main(req).then((data) => {
            res.json(data);
        }, () => {
            console.log("收藏失败")
        })
    } else if (req.query.code == 0) {
        smain().then((data) => {
            COLLECT.remove({ postID: req.query.id, posterUser: data[0].username }, (err) => {
                if (!err) {
                    res.json("删除成功")
                }
            })
        }, () => {
            console.log("删除失败")
        })
    } else if (req.query.code == 2) {
        likemain(req).then((data) => {
            res.json(data);
        }, () => {
            console.log("点赞失败")
        })
    }
}


module.exports = mycollect;