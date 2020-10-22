const LIKE = require("../../model/LIKE")

function likenum(req,res){
    LIKE.find({postID: req.body.postsId},(err,result)=>{
        if(!err){
            res.json(result)
        }else{
            res.json("网络异常")
        }
    })
}

module.exports = likenum;