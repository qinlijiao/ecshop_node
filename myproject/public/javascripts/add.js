//选项卡
$(".class_tit li").click(function(){
	$(".class_tit li").css({
		"color": "#787878",
		"background": "#efefef"
	})
	$(".class_tit li").eq($(this).index()).css({
		"color": "#192e32",
		"background": "#fff"
	})
	$(".edit ul").css(
		"display","none"
	)
	$(".edit ul").eq($(this).index()).css(
		"display","block"
	)
})

//提交
$(".submit").click(function(){
	$.ajax({
		url: "/api/goods_submit",
		type: "get",
		data: {
			goods_name: $("#goods_name").val(),
			goods_num: $("#goods_num").val(),
			goods_price: $("#goods_price").val(),
		    goods_sales : $("#goods_sales").val(),
		    shangjia : "../images/yes.gif",
		    jingpin : $("#jingpin").prop("checked"),
		    xinpin : $("#xinpin").prop("checked"),
		    rexiao : $("#rexiao").prop("checked"),
		},
		success: function(res){
			console.log(res);
		}
	})
})
