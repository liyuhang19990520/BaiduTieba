const userDataAll = require("./asyncfun").userDataAll;
const postDataAll = require("./asyncfun").postDataAll;


async function main(req) {
    let obj = []
    let userData = await userDataAll({ username: req.query.user })
    let postUserData = await postDataAll({ posterUser: req.query.user })
    obj = [...userData,...postUserData]
    return obj
}

module.exports = main;