const mongoose = require('mongoose')
const collectSchema = new mongoose.Schema({
    postID: String,
    posterUser: String
});

const collectModel = mongoose.model('collect', collectSchema);

module.exports = collectModel