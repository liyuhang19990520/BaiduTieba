
const LIKE = require("../../model/LIKE");
const main = require('../async/newaddrev');
function addlike(req, res) {
    main().then((data) => {
        LIKE.find({
            postID: req.body.postsId,
            posterUser: data.reviewUser
        }, (err, result) => {
            if (!err) {
                if (result.length == 0) {
                    LIKE.create({
                        postID: req.body.postsId,
                        posterUser: data.reviewUser,
                    }, (err) => {
                        if (!err) {
                            res.send({
                                cont: "点赞成功",
                                code: 1
                            })
                        } else {
                            res.send({
                                cont: "点赞失败",
                                code: 0
                            })
                        }
                    })
                }else{
                    LIKE.remove({
                        postID: req.body.postsId,
                        posterUser: data.reviewUser
                    },(err)=>{
                        if(!err){
                            res.send({
                                cont: "取消点赞成功",
                                code: 3
                            })
                        }else{
                            res.send({
                                cont: "取消点赞失败",
                                code: 4
                            })
                        }
                    })
                }
            }
        })
    }, () => {
        console.log("点赞失败")
    })







}

module.exports = addlike;