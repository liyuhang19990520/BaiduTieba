const postDataID = require("./asyncfun").postDataID;
const userDataAll = require("./asyncfun").userDataAll;
const postDataAll = require("./asyncfun").postDataAll;
const reviewDataAll = require("./asyncfun").reviewDataAll;
const likeDataAll = require("./asyncfun").likeDataAll;



async function main(req) {
    let statusData = await userDataAll({ status: true });
    let collUserData = await likeDataAll({ posterUser: statusData[0].username })
    let obj = []
    for (let i = 0; i < collUserData.length; i++) {
        let postIdData = await postDataID({ _id: collUserData[i].postID })
        let usernameData = await userDataAll({ username: postIdData.posterUser })
        obj[i] = {
            ...postIdData._doc,
            id: collUserData[i].postID,
            nickname: usernameData[0].nickname,
            headImg: usernameData[0].headImg
        }
    }
    return obj
}


module.exports = main;