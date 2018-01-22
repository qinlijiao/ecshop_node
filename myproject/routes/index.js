var express = require('express');
var router = express.Router();

var UserModel = require("../model/User");
var GoodsModel = require("../model/Goods");

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

//添加商品数据
router.get("/api/goods_submit",function(req,res,next) {
	var goods_name = req.query.goods_name;
	var goods_id;
	var	goods_num = req.query.goods_num;
	var goods_price = req.query.goods_price;
	var goods_sales = req.query.goods_sales;
	var jingpin = (req.query.jingpin=="true") ? "../images/yes.gif" : "../images/no.gif";
	var xinpin = (req.query.xinpin=="true") ? "../images/yes.gif" : "../images/no.gif";
	var rexiao = (req.query.rexiao=="true") ? "../images/yes.gif" : "../images/no.gif";
	console.log("热销"+ req.query.rexiao);
	   
	GoodsModel.count({},function(err,count){
		goods_id = count+1;
		var new_goods = new GoodsModel;
		new_goods.goods_name = goods_name;
		new_goods.goods_id = goods_id;
		new_goods.goods_num = goods_num;
		new_goods.goods_price = goods_price;
		new_goods.goods_stock = 200;
		new_goods.goods_sales = goods_sales;
		new_goods.flag = 1;
		new_goods.shangjia = "../images/yes.gif";
		new_goods.jingpin = jingpin;
		new_goods.xinpin = xinpin;
		new_goods.rexiao = rexiao;
		new_goods.save(function(err){
			if(err){
				console.log(err);
				res.send(err);
			}else{
				res.send("添加成功");
			}
		})
	})		      
})

//获取商品列表数据
router.get('/api/contents',function(req,res,next) {
	var condition = req.query.condition || "";
	var pageNow = req.query.pageNow || 1;
	pageNow = parseInt(pageNow);
	var perPageCnt = req.query.perPageCnt || 10;
	perPageCnt = parseInt(perPageCnt);
	console.log("条件"+condition);
	
	GoodsModel.count({goods_name: {$regex: condition},flag:1},function(err,count){
		console.log("数量"+count);
		var query = GoodsModel.find({goods_name: {$regex: condition},flag:1}).skip((pageNow-1)*perPageCnt).limit(perPageCnt);
		query.exec(function(err,docs){
			var result = {
				pageNow : pageNow,
				total : count,
				data : docs
			}
			res.json(result);
		})
	})
})

//删除数据
router.get('/api/del', function(req, res, next) {
	var ind = req.query.index;
	var q = GoodsModel.findOneAndUpdate({goods_id:ind,flag:1},{flag:0},function(){
		res.send("删除成功");
	})
});


//添加新商品路由
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

//登录验证
router.post('/api/loginajax', function(req, res, next) {
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

//添加商品

module.exports = router;
