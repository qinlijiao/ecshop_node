var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var Goods = new Schema({
    goods_name  : String,
    goods_id  : Number,
    goods_num : String,
    goods_price : Number,
    goods_stock : Number,
    goods_sales : Number,
    flag : Number,
    shangjia : String,
    jingpin : String,
    xinpin : String,
    rexiao : String,
    date      : { type: Date, default: Date.now }
});

var GoodsModel = mongoose.model("good",Goods);
module.exports = GoodsModel;

// db.goods.insert({goods_name:"test",goods_id:1,goods_num:"EC00001",goods_price:200.00,goods_stock:200,goods_sales:25,flag : 1,shangjia:"../images/yes.gif",jingpin : "../images/yes.gif",xinpin : "../images/yes.gif",rexiao : "../images/yes.gif"})