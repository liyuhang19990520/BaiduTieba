const USER = require("../../model/USER")

function newAddAtt(req, res) {
    let t = true;
    USER.find({ status: true }, (err, result) => {
        if (!err) {
            if (req.body.user == result[0].username) {
                res.json(2)
            } else {
                result[0].followee.forEach(element => {
                    if (element == req.body.user) {
                        t = false;
                    }
                });

                if (t) {
                    res.json(1)
                } else {
                    res.json(0)
                }
            }


        }
    })
    // console.log(req.body)
}

module.exports = newAddAtt;