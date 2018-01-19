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