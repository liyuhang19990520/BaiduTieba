const main = require("../async/newaddAtt")
const USER = require("../../model/USER")
function addAtt(req, res) {
    let t = true
    main(req).then((data) => {
        for (let i = 0; i < data[1].followee.length; i++) {
            if (data[1].followee[i] == req.body.user) {
                t = false
            }
        }
        if (t) {
            let arr = [...data[1].followee]
            let newArr = [...data[0].fans]
            arr.push(req.body.user);
            newArr.push(data[1].username)
            USER.update({ status: true }, { followee: arr }, (err) => { })
            USER.update({ username: data[0].username }, { fans: newArr }, (err) => {
                if (!err) {
                    res.json(1)
                }
            })

        } else {
            //-
            let arr = [...data[1].followee]
            let newArr = [...data[0].fans]
            arr.forEach((item, index) => {
                if (item == data[0].username) {
                    arr.splice(index, 1)
                }
            })
            newArr.forEach((item, index) => {
                if (item == data[1].username) {
                    newArr.splice(index, 1)
                }
            })
            USER.update({ status: true }, { followee: arr }, (err) => { })
            USER.update({ username: data[0].username }, { fans: newArr }, (err) => {
                if (!err) {
                    res.json(0)
                }
            })

            // console.log(arr, newArr)
        }
        // console.log(data)
    }, () => {
        console.log("关注失败")
    })
}
module.exports = addAtt;