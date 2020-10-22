const main = require("../async/newmyRev");

function myreview(req,res){
    main().then((data)=>{
        res.json(data)
    },()=>{
        console.log("我的评论获取失败")
    })
}


module.exports = myreview;