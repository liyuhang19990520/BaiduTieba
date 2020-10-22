

//解决页面刷新问题
window.WebSocket = function () { }

//修改密码界面
// $('.forget').click(() => {
//     location.href = 'changepsd.html'
// })

//跳转注册界面
$('.register').click(() => {
    location.href = 'register.html'
})

// 跳转到主页面
$('svg').click(() => {
    location.href = 'index.html'
})

//验证手机号
$('.username').on('input', function () {
    var username = $(".username ");
    var regtel = /^1\d{10}$/;
    // console.log(regtel.test(username.val()))
    if (regtel.test(username.val()) == false) {
        $('button').css({
            opacity: 0.3
        });
        $('.tip').html('亲，请输入你注册的手机号')
        // $('.tip').val('你再想想你手机号是个啥')
        return false;
    }
    $('button').css({
        opacity: 1
    });
    $('.tip').html('')
    return true
})

//给后端发请求
$('button').click((e) => {
    e.preventDefault()

    if ($('button').css("opacity") == 1) {
        $.ajax({
            url: 'http://localhost:3000/login',
            method: 'post',
            data: $('form').serialize(),
            success: function (data) {
                $('.tip').html(data.msg)
                $('.tip').css('color', 'blue')
                console.log(data)
                if (data.code) {
                    location.href = 'index.html'
                }
            }
        })

    } else {
        $('.tip').html('亲，请先填写正确的账号密码')
        $('.tip').css('color', 'blue')
    }

})
