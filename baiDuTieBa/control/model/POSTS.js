const mongoose = require('mongoose')
const postsSchema = new mongoose.Schema({
    headline: String,
    content: String,
    posterUser: String,
    image:Array,
    pubTime:{
        type: Date,
        default: Date.now
    }
});

const postsModel = mongoose.model('post', postsSchema);

module.exports = postsModel