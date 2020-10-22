const mongoose = require('mongoose')
const likeSchema = new mongoose.Schema({
    postID: String,
    posterUser: String
});

const likeModel = mongoose.model('like', likeSchema);

module.exports = likeModel