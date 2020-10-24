
const USER = require("../../model/USER")
function upinfor(req, res) {
    USER.update({status: true},req.body,(err)=>{})
    // console.log(req.body)
    res.json(1)
}

module.exports = upinfor;