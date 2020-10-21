const USER = require('../../model/USER')
var a;
function username(req,res) {
    if(req.body.username){
        a = req.body.username
    }
    res.send(a);
}
module.exports = username