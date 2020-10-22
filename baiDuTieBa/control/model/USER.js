const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    nickname: String,
    password: String,
    sex: String,
    birth: String,
    email: String,
    followee: {
        type: String,
        default: 0
    },
    status: {
        type: String,
        default: false
    },
    fans: {
        type: String,
        default: 0
    },
    headImg:{
        type: String,
        default: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618065806,14298536&fm=26&gp=0.jpg"
    }

});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel