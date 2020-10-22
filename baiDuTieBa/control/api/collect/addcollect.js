
const COLLECT = require("../../model/COLLECT");
const main = require('../async/newaddrev');
function addcollect(req, res) {
    main().then((data) => {
        COLLECT.find({
            postID: req.body.postsId,
            posterUser: data.reviewUser
        }, (err, result) => {
            if (!err) {
                if (result.length == 0) {
                    COLLECT.create({
                        postID: req.body.postsId,
                        posterUser: data.reviewUser,
                    }, (err) => {
                        if (!err) {
                            res.send({
                                cont: "收藏成功",
                                code: 1
                            })
                        } else {
                            res.send({
                                cont: "收藏失败",
                                code: 0
                            })
                        }
                    })
                }else{
                    COLLECT.remove({
                        postID: req.body.postsId,
                        posterUser: data.reviewUser
                    },(err)=>{
                        if(!err){
                            res.send({
                                cont: "取消收藏成功",
                                code: 3
                            })
                        }else{
                            res.send({
                                cont: "取消收藏失败",
                                code: 4
                            })
                        }
                    })
                }
            }
        })
    }, () => {
        console.log("收藏失败")
    })







}

module.exports = addcollect;