const REVIEW = require("../../model/REVIEW");
const main = require("../async/newaddrev")
function addreview(req, res) {
    main().then((data) => {
        REVIEW.create({
            postID: req.body.postsId,
            reviewUser: data.reviewUser,
            content: req.body.content
        }, (err) => {
            if (!err) {
                res.send({
                    cont: "评论成功",
                    code: 1
                })
            } else {
                res.send({
                    cont: "评论失败",
                    code: 0
                })
            }
        })
    }, () => {
        console.log("评论失败")
    })
}

module.exports = addreview;