
const main = require("../async/newmyposts")
function myposts(req,res){
    main().then((data)=>{
        res.json(data)
    },()=>{
        console.log("我的帖子获取失败")
    })
}

module.exports = myposts;