const userDataAll = require("./asyncfun").userDataAll;
async function main(req) {
    console.log(req.body)
    let arr = []
    let statData = await userDataAll({ status: true });
    for (let i = 0; i < statData[0].followee.length; i++) {
        if (statData[0].followee[i] != req.body.username) {
            arr.push(statData[0].followee[i])
        }
    }
    return arr;
}

module.exports = main