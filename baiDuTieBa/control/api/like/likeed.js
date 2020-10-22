const main = require('../async/newaddrev');
const LIKE = require("../../model/LIKE");

function likeed(req, res) {
    main().then((data) => {
        LIKE.find({
            postID: req.body.postsId,
            posterUser: data.reviewUser
        },(err,result)=>{
            if(!err){
                if(result.length == 0){
                    res.send("0")
                }else{
                    res.send("1")
                }
            }
        })
    }, () => {

    })
}

module.exports = likeed;