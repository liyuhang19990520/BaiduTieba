const userDataAll = require("./asyncfun").userDataAll;
const postDataAll = require("./asyncfun").postDataAll;

async function main() {
    let stauData = await userDataAll({ status: true });
    let postnameData = await postDataAll({ posterUser: stauData[0].username });

    return postnameData;
}

module.exports = main;