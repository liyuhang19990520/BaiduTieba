const main = require("../async/newseeRev");

function seeReview(req,res){
    main(req).then((data)=>{
        res.json(data)
    },()=>{
        console.log("获取评论失败")
    })
    
}

module.exports = seeReview;