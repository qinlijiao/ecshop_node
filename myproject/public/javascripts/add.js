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