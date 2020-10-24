const multiparty = require("multiparty")
function addpost(req, res) {
    var form = new multiparty.Form({ uploadDir: "./../views/public/onimg" })
    form.parse(req, function (err, fields, files) {
        if (err) {
            throw err
        } else {
            res.json(files.file)
        }
    })
}




module.exports = addpost;