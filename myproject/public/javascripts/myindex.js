
//设置内容div的高度
var wh = $(window).height();
var ww = $(window).width();
var list_h = wh - $(".top").height();
var contents_w = ww - $(".list").width() - $(".left_btn").width();
$(".list").css("height",list_h);
$(".left_btn").css("height",list_h);
$(".contents").css("height",list_h);
//$(".contents").css("width",contents_w);

//选项卡
var bg_bef = ["../images/menu_1.png","../images/menu_2.png","../images/menu_3.png","../images/menu_4.png","../images/menu_5.png","../images/menu_6.png","../images/menu_7.png","../images/menu_8.png","../images/menu_9.png","../images/menu_10.png","../images/menu_11.png","../images/menu_12.png","../images/menu_13.png","../images/menu_14.png","../images/menu_15.png","../images/menu_1.png"];     //展开前背景图片
var bg_aft = ["../images/menu1_1.png","../images/menu1_2.png","../images/menu_3.png","../images/menu_4.png","../images/menu_5.png","../images/menu_6.png","../images/menu_7.png","../images/menu_8.png","../images/menu_9.png","../images/menu_10.png","../images/menu_11.png","../images/menu_12.png","../images/menu_13.png","../images/menu_14.png","../images/menu_15.png","../images/menu_1.png"];    //展开后背景图片
$(".list1>li").click(function(){
	var this_ind = $(this).index()/2;
	console.log(this_ind);

	//子列表的切换
	$(".list2").each(function(ind,val){
		if(this_ind == ind){
			if($(val).css("display") == "none"){
				$(val).css("display","block");
			}else{
				$(val).css("display","none");
			}
		}else{
			$(val).css("display","none");
		}
	})

	//切换子列表背景颜色
	$(".list2 li").click(function(){
		var li_ind = $(this).index();
		$(".list2 li").each(function(ind,val){
			if(ind == li_ind){
				$(this).css("background","#797979");
			}else{
				$(this).css("background","#575757");
			}
		})
	})

	//切换背景图片
	$(".list1>li").each(function(ind,val){
		if($(".list2").eq(ind).css("display") == "block"){
			$(this).css("background-image","url("+bg_aft[ind]+")");
		}else{
			$(this).css("background-image","url("+bg_bef[ind]+")");
		}
	})

	
})

//左边收缩栏
$(".btn").click(function(){
	if($(".list .bef").css("display") == "block"){
		$(".list").css({
			"width": "36px",
			"overflow-y": "hidden"
		});
		$(".list .bef").css("display","none");
		$(".list .aft").css("display","block");
		$(".left_btn .btn").css("background-image","url(../images/arrow_left.gif)");
	}else{
		$(".list").css({
			"width": "180px",
			"overflow-y": "scroll"
		});
		$(".list .bef").css("display","block");
		$(".list .aft").css("display","none");
		$(".left_btn .btn").css("background-image","url(../images/arrow_right.gif)");
	}
})
$(".aft").click(function(){
	$(".list").css({
		"width": "180px",
		"overflow-y": "scroll"
	});
	$(".list .bef").css("display","block");
	$(".list .aft").css("display","none");
	$(".left_btn .btn").css("background-image","url(../images/arrow_right.gif)");
})

//加载分页面
$(".contents").load("/contents");

$(".goods_list").click(function(){
	$(".contents").load("/contents");
})

$(".add_new").click(function(){
	$(".contents").load("/add");
})