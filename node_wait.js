/*js实现sleep功能 单位：毫秒*/
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

setTimeOut(f(),ms);


//  https://blog.csdn.net/zzwwjjdj1/article/details/53333123
