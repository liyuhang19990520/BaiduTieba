const USER = require("../../model/USER");
function search(req, res) {
    USER.find({ nickname: /杨/ }, (err, result) => {
        if (!err) {
            res.send(result)
        }

    })
}

module.exports = search;