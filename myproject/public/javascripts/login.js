function login(){
	$.ajax({
		url: "/loginajax",
		type: "post",
		data: {
			name: $(".user_inp").val(),
			password: $(".psw_inp").val()
		},
		success: function(res){
			alert(res.message);
			if(res.code == 1){
				location.href = "/myindex?r=" + new Date().getTime();
			}
		}
	})
}