const POSTS = require('../../model/POSTS')

function detail(req,res){
    // req.query.pn   //页数
    // req.query.ps   //条数

    POSTS.findById({
        _id: req.query.postsId
    })
    .then((result)=>{
        res.json(result)
    })
}

module.exports = detail