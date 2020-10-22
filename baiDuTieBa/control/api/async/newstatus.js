
const userDataAll = require("./asyncfun").userDataAll;
async function main(){
    let stauData = await userDataAll({status: true});
    return stauData;
}

module.exports = main;