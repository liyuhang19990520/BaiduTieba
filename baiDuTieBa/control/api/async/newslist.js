
const userDataAll = require("./asyncfun").userDataAll;
const postDataAll = require("./asyncfun").postDataAll;


async function main(req) {
    let PaData = await postDataAll({})
    let obj=[]
    for(let i = 0 ; i < PaData.length; i++){
        let piData = await userDataAll({username: PaData[i].posterUser});
        obj[i] = {
           ...PaData[i]._doc,
           nickname: piData[0].nickname,
           headImg: piData[0].headImg
       }
    }
    return obj;
}

// main 返回了promise
/*
    main()  == promise   成功 
    then((data)=>{})  // 成功  arr
    
*/



module.exports = main;