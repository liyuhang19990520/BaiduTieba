const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    nickname: String,
    password: String,
    sex: String,
    birth: String,
    email: String,
    headImg: {
        type: String,
        default: 'default.jpg'
    },
    followee: {
        type: String,
        default: '0'
    },
    fans: {
        type: String,
        default: '0'
    }
  });

const user = mongoose.model('User', userSchema);

module.exports = user