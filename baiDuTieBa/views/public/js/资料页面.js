$('.messandomit').children().css('fill','#FFF')
$('header').css({'background': 'rgba(255,255,255,0)','color':'#FFF','opacity':'1'});
$('.iconcome').css('fill', '#FFF')
window.onscroll = function () {
    var top = $('.content')[0].offsetTop - window.scrollY
    console.log(top)
    $('.content').css('border-radius', '0.1rem')
    $('.invitation').css({ 'position': 'absolute', 'top': '0','border-bottom':'none','border-radius':'0.1rem' })
    $('.messandomit').children().css('fill','#2c2c2c')
    $('header').css({'background': 'rgba(255,255,255,1)','color':'#2c2c2c'});
    $('.iconcome').css('fill', '#2c2c2c')
    if (top <= 0) {
        $('.invitation').css({ 'position': 'fixed', "top": "0.493rem" ,'border-bottom':'solid 0.02rem #eee','border-radius':'0'})

        $('.content').css('border-radius', '0rem')
    }
    else if (top < 21) {
        $('header').css('opacity', 1);
        $('.content').css('border-radius', '0rem')
    }
    else if (top >=258) {
        $('header').css({'opacity':'1','background': 'rgba(255,255,255,0)','color':'#fff'});
        $('.messandomit').children().css('fill','#fff')
        $('.iconcome').css('fill', '#fff')
        // $('.iconmessage').css('fill', '#fff')
        // $('.iconomit').css('fill', '#fff')


    } else {
        $('header').css('opacity', (1 / top) * 20);
    }

}

