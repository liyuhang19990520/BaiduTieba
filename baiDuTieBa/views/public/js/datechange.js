function dateFormat(str) {
    str = str+"";
    str = str.replace(/ GMT.+$/, '');// Or str = str.substring(0, 24)
    var d = new Date(str);
    var a = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    for (var i = 0, len = a.length; i < len; i++) {
        if (a[i] < 10) {
            a[i] = '0' + a[i];
        }
    }
    str = a[0] + '-' + a[1] + '-' + a[2] + ' ' + a[3] + ':' + a[4] + ':' + a[5];
    return str;
}

