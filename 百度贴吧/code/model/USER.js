const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    nickname: String,
    password: String,
    sex: String,
    birth: String,
    tel: String,
    email: String,
    followowee: String,
    fans:String,
    headImg:{
        type: String,
        default: 'default.jpg'
    },

    createTime:{
        type: Date,
        default: Date.now
    }

});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel