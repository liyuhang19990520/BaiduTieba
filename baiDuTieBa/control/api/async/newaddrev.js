
const userDataAll = require("./asyncfun").userDataAll;



async function main(){
  
    let userStatData = await userDataAll({status: true});
    
 
    return {
        reviewUser: userStatData[0].username
    }
    
}


module.exports = main