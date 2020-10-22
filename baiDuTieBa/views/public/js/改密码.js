var pwd = /^.*(?=.{6,}).*$/;
var password = $('.password');
var username = $(".username ");
var regtel = /^1\d{10}$/;
//解决页面刷新问题
window.WebSocket = function () { }


//跳转登录页面
$('svg').click(() => {
    location.href = 'login.html'
})
//验证手机号
$('.username').on('input', function () {

    // console.log(regtel.test(username.val()))
    if (regtel.test(username.val()) == false) {
        $('button').css({
            opacity: 0.3
        });
        $('.tip').html('亲，你的输入有误')
        // $('.tip').val('你再想想你手机号是个啥')
        return false;
    } else {
        $('.tip').html('')
        if (pwd.test(password.val()) == false) {
            $('button').css({
                opacity: 0.3
            });
        } else {
            $('button').css({
                opacity: 1
            });
        }
    }
    return true
})

//验证密码
$('.password').on('input', function () {
    var password = $('.password');

    if (pwd.test(password.val()) == false) {
        $('button').css({
            opacity: 0.3
        });
        $('.tip').html('亲，密码不得小于六位')
    } else {
        $('.tip').html('')
        if (regtel.test(username.val()) == false) {
            $('button').css({
                opacity: 0.3
            });
        } else {
            $('button').css({
                opacity: 1
            });
        }
    }
})

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