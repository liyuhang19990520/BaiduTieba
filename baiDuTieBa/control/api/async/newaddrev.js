
const userDataAll = require("./asyncfun").userDataAll;



async function main(){
    // console.log(req.body);
    let userStatData = await userDataAll({status: true});
    
    // console.log(userStatData[0].username)
    return {
        reviewUser: userStatData[0].username
    }
    
}


module.exports = main