const main = require("../async/newstatus")
const POSTS = require("../../model/POSTS")

function creatpost(req, res) {
    main().then((data)=>{

        POSTS.create({
            headline: req.body.headline,
            content: req.body.content,
            posterUser: data[0].username,
            image: req.body["image[]"]

        },(err)=>{
            if(!err){
                res.json(1)
            }
        })
        console.log()
    },()=>{
        console.log("上传帖子失败")
    })
//    console.log(req.body)
}




module.exports = creatpost;