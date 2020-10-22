const main = require("../async/newdetail")

function detail(req,res){
    // req.query.pn   //页数
    // req.query.ps   //条数
    
    // POSTS.findById({
    //     _id: req.query.postsId
    // })
    // .then((result)=>{
    //     res.json(result)
    // })
    main(req).then((data)=>{
        res.send(data);
    },()=>{
        console.log("失败")
    })
}

module.exports = detail