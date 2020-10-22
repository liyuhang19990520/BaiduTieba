
const userDataAll = require("./asyncfun").userDataAll;
const reviewDataAll = require("./asyncfun").reviewDataAll;
async function main() {
    let stauData = await userDataAll({ status: true });
    let revnameData = await reviewDataAll({reviewUser: stauData[0].username});
    return revnameData.length;
}

module.exports = main;