var pwd = /^.*(?=.{6,}).*$/;
var password = $('.password');
var username = $(".username ");
// var regtel = /^1\d{10}$/;
//解决页面刷新问题
window.WebSocket = function () { }


//跳转登录页面
$('svg').click(() => {
    location.href = 'login.html'
})

//验证密码
    
    // $(".oldPassword").on("input",function(){
      
    //     console.log($(".oldPassword").val())
    //     console.log(data)
    //     // if(){

    //     // }
    // })

// $('.password').on('input', function () {
//     var password = $('.password');

//     if (pwd.test(password.val()) == false) {
//         $('button').css({
//             opacity: 0.3
//         });
//         $('.tip').html('亲，密码不得小于六位')
//     } else {
//         $('.tip').html('')
//         if (regtel.test(username.val()) == false) {
//             $('button').css({
//                 opacity: 0.3
//             });
//         } else {
//             $('button').css({
//                 opacity: 1
//             });
//         }
//     }
// })

//提交数据到后端
$('button').click((e) => {
    e.preventDefault()
    $.ajax({
        url: "http://localhost:3000/changepsd",
        method: 'post',
        data: $('form').serialize(),
        success: function (data) {
            $('.tip').html(data.msg)
            $('.tip').css('color', 'blue')
            if (data.code) {
                location.href = 'login.html'
            }
        }
    })
})