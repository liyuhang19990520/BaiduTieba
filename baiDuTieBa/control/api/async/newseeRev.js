const userDataAll = require("./asyncfun").userDataAll;
const reviewDataAll = require("./asyncfun").reviewDataAll;
const REVIEW = require("../../model/REVIEW");

async function main(req) {
    let revAllData = await reviewDataAll({ postID: req.body.postsId });
    let arr = []
    for (let i = 0; i < revAllData.length; i++) {
        let userAllData = await userDataAll({username: revAllData[i].reviewUser})
        arr.push(...userAllData);
        // obj[i] = {
        //     ...revAllData[i]._doc,
        //     nickname: userAllData[0].nickname,
        //     headImg: uNameData[0].headImg
        // }
    }
    let newArr = [revAllData,arr];

    return newArr;
}

module.exports = main;