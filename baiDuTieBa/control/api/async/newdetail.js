const postDataID = require("./asyncfun").postDataID;
const userDataAll = require("./asyncfun").userDataAll;

async function main(req){

    let pIdData = await postDataID({_id: req.query.postsId})
    let uNameData =  await userDataAll({username: pIdData.posterUser})
    let obj = {};
    obj = {
        ...pIdData._doc,
        nickname: uNameData[0].nickname,
        headImg: uNameData[0].headImg
    }

    return obj;
}


module.exports = main;