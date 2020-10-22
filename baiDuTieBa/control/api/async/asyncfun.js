const POSTS = require('../../model/POSTS')
const USER = require('../../model/USER')
const REVIEW = require("../../model/REVIEW")





function postDataID(obj) {
    return new Promise((resole, reject) => {
        POSTS.findById(obj, (err, result) => {
            if (!err) {
                resole(result);
            } else {
                reject();
            }
        })
    })
}
function userDataAll(obj) {
    return new Promise((resole, reject) => {
        USER.find(obj, (err, result) => {
            if (!err) {
                resole(result);
            } else {
                reject();
            }
        })
    })
}
function postDataAll(obj) {
    return new Promise((resole, reject) => {
        POSTS.find(obj, (err, result) => {
            if (!err) {
                resole(result);
            } else {
                reject();
            }
        })
    })
}
function reviewDataAll(obj) {
    return new Promise((resole, reject) => {
        REVIEW.find(obj, (err, result) => {
            if (!err) {
                resole(result);
            } else {
                reject();
            }
        })
    })
}

exports.postDataID = postDataID;
exports.userDataAll = userDataAll;
exports.postDataAll = postDataAll;
exports.reviewDataAll = reviewDataAll;