const main = require("../async/newuserdel")
const USER = require("../../model/USER")
function userdel(req, res) {
    main(req).then((data)=>{
        USER.update({status: true},{followee: data},(err)=>{
            if(!err){
                res.json("删除成功")
            }
        })
    
    },()=>{
        console.log(删除失败)
    })
    res.send();
}

module.exports = userdel;