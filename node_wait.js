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


//  https://blog.csdn.net/zzwwjjdj1/article/details/5333313
五暂停代码
比如,访问第一个网站后暂停5秒,访问第二个网站后暂停10秒.
var async = require('async');
var http = require('http');
var task = [];
task.push(function(callback){
  console.time('访问3个网站时间统计');
  http.get('http://www.baidu.com/', function(res) { 
    console.log("百度访问结果: " + res.statusCode);
    setTimeout(function() {
      callback(null);
    }, 5000);
  }).on('error', function(e) { 
    console.log("百度访问结果: " + e.message);
    callback(e);
  });
})
 
task.push(function(callback){
  http.get('http://www.youku.com/', function(res) { 
    console.log("优酷访问结果: " + res.statusCode);
    setTimeout(function() {
      callback(null);
    }, 10000);
  }).on('error', function(e) {
    console.log("优酷访问结果: " + e.message);
    callback(e);
  });
})
 
task.push(function(callback){
  http.get('http://www.qq.com/', function(res) { 
    console.log("腾讯访问结果: " + res.statusCode);
    callback(null);
  }).on('error', function(e) { 
    console.log("腾讯访问结果: " + e.message);
    callback(e);
  });
})
 
async.waterfall(task, function(err,result){
  console.timeEnd('访问3个网站时间统计');
  if(err) return console.log(err);
  console.log('全部访问成功');
