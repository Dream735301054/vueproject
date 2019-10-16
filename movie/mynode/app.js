var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cookieSession = require("cookie-session")
let multer = require("multer")
let cors = require("cors")


//搭建服务器
var app = express();

// 中间件配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public','template')));
app.use('/admin',express.static(path.join(__dirname, 'public','admin')));
app.use(express.static(path.join(__dirname, 'public')));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(req.url.indexOf('user')!==-1 || req.url.indexOf('reg')!==-1){
      cb(null, path.join(__dirname, 'public','upload','user'))
    }else if(req.url.indexOf('banner')!==-1){
      cb(null, path.join(__dirname, 'public','upload','banner'))
    }else{
      cb(null, path.join(__dirname, 'public/upload/product'))
    }
  }
})
let multerObj = multer({storage});
// let multerObj = multer({dest:'字符路径'}); //存储方式dest指定死了，storage分目录
app.use(multerObj.any())//uplosd.any是中间件，需要安装，any指允许上传任何文件

//cookie
let arr = []
for(var i=0;i<1000;i++){
    arr.push('ajex_'+Math.random())
}
app.use(cookieSession({
    name:'ajex_id',
    keys:arr,
    maxAge:1000*60*60*24*30
}))
//跨域请求头
app.use(cors({
  "origin":["http://localhost:8080","http://localhost:5000","http://127.0.0.1:5500"],//允许前端跨域
  "credentials":true,//允许携带凭证
  "methods":"GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders":['Content-Type','Authorization']
}));
//响应
//管理端
//app.use('/admin/banner','路由')
app.use('/admin/banner',require('./routes/admin/banner'))
//用户端
app.all('/api/*',require('./routes/api/params'))
app.use('/api/home',require('./routes/api/home'))
app.use('/api/follow',require('./routes/api/follow'))
app.use('/api/list',require('./routes/api/list'))
app.use('/api/column',require('./routes/api/column'))
app.use('/api/login',require('./routes/api/login'))
app.use('/api/reg',require('./routes/api/reg'))
app.use('/api/logout',require('./routes/api/logout'))
app.use('/api/user',require('./routes/api/user'))
app.use('/api/banner',require('./routes/api/banner'))
//代理端
//app.use('/reoxy/apiname',路由)
app.use('/proxy/douban',require('./routes/proxy/douban'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send({err:1,msg:'错误的接口或请求方式'})
});

module.exports = app;
