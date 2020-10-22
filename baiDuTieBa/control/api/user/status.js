
const main = require("../async/newstatus")
const USER = require("../../model/USER");
function status(req,res){
    console.log(req.body)
    if(req.body.code){
        USER.update({status: true},{status: false},(err)=>{

        })
        
    }else{
        main().then((data)=>{
            res.send(data);
        },()=>{
            console.log("失败")
        })
    }
}


module.exports = status;