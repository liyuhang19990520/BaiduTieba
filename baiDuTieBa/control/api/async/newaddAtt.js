const userDataAll = require("./asyncfun").userDataAll;
async function main(req){
    let arr = []
    let userData = await userDataAll({username: req.body.user})
    let statData = await userDataAll({status: true})
    arr = [...userData,...statData]
    return arr
}


module.exports = main;