const userDataAll = require("./asyncfun").userDataAll;

async function main() {
    let stauData = await userDataAll({ status: true });
    let arr = []
    for (let i = 0; i < stauData[0].fans.length; i++) {
        let userData = await userDataAll({ username: stauData[0].fans[i] });
        arr.push(...userData)
    }
    return arr;
}

module.exports = main;