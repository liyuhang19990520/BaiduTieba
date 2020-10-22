const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
    postID: String,
    reviewUser: String,
    content: String,
    time: {
        type: Date,
        default: Date.now
    }
}, { timestamps: { createdAt: 'created', updatedAt: 'updated' } });









const reviewModel = mongoose.model('review', reviewSchema);

module.exports = reviewModel