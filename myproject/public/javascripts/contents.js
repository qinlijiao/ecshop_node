//设置表格宽度
var tr = $("table tr");
tr.each(function(){
	$(this).find("td").eq(0).css({"width":"8%","text-align":"left","padding-left":12});
	$(this).find("td").eq(1).css({"width":"14%","text-align":"left","padding-left":10});
	$(this).find("td").eq(2).css("width","17%");
	$(this).find("td").eq(3).css("width","7%");
	$(this).find("td").eq(4).css("width","4%");
	$(this).find("td").eq(5).css("width","4%");
	$(this).find("td").eq(6).css("width","4%");
	$(this).find("td").eq(7).css("width","4%");
	$(this).find("td").eq(8).css("width","7%");
	$(this).find("td").eq(9).css("width","4%");
	$(this).find("td").eq(10).css("width","7%");
	$(this).find("td").eq(11).css("width","20%");
})

//分页数据
var condition;     			//查询条件
var pageNow = 1;           //当前页码
var perPageCnt = 15;       //每页多少条数据

//获取表格数据
function myajax(){
	$.ajax({
		url: "/api/contents",
		type: "get",
		data: {
			condition : "",
			pageNow	: pageNow,
			perPageCnt :perPageCnt
		},
		success: function(res){
			console.log(res);
			var data = res.data;
			var len = data.length;
			console.log("数据长度"+len);
			$(".page .num").html(len);
			$(".page .now_page").html(pageNow);
			$(".page .pages").html(Math.ceil(len/perPageCnt));
			
			var old_len = $("table tr").length-1;
			console.log("原有"+old_len);
			
			for(var i=0; i<len-1; i++){
				$("table").append($(".xinxi").eq(0).clone());
			}
			console.log("创建后"+($("table tr").length-1))
			$(".xinxi").each(function(ind,val){
				$(this).find(".goods_id span").html(data[ind].goods_id);
				$(this).find(".goods_name").html(data[ind].goods_name);
				$(this).find(".goods_num").html(data[ind].goods_num);
				$(this).find(".goods_price").html(data[ind].goods_price);
				$(this).find(".shangjia").css("background-image","url("+data[ind].shangjia+")");
				$(this).find(".jingpin").css("background-image","url("+data[ind].jingpin+")");
				$(this).find(".xinpin").css("background-image","url("+data[ind].xinpin+")");
				$(this).find(".rexiao").css("background-image","url("+data[ind].rexiao+")");
				$(this).find(".goods_stock").html(data[ind].goods_stock);
				$(this).find(".goods_sales").html(data[ind].goods_sales);
			})
			
			//删除数据
			$("table .del").each(function(ind,val){
				$(val).click(function(){
					var goods_id = $(".goods_id span").eq(ind).html();
					console.log($(".goods_id span").eq(ind).html());
					
					$.ajax({
						type:"get",
						url:"/api/del",
						data:{
							index : goods_id
						},
						success:function(res){
							console.log(res);
						}
					});
					$(val).parent().parent().remove();
				})
			})
			
		}
	})
}
myajax();


