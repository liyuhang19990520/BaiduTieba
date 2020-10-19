const POSTS = require('../../model/POSTS')
const USER = require('../../model/USER')


// function bb(obj) {
//     return new Promise((resole, reject) => {
//         POSTS.findById(obj, (err, result) => {
//             if (!err) {
//                 resole(result);
//             } else {
//                 reject();
//             }
//         })
//     })
// }
// function cc(obj) {
//     return new Promise((resole, reject) => {
//         USER.find(obj, (err, result) => {
//             if (!err) {
//                 resole(result);
//             } else {
//                 reject();
//             }
//         })
//     })
// }

// async function main() {
//     let v = await bb({ _id: "5f8bfbb0c6f6882576b0d257" })
//     let z = await cc({ username: v.posterUser })
//     return z;
// }



const main = require("./async/newslist");



function list(req, res) {

    main().then((resf) => {
        res.json(resf)
    }, () => {
        console.log("失败")
    })


    main();


    // POSTS.findById({posterUser:'yd'},(err,result)=>{
    //     if(!err){
    //         USER.findById({username:result.posterUser}).then((result)=>{
    //             res.json(result)
    //          })
    //     }
    // })
}

module.exports = list