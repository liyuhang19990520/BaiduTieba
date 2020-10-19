const POSTS = require('../../../model/POSTS')
const USER = require('../../../model/USER')


function bb(obj) {
    return new Promise((resole, reject) => {
        POSTS.findById(obj, (err, result) => {
            if (!err) {
                resole(result);
            } else {
                reject();
            }
        })
    })
}
function cc(obj) {
    return new Promise((resole, reject) => {
        USER.find(obj, (err, result) => {
            if (!err) {
                resole(result);
            } else {
                reject();
            }
        })
    })
}
function dd(obj, obj1, obj3) {
    return new Promise((resole, reject) => {
        POSTS.find(obj, obj1, obj3, (err, result) => {
            if (!err) {
                resole(result);
            } else {
                reject();
            }
        })
    })
}


async function main() {
    var arr = [];
    let nn = await dd({}, null, null)
    arr.push(nn)
    for (let i = 0; i < nn.length; i++) {
        var v = await bb({ _id: nn[i]._id })
        var z = await cc({ username: v.posterUser })
        if(z.length > 0){
            arr.push(z);
        }
    }
    return arr;
    // POSTS.find({})
    // .limit(req.query.ps-0)
    // .skip((req.query.pn-1) * req.query.ps)
    // .then((result)=>{
    //     res.json(result)
    // })
}



module.exports = main;