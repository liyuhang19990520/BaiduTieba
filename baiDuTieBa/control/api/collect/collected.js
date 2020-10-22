const main = require('../async/newaddrev');
const COLLECT = require("../../model/COLLECT");

function collected(req, res) {
    main().then((data) => {
        COLLECT.find({
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

module.exports = collected;