var express = require('express');
var router = express.Router();

var UserModel = require("../model/User");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//登录页面路由
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

//登录状态判断
router.get('/myindex', function(req, res, next) {
	console.log(req.session);
	if(req.session == null || req.session.username == ""){
		res.render('login', { title: 'Express' });
	}else{
		res.render('myindex', { title: 'Express' });
	}
  
});

//商品列表路由
router.get('/contents', function(req, res, next) {
  res.render('contents', { title: 'Express' });
});

//添加新商品路由
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

//登录验证
router.post('/loginajax', function(req, res, next) {
	var username = req.body.name;
	var psw = req.body.password;
	var result = {
		code : 1,
		message : "登陆成功"
	};
	if(username == "" || psw == ""){
		result.code = -1;
		result.message = "用户名或密码不能为空";
		res.json(result);
	}else{
		UserModel.find({username:username,password:psw},function(err,docs){
			if(docs.length == 0){
				result.code = -101;
				result.message = "用户名或密码错误，请重新输入";
			}else{
				req.session.username = username;
			}
			res.json(result);
		})
	}
	console.log(username,psw);
});

module.exports = router;
