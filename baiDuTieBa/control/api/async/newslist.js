const reviewDataAll = require("./asyncfun").reviewDataAll;
const userDataAll = require("./asyncfun").userDataAll;
const postDataAll = require("./asyncfun").postDataAll;


async function main(req) {
    let sea;
    if (req.query.length != 0) {
        sea = req.query.search;
    }
    if (!req.query.search) {
        let PaData = await postDataAll({})
        let obj = []
        for (let i = 0; i < PaData.length; i++) {
            let reData = await reviewDataAll({ postID: PaData[i]._id })
            let piData = await userDataAll({ username: PaData[i].posterUser });
            obj[i] = {
                ...PaData[i]._doc,
                num: reData.length,
                nickname: piData[0].nickname,
                headImg: piData[0].headImg
            }
        }
        return obj;
    } else {
        // console.log(sea)
        let PaData = await postDataAll({ headline: { $regex: sea, $options: '$i' } })
        let obj = []
        for (let i = 0; i < PaData.length; i++) {
            let reData = await reviewDataAll({ postID: PaData[i]._id })
            let piData = await userDataAll({ username: PaData[i].posterUser });
            obj[i] = {
                ...PaData[i]._doc,
                num: reData.length,
                nickname: piData[0].nickname,
                headImg: piData[0].headImg,
            }
        }
        return obj;

    }
}

// main 返回了promise
/*
    main()  == promise   成功 
    then((data)=>{})  // 成功  arr
    
*/



module.exports = main;